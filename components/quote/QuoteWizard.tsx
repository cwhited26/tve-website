'use client'

import { useState, useCallback } from 'react'
import {
  MapPin,
  Home,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle,
  Star,
  Shield,
  Phone,
  Mail,
  Loader2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import type {
  WizardState,
  WizardStep,
  HomeSize,
  RoofPitch,
  CurrentMaterial,
  MaterialTier,
  LeadFormData,
  QuoteResponse,
  QuoteResult,
} from '@/types/quote'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  return `$${n.toLocaleString()}`
}

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '')
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`
}

// ─── Initial state ────────────────────────────────────────────────────────────

const INITIAL: WizardState = {
  step: 1,
  address: '',
  homeSize: null,
  homeSizeManual: null,
  pitch: null,
  currentMaterial: null,
  quoteResult: null,
  selectedTier: null,
  isLoading: false,
  error: null,
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

const STEP_LABELS = ['Address', 'Home Size', 'Roof Pitch', 'Material', 'Your Estimate', 'Contact']

function ProgressBar({ step }: { step: number }) {
  const total = 6
  const pct = ((step - 1) / (total - 1)) * 100

  return (
    <div className="px-6 py-4 border-b border-[#E2E8F0] bg-[#F8F9FA]">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest">
          Step {step} of {total}
        </p>
        <p className="text-[#64748B] text-xs font-medium">{STEP_LABELS[step - 1]}</p>
      </div>
      <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#2563EB] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          role="progressbar"
          aria-label={`Step ${step} of ${total}`}
        />
      </div>
    </div>
  )
}

// ─── Step 1: Address ─────────────────────────────────────────────────────────

function Step1({ state, onNext }: { state: WizardState; onNext: (address: string) => void }) {
  const [address, setAddress] = useState(state.address)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = address.trim()
    if (trimmed.length < 10) {
      setError('Please enter your full address including city and state.')
      return
    }
    setError('')
    onNext(trimmed)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
          <MapPin size={24} className="text-[#2563EB]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-black text-[#0A1628]">What&apos;s your home address?</h2>
        <p className="mt-2 text-sm text-[#64748B]">
          We&apos;ll confirm we service your area before calculating your estimate.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="wiz-address" className="block text-sm font-semibold text-[#334155] mb-1.5">
            Street address
          </label>
          <input
            id="wiz-address"
            type="text"
            value={address}
            onChange={(e) => { setAddress(e.target.value); if (error) setError('') }}
            placeholder="123 Main St, Chattanooga, TN 37402"
            autoComplete="street-address"
            className={`w-full h-12 px-4 rounded-xl border text-sm text-[#0A1628] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 transition-colors ${
              error
                ? 'border-[#DC2626] focus:ring-[#DC2626]/20'
                : 'border-[#E2E8F0] focus:ring-[#2563EB]/25 focus:border-[#2563EB]'
            }`}
          />
          {error && <p className="mt-1.5 text-xs text-[#DC2626]">{error}</p>}
          <p className="mt-1.5 text-xs text-[#94A3B8]">
            Currently serving Chattanooga, TN and North Georgia.
          </p>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          Continue <ArrowRight size={16} aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

// ─── Step 2: Home Size ────────────────────────────────────────────────────────

const SIZE_OPTIONS: { key: HomeSize; label: string; range: string; sqft: number }[] = [
  { key: 'small', label: 'Small', range: 'Under 1,500 sq ft', sqft: 1200 },
  { key: 'medium', label: 'Medium', range: '1,500–2,500 sq ft', sqft: 2000 },
  { key: 'large', label: 'Large', range: '2,500–3,500 sq ft', sqft: 3000 },
  { key: 'xl', label: 'Extra Large', range: '3,500+ sq ft', sqft: 4000 },
]

function Step2({
  state,
  onNext,
  onBack,
}: {
  state: WizardState
  onNext: (homeSize: HomeSize, manual: number | null) => void
  onBack: () => void
}) {
  const [selected, setSelected] = useState<HomeSize | null>(state.homeSize)
  const [showManual, setShowManual] = useState(false)
  const [manualValue, setManualValue] = useState(state.homeSizeManual ? String(state.homeSizeManual) : '')
  const [error, setError] = useState('')

  function handleContinue() {
    if (showManual) {
      const parsed = parseInt(manualValue.replace(/\D/g, ''), 10)
      if (!parsed || parsed < 500 || parsed > 20000) {
        setError('Please enter a valid home size between 500 and 20,000 sq ft.')
        return
      }
      const closest = SIZE_OPTIONS.reduce((prev, curr) =>
        Math.abs(curr.sqft - parsed) < Math.abs(prev.sqft - parsed) ? curr : prev,
      )
      onNext(closest.key, parsed)
    } else {
      if (!selected) { setError('Please select your home size.'); return }
      onNext(selected, null)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
          <Home size={24} className="text-[#2563EB]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-black text-[#0A1628]">How big is your home?</h2>
        <p className="mt-2 text-sm text-[#64748B]">Approximate is fine — we refine this during the inspection.</p>
      </div>

      {!showManual ? (
        <div className="grid grid-cols-2 gap-3">
          {SIZE_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => { setSelected(opt.key); setError('') }}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all ${
                selected === opt.key
                  ? 'border-[#2563EB] bg-[#EFF6FF]'
                  : 'border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:bg-[#F8FBFF]'
              }`}
            >
              <p className={`font-black text-sm ${selected === opt.key ? 'text-[#2563EB]' : 'text-[#0A1628]'}`}>
                {opt.label}
              </p>
              <p className="text-xs text-[#64748B]">{opt.range}</p>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <label className="block text-sm font-semibold text-[#334155] mb-1.5">
            Exact square footage
          </label>
          <input
            type="number"
            value={manualValue}
            onChange={(e) => { setManualValue(e.target.value); if (error) setError('') }}
            placeholder="e.g. 2,400"
            min={500}
            max={20000}
            className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] text-sm text-[#0A1628] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/25 focus:border-[#2563EB] transition-colors"
          />
        </div>
      )}

      <button
        onClick={() => { setShowManual(!showManual); setError('') }}
        className="text-sm text-[#2563EB] font-semibold underline underline-offset-2 self-center hover:text-[#1d4ed8] transition-colors"
      >
        {showManual ? '← Back to presets' : 'Enter exact square footage'}
      </button>

      {error && <p className="text-xs text-[#DC2626] text-center">{error}</p>}

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 h-12 border-2 border-[#E2E8F0] text-[#475569] font-semibold rounded-xl hover:bg-[#F8F9FA] hover:border-[#CBD5E1] transition-colors flex items-center justify-center gap-1.5 text-sm">
          <ArrowLeft size={14} aria-hidden="true" /> Back
        </button>
        <button onClick={handleContinue} className="flex-[2] h-12 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
          Continue <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// ─── Step 3: Roof Pitch ───────────────────────────────────────────────────────

function PitchSvg({ type, active }: { type: string; active: boolean }) {
  const stroke = active ? '#2563EB' : '#94A3B8'
  const fill = active ? '#EFF6FF' : '#F1F5F9'
  if (type === 'low') return (
    <svg viewBox="0 0 80 50" className="w-16 h-10" aria-hidden>
      <polygon points="0,40 40,22 80,40" fill={fill} stroke={stroke} strokeWidth="2.5" />
      <line x1="0" y1="40" x2="80" y2="40" stroke={stroke} strokeWidth="2" />
    </svg>
  )
  if (type === 'moderate') return (
    <svg viewBox="0 0 80 50" className="w-16 h-10" aria-hidden>
      <polygon points="0,45 40,10 80,45" fill={fill} stroke={stroke} strokeWidth="2.5" />
      <line x1="0" y1="45" x2="80" y2="45" stroke={stroke} strokeWidth="2" />
    </svg>
  )
  return (
    <svg viewBox="0 0 80 50" className="w-16 h-10" aria-hidden>
      <polygon points="12,48 40,4 68,48" fill={fill} stroke={stroke} strokeWidth="2.5" />
      <line x1="0" y1="48" x2="80" y2="48" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

const PITCH_OPTIONS: { key: RoofPitch; label: string; sub: string; desc: string }[] = [
  { key: 'low', label: 'Low Pitch', sub: 'Easily walkable', desc: 'A gentle slope common on ranches and modern homes.' },
  { key: 'moderate', label: 'Moderate Pitch', sub: 'Standard residential', desc: 'The most common roof pitch in the Chattanooga area.' },
  { key: 'steep', label: 'Steep Pitch', sub: 'High slope, dramatic', desc: 'A sharp slope common on Victorians and mountain-area homes.' },
]

function Step3({
  state,
  onNext,
  onBack,
}: {
  state: WizardState
  onNext: (pitch: RoofPitch) => void
  onBack: () => void
}) {
  const [selected, setSelected] = useState<RoofPitch | null>(state.pitch)
  const [error, setError] = useState('')

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-black text-[#0A1628]">What&apos;s your roof pitch?</h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Not sure? Pick Moderate — it&apos;s the most common in this area.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {PITCH_OPTIONS.map((opt) => {
          const active = selected === opt.key
          return (
            <button
              key={opt.key}
              onClick={() => { setSelected(opt.key); setError('') }}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all w-full ${
                active
                  ? 'border-[#2563EB] bg-[#EFF6FF]'
                  : 'border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:bg-[#F8FBFF]'
              }`}
            >
              <PitchSvg type={opt.key} active={active} />
              <div>
                <p className={`font-black text-sm ${active ? 'text-[#2563EB]' : 'text-[#0A1628]'}`}>
                  {opt.label}
                </p>
                <p className="text-xs font-semibold text-[#475569] mt-0.5">{opt.sub}</p>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{opt.desc}</p>
              </div>
            </button>
          )
        })}
      </div>

      {error && <p className="text-xs text-[#DC2626] text-center">{error}</p>}

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 h-12 border-2 border-[#E2E8F0] text-[#475569] font-semibold rounded-xl hover:bg-[#F8F9FA] transition-colors flex items-center justify-center gap-1.5 text-sm">
          <ArrowLeft size={14} aria-hidden="true" /> Back
        </button>
        <button
          onClick={() => {
            if (!selected) { setError('Please select your roof pitch.'); return }
            onNext(selected)
          }}
          className="flex-[2] h-12 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
        >
          Continue <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// ─── Step 4: Material + Quote Fetch ──────────────────────────────────────────

const MATERIAL_OPTIONS: { key: CurrentMaterial; label: string; icon: string }[] = [
  { key: 'asphalt', label: 'Asphalt Shingles', icon: '🏠' },
  { key: 'metal', label: 'Metal Roof', icon: '🔩' },
  { key: 'tile', label: 'Tile / Clay', icon: '🏛️' },
  { key: 'cedar', label: 'Cedar Shake', icon: '🌲' },
  { key: 'other', label: 'Other / Not Sure', icon: '❓' },
]

function Step4({
  state,
  onNext,
  onBack,
}: {
  state: WizardState
  onNext: (material: CurrentMaterial) => Promise<void>
  onBack: () => void
}) {
  const [selected, setSelected] = useState<CurrentMaterial | null>(state.currentMaterial)
  const [error, setError] = useState('')

  async function handleContinue() {
    if (!selected) { setError('Please select your current roofing material.'); return }
    await onNext(selected)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-black text-[#0A1628]">What&apos;s on your roof now?</h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Your current material helps us estimate tear-off complexity.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {MATERIAL_OPTIONS.map((opt) => {
          const active = selected === opt.key
          return (
            <button
              key={opt.key}
              onClick={() => { setSelected(opt.key); setError('') }}
              className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border-2 transition-all ${
                active
                  ? 'border-[#2563EB] bg-[#EFF6FF]'
                  : 'border-[#E2E8F0] bg-white hover:border-[#2563EB]/40 hover:bg-[#F8FBFF]'
              }`}
            >
              <span className="text-3xl">{opt.icon}</span>
              <p className={`text-xs font-bold text-center leading-tight ${active ? 'text-[#2563EB]' : 'text-[#0A1628]'}`}>
                {opt.label}
              </p>
            </button>
          )
        })}
      </div>

      {error && <p className="text-xs text-[#DC2626] text-center">{error}</p>}

      {state.error && !state.isLoading && (
        <div className="p-4 bg-[#FEF2F2] border border-[#FECACA] rounded-xl text-sm text-[#DC2626]">
          {state.error}
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 h-12 border-2 border-[#E2E8F0] text-[#475569] font-semibold rounded-xl hover:bg-[#F8F9FA] transition-colors flex items-center justify-center gap-1.5 text-sm">
          <ArrowLeft size={14} aria-hidden="true" /> Back
        </button>
        <button
          onClick={handleContinue}
          disabled={state.isLoading}
          className="flex-[2] h-12 bg-[#2563EB] hover:bg-[#1d4ed8] disabled:bg-[#94A3B8] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
        >
          {state.isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Calculating…
            </>
          ) : (
            <>Calculate My Estimate <ArrowRight size={14} aria-hidden="true" /></>
          )}
        </button>
      </div>
    </div>
  )
}

// ─── Step 5: Results ─────────────────────────────────────────────────────────

function TierCard({
  tier,
  data,
  selected,
  recommended,
  onSelect,
}: {
  tier: MaterialTier
  data: QuoteResult['good']
  selected: boolean
  recommended: boolean
  onSelect: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`relative rounded-2xl border-2 overflow-hidden transition-all ${
        selected
          ? 'border-[#2563EB] shadow-lg shadow-[#2563EB]/15'
          : recommended
          ? 'border-[#F59E0B] shadow-md shadow-[#F59E0B]/10'
          : 'border-[#E2E8F0]'
      }`}
    >
      {recommended && (
        <div className="bg-[#F59E0B] text-white text-center py-1.5 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1">
          <Star size={11} fill="white" stroke="white" aria-hidden="true" />
          Most Popular
        </div>
      )}

      <div className="p-5 bg-white">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[#2563EB] font-black text-xs uppercase tracking-widest mb-0.5">
              {data.label}
            </p>
            <p className="font-black text-[#0A1628] text-base">{data.product}</p>
          </div>
          <div className="text-right">
            <p className="text-[#64748B] text-xs mb-0.5">Est. total</p>
            <p className="text-[#0A1628] font-black text-lg leading-tight">
              {fmt(data.low)}–{fmt(data.high)}
            </p>
          </div>
        </div>

        <p className="text-[#64748B] text-xs leading-relaxed mb-4">{data.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-semibold text-[#2563EB] mb-3 hover:text-[#1d4ed8] transition-colors"
        >
          {expanded ? <ChevronUp size={13} aria-hidden /> : <ChevronDown size={13} aria-hidden />}
          {expanded ? 'Hide' : 'See'} what&apos;s included
        </button>

        {expanded && (
          <ul className="flex flex-col gap-1.5 mb-4">
            {data.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                <Check size={11} className="text-[#16A34A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onSelect}
          className={`w-full h-11 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
            selected
              ? 'bg-[#2563EB] text-white shadow-md'
              : recommended
              ? 'bg-[#F59E0B] hover:bg-[#D97706] text-white'
              : 'bg-[#0A1628] hover:bg-[#1e3a5f] text-white'
          }`}
        >
          {selected ? (
            <>
              <CheckCircle size={15} aria-hidden="true" />
              Selected — Get Free Estimate
            </>
          ) : (
            <>Select {data.label} — {fmt(data.low)}–{fmt(data.high)}</>
          )}
        </button>
      </div>
    </div>
  )
}

function Step5({
  state,
  onSelect,
  onBack,
}: {
  state: WizardState
  onSelect: (tier: MaterialTier) => void
  onBack: () => void
}) {
  const quote = state.quoteResult!.quote

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#166534] text-xs font-bold px-4 py-2 rounded-full mb-4">
          <Check size={13} aria-hidden="true" />
          Your instant estimate is ready
        </div>
        <h2 className="text-2xl font-black text-[#0A1628]">Your Roof Replacement Estimate</h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Based on ~{quote.estimatedSquares} roofing squares.
          Select an option to get your free on-site inspection.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <TierCard tier="good" data={quote.good} selected={state.selectedTier === 'good'} recommended={false} onSelect={() => onSelect('good')} />
        <TierCard tier="better" data={quote.better} selected={state.selectedTier === 'better'} recommended={true} onSelect={() => onSelect('better')} />
        <TierCard tier="best" data={quote.best} selected={state.selectedTier === 'best'} recommended={false} onSelect={() => onSelect('best')} />
      </div>

      <p className="text-xs text-center text-[#94A3B8] leading-relaxed">
        These are price-range estimates. Your final quote is confirmed after a free on-site inspection.
      </p>

      <button onClick={onBack} className="h-11 border-2 border-[#E2E8F0] text-[#475569] font-semibold rounded-xl hover:bg-[#F8F9FA] transition-colors text-sm">
        ← Adjust my selections
      </button>
    </div>
  )
}

// ─── Step 6: Lead Capture ─────────────────────────────────────────────────────

function Step6({
  state,
  onSubmit,
  onBack,
}: {
  state: WizardState
  onSubmit: (data: LeadFormData) => Promise<void>
  onBack: () => void
}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [tcpa, setTcpa] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const tierData = state.quoteResult!.quote[state.selectedTier!]

  function validate(): boolean {
    const errors: Record<string, string> = {}
    if (!firstName.trim()) errors.firstName = 'Required'
    if (!lastName.trim()) errors.lastName = 'Required'
    if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a valid 10-digit number'
    if (!email.includes('@') || !email.includes('.')) errors.email = 'Enter a valid email'
    if (!tcpa) errors.tcpa = 'You must agree to be contacted to continue'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    await onSubmit({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.replace(/\D/g, ''),
      email: email.trim(),
      tierSelected: state.selectedTier!,
      tcpaConsent: tcpa,
    })
  }

  const inputClass = (hasErr: boolean) =>
    `w-full h-12 px-4 rounded-xl border text-sm text-[#0A1628] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 transition-colors ${
      hasErr
        ? 'border-[#DC2626] focus:ring-[#DC2626]/20'
        : 'border-[#E2E8F0] focus:ring-[#2563EB]/25 focus:border-[#2563EB]'
    }`

  return (
    <div className="flex flex-col gap-5">
      {/* Selected tier summary */}
      <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E2E8F0] flex items-start gap-4">
        <div className="flex-1">
          <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-0.5">Your selection</p>
          <p className="font-black text-[#0A1628] text-sm">{tierData.product}</p>
          <p className="text-[#64748B] text-xs mt-0.5 truncate">{state.address}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-[#64748B] text-xs mb-0.5">Est. range</p>
          <p className="font-black text-[#2563EB] text-base">{fmt(tierData.low)}–{fmt(tierData.high)}</p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-black text-[#0A1628]">Get Your Free Estimate</h2>
        <p className="mt-1.5 text-sm text-[#64748B]">
          We&apos;ll send your quote summary and schedule a free inspection.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-[#334155] mb-1.5">First name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value); if (fieldErrors.firstName) setFieldErrors((p) => ({ ...p, firstName: '' })) }}
              autoComplete="given-name"
              placeholder="Chase"
              className={inputClass(!!fieldErrors.firstName)}
            />
            {fieldErrors.firstName && <p className="mt-1 text-xs text-[#DC2626]">{fieldErrors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#334155] mb-1.5">Last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value); if (fieldErrors.lastName) setFieldErrors((p) => ({ ...p, lastName: '' })) }}
              autoComplete="family-name"
              placeholder="Whited"
              className={inputClass(!!fieldErrors.lastName)}
            />
            {fieldErrors.lastName && <p className="mt-1 text-xs text-[#DC2626]">{fieldErrors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#334155] mb-1.5">Phone number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => { setPhone(formatPhone(e.target.value)); if (fieldErrors.phone) setFieldErrors((p) => ({ ...p, phone: '' })) }}
            autoComplete="tel"
            placeholder="(423) 555-0100"
            className={inputClass(!!fieldErrors.phone)}
          />
          {fieldErrors.phone && <p className="mt-1 text-xs text-[#DC2626]">{fieldErrors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#334155] mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: '' })) }}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass(!!fieldErrors.email)}
          />
          {fieldErrors.email && <p className="mt-1 text-xs text-[#DC2626]">{fieldErrors.email}</p>}
        </div>

        {/* TCPA */}
        <div className={`flex items-start gap-3 p-4 rounded-xl border ${fieldErrors.tcpa ? 'border-[#DC2626] bg-[#FEF2F2]' : 'border-[#E2E8F0] bg-[#F8FBFF]'}`}>
          <input
            id="wiz-tcpa"
            type="checkbox"
            checked={tcpa}
            onChange={(e) => { setTcpa(e.target.checked); if (fieldErrors.tcpa) setFieldErrors((p) => ({ ...p, tcpa: '' })) }}
            className="mt-0.5 w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] cursor-pointer"
          />
          <label htmlFor="wiz-tcpa" className="text-xs text-[#475569] leading-relaxed cursor-pointer">
            I agree to be contacted by Tennessee Valley Exteriors via phone, text, and email about my
            project. Message rates may apply. Reply STOP to opt out.
          </label>
        </div>
        {fieldErrors.tcpa && <p className="text-xs text-[#DC2626] -mt-2">{fieldErrors.tcpa}</p>}

        {state.error && (
          <div className="p-4 bg-[#FEF2F2] border border-[#FECACA] rounded-xl text-sm text-[#DC2626]">
            {state.error}
          </div>
        )}

        <button
          type="submit"
          disabled={state.isLoading}
          className="w-full h-12 bg-[#2563EB] hover:bg-[#1d4ed8] disabled:bg-[#94A3B8] text-white font-black rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
        >
          {state.isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending your estimate…
            </>
          ) : (
            <>Get My Free Estimate <ArrowRight size={14} aria-hidden="true" /></>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
          <Shield size={12} aria-hidden="true" />
          No spam. No pressure. Licensed &amp; insured.
        </div>
      </form>

      <button onClick={onBack} className="h-11 border-2 border-[#E2E8F0] text-[#475569] font-semibold rounded-xl hover:bg-[#F8F9FA] transition-colors text-sm">
        ← Back
      </button>
    </div>
  )
}

// ─── Confirmation ─────────────────────────────────────────────────────────────

function Confirmation({ firstName, email }: { firstName: string; email: string }) {
  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      <div className="w-20 h-20 rounded-full bg-[#DCFCE7] flex items-center justify-center shadow-lg">
        <CheckCircle size={40} className="text-[#16A34A]" aria-hidden="true" />
      </div>

      <div>
        <h2 className="text-2xl font-black text-[#0A1628]">
          You&apos;re all set{firstName ? `, ${firstName}` : ''}!
        </h2>
        <p className="mt-3 text-sm text-[#64748B] leading-relaxed max-w-xs mx-auto">
          Your estimate summary has been sent to{' '}
          <strong className="text-[#0A1628]">{email}</strong>. One of our team members will
          reach out shortly to schedule your{' '}
          <strong>free roof inspection</strong>.
        </p>
      </div>

      <div className="w-full bg-[#F8F9FA] rounded-2xl p-5 border border-[#E2E8F0]">
        <p className="text-sm font-bold text-[#0A1628] mb-4">Need to reach us directly?</p>
        <a
          href={COMPANY.phoneTel}
          className="flex items-center justify-center gap-2 w-full h-12 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-colors text-sm shadow-sm mb-3"
        >
          <Phone size={16} aria-hidden="true" />
          {COMPANY.phone}
        </a>
        <a
          href={`mailto:${COMPANY.email}`}
          className="flex items-center justify-center gap-2 w-full h-11 border-2 border-[#E2E8F0] text-[#2563EB] font-semibold rounded-xl hover:bg-[#EFF6FF] transition-colors text-sm"
        >
          <Mail size={15} aria-hidden="true" />
          {COMPANY.email}
        </a>
      </div>

      <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
        <Shield size={12} aria-hidden="true" />
        <span>Tennessee Valley Exteriors · Chattanooga, TN · Veteran-Owned</span>
      </div>
    </div>
  )
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────

export function QuoteWizard() {
  const [wizState, setWizState] = useState<WizardState>(INITIAL)
  const [confirmedLead, setConfirmedLead] = useState<{ firstName: string; email: string } | null>(null)

  const goTo = useCallback((step: WizardStep) => {
    setWizState((s) => ({ ...s, step, error: null }))
  }, [])

  // Step 1 → 2
  function handleAddress(address: string) {
    setWizState((s) => ({ ...s, address, step: 2, error: null }))
  }

  // Step 2 → 3
  function handleHomeSize(homeSize: HomeSize, manual: number | null) {
    setWizState((s) => ({ ...s, homeSize, homeSizeManual: manual, step: 3, error: null }))
  }

  // Step 3 → 4
  function handlePitch(pitch: RoofPitch) {
    setWizState((s) => ({ ...s, pitch, step: 4, error: null }))
  }

  // Step 4 → fetch quote → step 5
  async function handleMaterial(currentMaterial: CurrentMaterial) {
    setWizState((s) => ({ ...s, currentMaterial, isLoading: true, error: null }))

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: wizState.address,
          homeSize: wizState.homeSize,
          homeSizeManual: wizState.homeSizeManual ?? undefined,
          pitch: wizState.pitch,
          currentMaterial,
        }),
      })

      const json = (await res.json()) as { data: QuoteResponse | null; error: string | null }

      if (!res.ok || json.error || !json.data) {
        setWizState((s) => ({
          ...s,
          currentMaterial,
          isLoading: false,
          error: json.error ?? 'Failed to calculate. Please try again.',
        }))
        return
      }

      const { geocode } = json.data

      if (geocode.valid && geocode.inServiceArea === false) {
        setWizState((s) => ({
          ...s,
          currentMaterial,
          isLoading: false,
          error:
            geocode.outOfAreaMessage ??
            "We don't service that area yet. We're focused on Chattanooga, TN and North Georgia.",
        }))
        return
      }

      setWizState((s) => ({
        ...s,
        currentMaterial,
        quoteResult: json.data,
        isLoading: false,
        error: null,
        step: 5,
      }))
    } catch {
      setWizState((s) => ({
        ...s,
        currentMaterial,
        isLoading: false,
        error: 'Network error. Please check your connection and try again.',
      }))
    }
  }

  // Step 5: select tier → step 6
  function handleSelectTier(tier: MaterialTier) {
    setWizState((s) => ({ ...s, selectedTier: tier, step: 6, error: null }))
  }

  // Step 6: submit lead → confirmation
  async function handleLeadSubmit(leadForm: LeadFormData) {
    if (!wizState.quoteResult || !wizState.homeSize || !wizState.pitch || !wizState.currentMaterial) return
    setWizState((s) => ({ ...s, isLoading: true, error: null }))

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${leadForm.firstName} ${leadForm.lastName}`,
          phone: leadForm.phone,
          service: 'roof-replacement',
          message: [
            `Address: ${wizState.address}`,
            `Home size: ${wizState.homeSize}${wizState.homeSizeManual ? ` (${wizState.homeSizeManual} sq ft)` : ''}`,
            `Roof pitch: ${wizState.pitch}`,
            `Current material: ${wizState.currentMaterial}`,
            `Selected tier: ${leadForm.tierSelected}`,
            `Estimate range: $${wizState.quoteResult.quote[leadForm.tierSelected].low.toLocaleString()}–$${wizState.quoteResult.quote[leadForm.tierSelected].high.toLocaleString()}`,
            `Email: ${leadForm.email}`,
          ].join(' | '),
          website: '',
        }),
      })

      const json = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok || json.error) {
        setWizState((s) => ({
          ...s,
          isLoading: false,
          error: json.error ?? 'Failed to submit. Please call us directly.',
        }))
        return
      }

      setConfirmedLead({ firstName: leadForm.firstName, email: leadForm.email })
      setWizState((s) => ({ ...s, isLoading: false, step: 'confirmation', error: null }))
    } catch {
      setWizState((s) => ({
        ...s,
        isLoading: false,
        error: `Network error. Please call ${COMPANY.phone} directly.`,
      }))
    }
  }

  const numericStep = typeof wizState.step === 'number' ? wizState.step : 7

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Widget header */}
      <div className="bg-[#0A1628] px-6 py-5 rounded-t-2xl flex items-center justify-between">
        <div>
          <p className="text-[#2563EB] text-xs font-black uppercase tracking-widest">
            Tennessee Valley Exteriors
          </p>
          <h2 className="text-white font-black text-lg mt-0.5">Instant Roof Estimate</h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
          <Home size={18} className="text-[#2563EB]" aria-hidden="true" />
        </div>
      </div>

      {/* Progress bar (hide on confirmation) */}
      {wizState.step !== 'confirmation' && (
        <ProgressBar step={numericStep} />
      )}

      {/* Step content */}
      <div className="bg-white border-x border-b border-[#E2E8F0] rounded-b-2xl px-6 py-7 shadow-xl">
        {wizState.step === 1 && (
          <Step1 state={wizState} onNext={handleAddress} />
        )}
        {wizState.step === 2 && (
          <Step2 state={wizState} onNext={handleHomeSize} onBack={() => goTo(1)} />
        )}
        {wizState.step === 3 && (
          <Step3 state={wizState} onNext={handlePitch} onBack={() => goTo(2)} />
        )}
        {wizState.step === 4 && (
          <Step4 state={wizState} onNext={handleMaterial} onBack={() => goTo(3)} />
        )}
        {wizState.step === 5 && wizState.quoteResult && (
          <Step5 state={wizState} onSelect={handleSelectTier} onBack={() => goTo(4)} />
        )}
        {wizState.step === 6 && wizState.quoteResult && wizState.selectedTier && (
          <Step6 state={wizState} onSubmit={handleLeadSubmit} onBack={() => goTo(5)} />
        )}
        {wizState.step === 'confirmation' && confirmedLead && (
          <Confirmation firstName={confirmedLead.firstName} email={confirmedLead.email} />
        )}
      </div>
    </div>
  )
}
