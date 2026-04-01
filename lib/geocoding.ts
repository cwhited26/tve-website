/**
 * Geocoding helper — SERVER-SIDE ONLY.
 * Uses Google Maps Geocoding API. Key never exposed to browser.
 */

import { SERVICE_AREA } from './pricingEngine'
import type { GeoResult } from '@/types/quote'

interface GeocodeComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface GeocodeResult {
  formatted_address: string
  geometry: { location: { lat: number; lng: number } }
  address_components: GeocodeComponent[]
}

interface GeocodeApiResponse {
  status: string
  results: GeocodeResult[]
}

export async function geocodeAddress(address: string): Promise<GeoResult> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return {
      valid: true,
      inServiceArea: true,
      formattedAddress: address,
    }
  }

  const encoded = encodeURIComponent(address)
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=${apiKey}`

  try {
    const res = await fetch(url)
    const data = (await res.json()) as GeocodeApiResponse

    if (data.status !== 'OK' || data.results.length === 0) {
      return { valid: false, inServiceArea: false, formattedAddress: address }
    }

    const result = data.results[0]
    const { lat, lng } = result.geometry.location

    const inServiceArea =
      lat >= SERVICE_AREA.latMin &&
      lat <= SERVICE_AREA.latMax &&
      lng >= SERVICE_AREA.lngMin &&
      lng <= SERVICE_AREA.lngMax

    const cityComponent = result.address_components.find((c) => c.types.includes('locality'))
    const stateComponent = result.address_components.find((c) =>
      c.types.includes('administrative_area_level_1'),
    )

    return {
      valid: true,
      lat,
      lng,
      formattedAddress: result.formatted_address,
      city: cityComponent?.long_name,
      state: stateComponent?.short_name,
      inServiceArea,
      outOfAreaMessage: inServiceArea
        ? undefined
        : "We don't service that area yet — we're currently focused on Chattanooga, TN and North Georgia.",
    }
  } catch {
    return { valid: true, inServiceArea: true, formattedAddress: address }
  }
}
