/**
 * PRICING ENGINE — SERVER-SIDE ONLY
 * Never import this module in browser components.
 */

import type { HomeSize, RoofPitch, QuoteResult } from '@/types/quote'

export const HOME_SIZE_MAP: Record<string, number> = {
  small: 1200,
  medium: 2000,
  large: 3000,
  xl: 4000,
}

export const PITCH_FACTOR_MAP: Record<string, number> = {
  low: 1.15,
  moderate: 1.25,
  steep: 1.40,
}

export const WASTE_FACTOR_MAP: Record<string, number> = {
  low: 1.10,
  moderate: 1.15,
  steep: 1.20,
}

export const SQ_FT_PER_SQUARE = 100

export const TIER_PRICING = {
  good: {
    label: 'Good',
    product: 'IKO Cambridge',
    description: 'A reliable, cost-effective architectural shingle with excellent weather resistance and a clean dimensional look.',
    low: 385,
    high: 400,
    includes: [
      'IKO Cambridge architectural shingles',
      'Synthetic underlayment',
      'Ice & water shield (eaves)',
      'Ridge cap shingles',
      'Full tear-off & haul away',
      '10-year workmanship warranty',
    ],
  },
  better: {
    label: 'Better',
    product: 'Owens Corning Duration',
    description: 'A top-selling premium shingle with SureNail Technology for superior wind resistance and a rich dimensional appearance.',
    low: 400,
    high: 415,
    includes: [
      'Owens Corning Duration shingles',
      'WeatherLock self-sealing underlayment',
      'Ice & water shield (eaves & valleys)',
      'VentSure ridge vent',
      'Full tear-off & haul away',
      '15-year workmanship warranty',
    ],
  },
  best: {
    label: 'Best',
    product: 'OC TruDefinition Duration',
    description: 'The flagship OC shingle with StreakGuard algae protection, bold contrast granules, and lifetime limited warranty coverage.',
    low: 415,
    high: 430,
    includes: [
      'OC TruDefinition Duration shingles',
      'WeatherLock M self-sealing underlayment',
      'Ice & water shield (eaves, valleys & penetrations)',
      'VentSure ridge vent',
      'Starter strip shingles',
      'Full tear-off & haul away',
      'Lifetime workmanship warranty',
    ],
  },
} as const

export const SERVICE_AREA = {
  latMin: 34.5,
  latMax: 35.5,
  lngMin: -85.8,
  lngMax: -84.7,
}

interface PricingInput {
  homeSize: HomeSize
  homeSizeManual?: number
  pitch: RoofPitch
}

export function calculateQuote(input: PricingInput): QuoteResult {
  const { homeSize, homeSizeManual, pitch } = input

  const footprint = homeSizeManual ?? HOME_SIZE_MAP[homeSize]
  const pitchFactor = PITCH_FACTOR_MAP[pitch]
  const wasteFactor = WASTE_FACTOR_MAP[pitch]

  const grossSqFt = footprint * pitchFactor * wasteFactor
  const estimatedSquares = Math.ceil(grossSqFt / SQ_FT_PER_SQUARE)

  return {
    estimatedSquares,
    good: buildTier('good', estimatedSquares),
    better: buildTier('better', estimatedSquares),
    best: buildTier('best', estimatedSquares),
  }
}

function buildTier(tier: 'good' | 'better' | 'best', squares: number) {
  const config = TIER_PRICING[tier]
  const low = Math.round(config.low * squares)
  const high = Math.round(config.high * squares)

  return {
    label: config.label,
    product: config.product,
    description: config.description,
    low,
    high,
    perSquareLow: config.low,
    perSquareHigh: config.high,
    includes: [...config.includes],
  }
}
