'use client'

import Script from 'next/script'
import { QUOTE_WIDGET_URL } from '@/lib/constants'

interface QuoteWidgetEmbedProps {
  /** Pre-select a service type in the widget */
  service?: string
  /** Pre-fill the city/address for service area pages */
  city?: string
  heading?: string
  subheading?: string
}

/**
 * Embeds the TVE Quote Widget via Shadow DOM script.
 * Use on the homepage, service pages, and service area pages.
 */
export function QuoteWidgetEmbed({
  service,
  city,
  heading = 'Get Your Instant Estimate',
  subheading = 'Answer a few quick questions about your project and get a price range in minutes — no sales pressure, no obligation.',
}: QuoteWidgetEmbedProps) {
  // Build the widget src with optional query params
  const params = new URLSearchParams()
  if (service) params.set('service', service)
  if (city) params.set('city', city)
  const queryString = params.toString()
  const widgetSrc = `${QUOTE_WIDGET_URL}/embed.js${queryString ? `?${queryString}` : ''}`

  return (
    <section
      className="bg-[#0A1628] py-16 px-6"
      aria-label="Get your instant estimate"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-3">{heading}</h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div id="tve-quote-widget" className="min-h-[400px]" />
        </div>
      </div>
      <Script src={widgetSrc} strategy="lazyOnload" />
    </section>
  )
}
