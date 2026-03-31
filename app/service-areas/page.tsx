import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { SERVICE_AREAS, STATES, getCitiesByState } from '@/lib/serviceAreas'
import { COMPANY } from '@/lib/constants'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Services — East Tennessee & North Georgia',
  description:
    'Tennessee Valley Exteriors serves 14 cities across East Tennessee and North Georgia. Find your city for local roofing, siding, gutters, and exterior services.',
  path: '/service-areas/',
  keywords: [
    'roofing contractor East Tennessee',
    'exterior contractor North Georgia',
    'TVE service area',
    'Chattanooga TN roofing',
  ],
})

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas' },
  ]

  const localBusinessSchema = buildLocalBusinessSchema({
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedIn: city.stateName,
    })),
  })
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="areas-hero-heading">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white" />
          <h1
            id="areas-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Roofing & Exterior Services Across
            <br className="hidden md:block" />
            East Tennessee & North Georgia
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
            Tennessee Valley Exteriors is based in Chattanooga and serves homeowners throughout
            the region — 14 cities across two states, with the same quality and communication
            on every job.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors min-h-[44px]"
            >
              <Phone size={16} aria-hidden />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Cities by State ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="cities-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="cities-heading" className="text-2xl font-bold text-[#0A1628] mb-10">
            Find Your City
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {STATES.map((state) => {
              const cities = getCitiesByState(state.slug)
              return (
                <div key={state.slug}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#0A1628]">{state.name}</h3>
                    <Link
                      href={`/service-areas/${state.slug}/`}
                      className="text-[#2563EB] text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      View all {state.name} cities <ArrowRight size={14} aria-hidden />
                    </Link>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/service-areas/${state.slug}/${city.slug}/`}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F0F7FF] transition-colors group min-h-[44px]"
                        >
                          <MapPin
                            size={14}
                            aria-hidden
                            className="text-[#2563EB] shrink-0"
                          />
                          <span className="text-[#0A1628] text-sm font-medium group-hover:text-[#2563EB] transition-colors">
                            {city.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── About the Service Area ────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-labelledby="area-description-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="area-description-heading" className="text-2xl font-bold text-[#0A1628] mb-6">
            Our Service Area
          </h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              Tennessee Valley Exteriors is a Chattanooga-based roofing and exterior contracting
              company serving homeowners across East Tennessee and North Georgia. Our service area
              extends from the mountain communities of Signal Mountain and Lookout Mountain in the
              west to Cleveland, TN in the east, and south into North Georgia cities like Dalton,
              Ringgold, Fort Oglethorpe, and Chickamauga.
            </p>
            <p>
              No matter which city you&apos;re in, you get the same TVE experience — honest
              pricing, clear communication from start to finish, and exterior work that stands
              behind our name. We never use subcontractors on roofing work, so the crew that
              shows up is the crew that cares about doing it right.
            </p>
            <p>
              If your city isn&apos;t listed, call us — we may still be able to help depending
              on the project. Our service radius extends beyond these 14 cities for larger jobs.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
            >
              Browse our services <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
            >
              Contact us <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote Widget ──────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed />
    </>
  )
}
