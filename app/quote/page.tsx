import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildLocalBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Get Your Free Roofing Estimate',
  description:
    'Get an instant roofing estimate from Tennessee Valley Exteriors. Answer a few questions about your project and get a price range in minutes — no pressure, no obligation.',
  path: '/quote/',
  keywords: ['free roofing estimate Chattanooga', 'instant roof quote', 'roofing estimate Tennessee'],
})

const TRUST_POINTS = [
  'No obligation, no pressure — ever',
  'Response within 1 business hour',
  'Veteran-owned, locally operated',
  'Serving Chattanooga & North Georgia',
]

export default function QuotePage() {
  return (
    <>
      <JsonLd schema={buildLocalBusinessSchema()} />

      {/* Page header */}
      <div className="bg-[#0A1628] py-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
            Free Estimate
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Instant Roofing Estimate
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Tell us about your project and we&apos;ll give you a real price range — no phone tag, no
            waiting.
          </p>
        </div>
      </div>

      {/* Widget — full width */}
      <QuoteWidgetEmbed
        heading="What Are We Working On?"
        subheading="Answer a few quick questions. Takes about 2 minutes."
      />

      {/* Trust signals below the widget */}
      <div className="bg-white py-12 px-6">
        <div className="mx-auto max-w-3xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-[#2563EB] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[#334155] text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-[#64748B] text-sm">Prefer to talk it through?</p>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A1628] text-white font-semibold text-sm hover:bg-[#1e2d45] transition-colors min-h-[44px]"
            >
              <Phone size={16} aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#64748B]">
            <Link href="/services/" className="hover:text-[#2563EB] transition-colors">
              Browse Services
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/service-areas/" className="hover:text-[#2563EB] transition-colors">
              Service Areas
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact/" className="hover:text-[#2563EB] transition-colors">
              Contact Us
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/about/" className="hover:text-[#2563EB] transition-colors">
              About TVE
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
