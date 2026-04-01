export type HomeSize = 'small' | 'medium' | 'large' | 'xl'

export type RoofPitch = 'low' | 'moderate' | 'steep'

export type CurrentMaterial = 'asphalt' | 'metal' | 'tile' | 'cedar' | 'other'

export type MaterialTier = 'good' | 'better' | 'best'

export interface QuoteTier {
  label: string
  product: string
  description: string
  low: number
  high: number
  perSquareLow: number
  perSquareHigh: number
  includes: string[]
}

export interface QuoteResult {
  estimatedSquares: number
  good: QuoteTier
  better: QuoteTier
  best: QuoteTier
}

export interface GeoResult {
  valid: boolean
  lat?: number
  lng?: number
  formattedAddress?: string
  city?: string
  state?: string
  inServiceArea?: boolean
  outOfAreaMessage?: string
}

export interface QuoteRequest {
  address: string
  homeSize: HomeSize
  homeSizeManual?: number
  pitch: RoofPitch
  currentMaterial: CurrentMaterial
}

export interface QuoteResponse {
  quote: QuoteResult
  geocode: GeoResult
}

export interface LeadFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  tierSelected: MaterialTier
  tcpaConsent: boolean
}

export interface LeadSubmitRequest {
  leadForm: LeadFormData
  quoteResult: QuoteResult
  address: string
  homeSize: HomeSize
  homeSizeManual?: number
  pitch: RoofPitch
  currentMaterial: CurrentMaterial
}

export type WizardStep = 1 | 2 | 3 | 4 | 5 | 6 | 'confirmation'

export interface WizardState {
  step: WizardStep
  address: string
  homeSize: HomeSize | null
  homeSizeManual: number | null
  pitch: RoofPitch | null
  currentMaterial: CurrentMaterial | null
  quoteResult: QuoteResponse | null
  selectedTier: MaterialTier | null
  isLoading: boolean
  error: string | null
}
