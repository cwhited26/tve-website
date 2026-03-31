import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { STATES, getCitiesByState } from '@/lib/serviceAreas'
import { COMPANY } from '@/lib/constants'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import type { StateSlug } from '@/lib/serviceAreas'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }))
}

type PageProps = { params: Promise<{ state: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const stateData = STATES.find((s) => s.slug === state)
  if (!stateData) return {}

  return generatePageMetadata({
    title: `Roofing & Exterior Services in ${stateData.name}`,
    description: `Tennessee Valley Exteriors serves ${stateData.name} homeowners with expert roofing, siding, gutters, and exterior contracting. Find your city and get a free estimate.`,
    path: `/service-areas/${state}/`,
    keywords: [
      `roofing contractor ${stateData.name}`,
      `exterior contractor ${stateData.short}`,
      `TVE ${stateData.name} service area`,
    ],
  })
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params
  const stateData = STATES.find((s) => s.slug === state)
  if (!stateData) notFound()

  const cities = getCitiesByState(state as StateSlug)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas/' },
    { label: stateData.name },
  ]

  const localBusinessSchema = buildLocalBusinessSchema({
    areaServed: [
      { '@type': 'State', name: stateData.name },
      ...cities.map((c) => ({ '@type': 'City', name: c.name, containedIn: stateData.name })),
    ],
  })
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="state-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white" />
          <h1
            id="state-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Roofing & Exterior Services
            <br />
            in {stateData.name}
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
            Tennessee Valley Exteriors serves {cities.length} cities across {stateData.name}.
            Expert roofing, siding, gutters, and exterior contracting — same quality and
            communication in every community.
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

      {/* ── City Cards ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-labelledby="state-cities-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="state-cities-heading" className="text-2xl font-bold text-[#0A1628] mb-8">
            Cities We Serve in {stateData.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${state}/${city.slug}/`}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">
                  <MapPin size={18} aria-hidden className="text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628] group-hover:text-[#2563EB] transition-colors">
                    {city.name}, {city.stateShort}
                  </p>
                  <p className="text-sm text-[#64748B] mt-1 line-clamp-2">{city.intro}</p>
                  <span className="mt-2 text-xs font-medium text-[#2563EB] flex items-center gap-1">
                    View city page <ArrowRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── State Description ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-labelledby="state-description-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="state-description-heading" className="text-2xl font-bold text-[#0A1628] mb-6">
            Serving {stateData.name} Homeowners Since 2024
          </h2>
          <div className="space-y-4 text-[#475569] leading-relaxed">
            {state === 'tennessee' ? (
              <>
                <p>
                  Tennessee Valley Exteriors was founded in Chattanooga, TN and grew from the
                  ground up serving East Tennessee homeowners. Our Tennessee service area spans
                  from the urban neighborhoods of Chattanooga and Red Bank to the mountain
                  communities of Signal Mountain and Lookout Mountain, and east to Cleveland in
                  Bradley County.
                </p>
                <p>
                  East Tennessee&apos;s climate creates unique roofing challenges — heavy spring
                  hail, humid summers that accelerate algae growth, and ice events in elevated
                  communities. Our team knows the local conditions and recommends materials
                  that hold up to Tennessee weather year after year.
                </p>
              </>
            ) : (
              <>
                <p>
                  TVE&apos;s service area extends south of the Tennessee state line into North
                  Georgia, covering the communities of Dalton, Ringgold, Fort Oglethorpe,
                  Chickamauga, and Rossville. We bring the same Chattanooga-quality service
                  to Georgia homeowners.
                </p>
                <p>
                  North Georgia sees its own severe storm patterns — particularly the spring
                  hail events that track northeast from Alabama through the Conasauga and
                  Oostanaula River valleys. TVE handles insurance claims and storm damage
                  repair across all of our North Georgia service areas.
                </p>
              </>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/service-areas/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
            >
              All service areas <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
            >
              Browse services <ArrowRight size={14} aria-hidden />
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

      {/* ── Quote Widget ────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed />
    </>
  )
}
