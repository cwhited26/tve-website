'use client'

import { useState, useId } from 'react'
import { Loader2, CheckCircle, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const SERVICES = [
  { value: 'roof-replacement', label: 'Roof Replacement' },
  { value: 'roof-repair', label: 'Roof Repair' },
  { value: 'gutters', label: 'Gutters & Downspouts' },
  { value: 'siding', label: 'Siding' },
  { value: 'decks', label: 'Composite Decks' },
  { value: 'painting', label: 'Exterior Painting' },
  { value: 'storm-damage', label: 'Storm Damage' },
  { value: 'inspections', label: 'Free Roof Inspection' },
  { value: 'other', label: 'Not Sure / Other' },
]

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface QuoteWidgetEmbedProps {
  /** Pre-select a service type */
  service?: string
  /** Pre-fill the city for service area pages */
  city?: string
  heading?: string
  subheading?: string
}

export function QuoteWidgetEmbed({
  service: defaultService = '',
  city: defaultCity = '',
  heading = 'Get Your Instant Estimate',
  subheading = 'Answer a few quick questions about your project and get a price range in minutes — no sales pressure, no obligation.',
}: QuoteWidgetEmbedProps) {
  const id = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(defaultService)
  const [address, setAddress] = useState(defaultCity)
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const message = address ? `Address/city: ${address}` : undefined
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service, message, website: '' }),
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

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 transition-colors min-h-[44px]'

  return (
    <section className="bg-[#0A1628] py-16 px-6" aria-label="Get your instant estimate">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{heading}</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{subheading}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-green-400" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">We Got It!</h3>
              <p className="text-white/70 text-base max-w-sm mx-auto mb-6">
                Thanks {name.split(' ')[0]}! We&apos;ll reach out within 2 hours during business
                hours to go over your estimate.
              </p>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                Or call us now: {COMPANY.phone}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] opacity-0"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`${id}-service`}
                    className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide"
                  >
                    Service Needed <span className="text-[#2563EB]">*</span>
                  </label>
                  <select
                    id={`${id}-service`}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-[#0A1628]">
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value} className="bg-[#0A1628]">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={`${id}-address`}
                    className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide"
                  >
                    City or Address
                  </label>
                  <input
                    id={`${id}-address`}
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Chattanooga, TN"
                    autoComplete="address-level2"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${id}-name`}
                    className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide"
                  >
                    Your Name <span className="text-[#2563EB]">*</span>
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
                  <label
                    htmlFor={`${id}-phone`}
                    className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide"
                  >
                    Phone Number <span className="text-[#2563EB]">*</span>
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
              </div>

              {status === 'error' && (
                <p className="mt-4 text-red-400 text-sm" role="alert">
                  Something went wrong. Please try again or call us at{' '}
                  <a href={COMPANY.phoneTel} className="underline">
                    {COMPANY.phone}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1d4ed8] disabled:opacity-70 transition-colors min-h-[52px]"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Get My Free Estimate'
                )}
              </button>

              <p className="mt-3 text-center text-xs text-white/40">
                No pressure. No obligation. We respond within 2 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
