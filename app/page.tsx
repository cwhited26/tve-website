import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Contractor Chattanooga TN',
  description:
    'Tennessee Valley Exteriors — veteran-owned roofing, siding, gutters, and exterior contracting in Chattanooga, TN and North Georgia. Free estimates. Call 423-762-7728.',
  path: '/',
  keywords: ['roofing contractor Chattanooga TN', 'exterior contractor Chattanooga', 'roof replacement Chattanooga'],
})

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
      <div className="max-w-xl">
        <div className="w-16 h-16 bg-[#0A1628] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 3L2 10H4.5V17H15.5V10H18L10 3Z" fill="#2563EB" />
            <path d="M8 17V13H12V17H8Z" fill="white" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-[#0A1628] mb-4">{COMPANY.name}</h1>
        <p className="text-[#64748B] text-lg mb-2">
          Homepage coming in Prompt 3.
        </p>
        <p className="text-[#64748B] text-sm">
          Foundation scaffold complete — layout, brand system, SEO infrastructure, and component library are ready.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/quote/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
          >
            Get Free Estimate
          </a>
          <a
            href={COMPANY.phoneTel}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-colors min-h-[44px]"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
