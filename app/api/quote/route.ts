import { NextRequest, NextResponse } from 'next/server'
import { calculateQuote } from '@/lib/pricingEngine'
import { geocodeAddress } from '@/lib/geocoding'
import type { HomeSize, RoofPitch, CurrentMaterial } from '@/types/quote'

const HOME_SIZES: HomeSize[] = ['small', 'medium', 'large', 'xl']
const ROOF_PITCHES: RoofPitch[] = ['low', 'moderate', 'steep']
const MATERIALS: CurrentMaterial[] = ['asphalt', 'metal', 'tile', 'cedar', 'other']

function isHomeSize(v: unknown): v is HomeSize {
  return typeof v === 'string' && HOME_SIZES.includes(v as HomeSize)
}
function isRoofPitch(v: unknown): v is RoofPitch {
  return typeof v === 'string' && ROOF_PITCHES.includes(v as RoofPitch)
}
function isCurrentMaterial(v: unknown): v is CurrentMaterial {
  return typeof v === 'string' && MATERIALS.includes(v as CurrentMaterial)
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ data: null, error: 'Invalid request body' }, { status: 400 })
  }

  const b = body as Record<string, unknown>

  if (typeof b.address !== 'string' || b.address.trim().length < 5) {
    return NextResponse.json({ data: null, error: 'Address is required (min 5 characters)' }, { status: 400 })
  }
  if (!isHomeSize(b.homeSize)) {
    return NextResponse.json({ data: null, error: 'Invalid home size' }, { status: 400 })
  }
  if (!isRoofPitch(b.pitch)) {
    return NextResponse.json({ data: null, error: 'Invalid roof pitch' }, { status: 400 })
  }
  if (!isCurrentMaterial(b.currentMaterial)) {
    return NextResponse.json({ data: null, error: 'Invalid current material' }, { status: 400 })
  }

  const homeSizeManual =
    typeof b.homeSizeManual === 'number' && b.homeSizeManual > 0
      ? b.homeSizeManual
      : undefined

  try {
    const [quote, geocode] = await Promise.all([
      Promise.resolve(calculateQuote({ homeSize: b.homeSize, homeSizeManual, pitch: b.pitch })),
      geocodeAddress(b.address.trim()),
    ])

    return NextResponse.json({ data: { quote, geocode }, error: null })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Pricing calculation failed'
    return NextResponse.json({ data: null, error: message }, { status: 500 })
  }
}
