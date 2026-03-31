'use client'

import { useState, useId } from 'react'
import { Loader2 } from 'lucide-react'

const SERVICES = [
  { value: 'roof-replacement', label: 'Roof Replacement' },
  { value: 'roof-repair', label: 'Roof Repair' },
  { value: 'gutters', label: 'Gutters & Downspouts' },
  { value: 'siding', label: 'Siding' },
  { value: 'decks', label: 'Composite Decks' },
  { value: 'painting', label: 'Exterior Painting' },
  { value: 'storm-damage', label: 'Storm Damage' },
  { value: 'inspections', label: 'Roof Inspection' },
  { value: 'other', label: 'Not Sure / Other' },
]

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function HeroLeadForm() {
  const id = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service, website: '' }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      clearTimeout(timeoutId)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6L9 17l-5-5"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-[#0A1628] font-bold text-xl mb-2">We Got It!</h3>
        <p className="text-[#64748B] text-sm">
          Thanks {name.split(' ')[0]}! We&apos;ll call you back within 2 hours during business
          hours to schedule your free inspection.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-[#334155] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-colors min-h-[44px]'

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0"
      />

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor={`${id}-name`} className="block text-xs font-semibold text-[#334155] mb-1.5 uppercase tracking-wide">
            Your Name <span className="text-[#DC2626]">*</span>
          </label>
          <input
            id={`${id}-name`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className="block text-xs font-semibold text-[#334155] mb-1.5 uppercase tracking-wide">
            Phone Number <span className="text-[#DC2626]">*</span>
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(423) 555-0100"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${id}-service`} className="block text-xs font-semibold text-[#334155] mb-1.5 uppercase tracking-wide">
            Service Needed <span className="text-[#DC2626]">*</span>
          </label>
          <select
            id={`${id}-service`}
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className={`${inputClass} bg-white appearance-none cursor-pointer`}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {status === 'error' && (
          <p className="text-[#DC2626] text-sm" role="alert">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1d4ed8] disabled:opacity-70 transition-colors min-h-[48px]"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Schedule Free Inspection'
          )}
        </button>

        <p className="text-center text-xs text-[#94A3B8]">
          No pressure. No obligation. We respond within 2 hours.
        </p>
      </div>
    </form>
  )
}
