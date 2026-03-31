import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { generatePageMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/seo'
import { COMPANY, SERVICES } from '@/lib/constants'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import type { BreadcrumbItem } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Services',
  description:
    'Tennessee Valley Exteriors offers roof replacement, roof repair, gutters, siding, decks, exterior painting, storm damage, and free roof inspections in Chattanooga TN and North Georgia.',
  path: '/services/',
  keywords: [
    'roofing services Chattanooga',
    'exterior contractor Chattanooga TN',
    'siding gutters roof replacement',
  ],
})

// Map slug to Lucide icon component
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
}

const BREADCRUMBS: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
]

export default function ServicesPage() {
  const schemas = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema(BREADCRUMBS),
  ]

  return (
    <>
      <JsonLd schema={schemas} />
      <Breadcrumbs items={BREADCRUMBS} />

      {/* Hero */}
      <section className="bg-[#0A1628] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Roofing &amp; Exterior Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            From a leaky roof to a full exterior renovation, Tennessee Valley Exteriors handles it.
            Veteran-owned, locally operated, and backed by warranties that actually mean something.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              Get Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors min-h-[44px]"
            >
              <Phone size={16} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Home
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group flex flex-col rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#2563EB] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <Icon
                      size={24}
                      className="text-[#2563EB] group-hover:text-white transition-colors"
                      aria-hidden
                    />
                  </div>
                  <h2 className="text-[#0A1628] font-bold text-lg mb-2">{service.name}</h2>
                  <p className="text-[#64748B] text-sm leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#2563EB] text-sm font-semibold">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="translate-x-0 group-hover:translate-x-1 transition-transform"
                      aria-hidden
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why TVE section */}
      <section className="py-16 px-6 bg-[#F8F9FA]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">
            Why Chattanooga Homeowners Choose TVE
          </h2>
          <p className="text-[#64748B] text-lg mb-12 max-w-2xl mx-auto">
            We started TVE because we watched too many homeowners get burned by contractors who
            over-promised and under-delivered. Here is our alternative.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Honest Assessments',
                body: 'We tell you what you actually need — not what generates the biggest invoice. Sometimes that means recommending a repair over a replacement.',
              },
              {
                title: 'Real Communication',
                body: 'You hear from us proactively — before something becomes a problem. We answer calls, return texts, and show up when we say we will.',
              },
              {
                title: 'Warranty-Backed Work',
                body: 'Our workmanship warranty covers what we install. Combined with manufacturer material warranties, you have real protection.',
              },
            ].map((item) => (
              <div key={item.title} className="text-left">
                <h3 className="font-bold text-[#0A1628] text-lg mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-[#2563EB] py-14 px-6">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-2xl">Ready to get started?</p>
            <p className="text-white/80 text-sm mt-1">Free estimate — no obligation, no pressure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#2563EB] font-semibold hover:bg-[#EFF6FF] transition-colors min-h-[44px]"
            >
              Get Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/50 text-white font-semibold hover:bg-white/10 transition-colors min-h-[44px]"
            >
              <Phone size={16} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
