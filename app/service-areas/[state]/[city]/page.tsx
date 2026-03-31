import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import {
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import {
  SERVICE_AREAS,
  STATES,
  getCityBySlug,
  getNearbyCities,
} from '@/lib/serviceAreas'
import { CITY_CONTENT } from '@/lib/cityContent'
import { COMPANY, SERVICES } from '@/lib/constants'
import type { StateSlug } from '@/lib/serviceAreas'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SERVICE_AREAS.map((city) => ({
    state: city.state,
    city: city.slug,
  }))
}

type PageProps = { params: Promise<{ state: string; city: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) return {}

  const stateData = STATES.find((s) => s.slug === state)
  if (!stateData || cityData.state !== state) return {}

  return generatePageMetadata({
    title: `${cityData.name} Roofing & Exterior Services | Tennessee Valley Exteriors`,
    description: `Expert roofing, siding, gutters, and exterior services in ${cityData.name}, ${cityData.stateShort}. Tennessee Valley Exteriors — veteran-owned, local, free estimates. Call ${COMPANY.phone}.`,
    path: `/service-areas/${state}/${city}/`,
    keywords: [
      `roofing contractor ${cityData.name} ${cityData.stateShort}`,
      `roof replacement ${cityData.name}`,
      `exterior contractor ${cityData.name} TN`,
      `${cityData.name} roofing company`,
    ],
  })
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params

  const cityData = getCityBySlug(city)
  if (!cityData) notFound()

  // Validate state matches
  if (cityData.state !== (state as StateSlug)) notFound()

  const stateData = STATES.find((s) => s.slug === state)
  if (!stateData) notFound()

  const content = CITY_CONTENT[city]
  const nearbyCities = getNearbyCities(city)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas/' },
    { label: stateData.name, href: `/service-areas/${state}/` },
    { label: cityData.name },
  ]

  const localBusinessSchema = buildLocalBusinessSchema({
    areaServed: [
      { '@type': 'City', name: cityData.name, containedIn: cityData.stateName },
      ...cityData.neighborhoods.map((n) => ({ '@type': 'Place', name: n })),
    ],
  })
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)
  const faqSchema = content?.faqs
    ? buildFAQSchema(content.faqs.map((f) => ({ question: f.q, answer: f.a })))
    : null

  // Widget URL with city pre-filled

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="city-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white" />
          <h1
            id="city-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Roofing & Exterior Services
            <br />
            in {cityData.name}, {cityData.stateShort}
          </h1>
          {content && (
            <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">{content.heroSubhead}</p>
          )}
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

      {/* ── Services Available ───────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="city-services-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="city-services-heading" className="text-2xl font-bold text-[#0A1628] mb-2">
            Services Available in {cityData.name}
          </h2>
          <p className="text-[#64748B] mb-8">
            Tennessee Valley Exteriors offers the full range of exterior services in {cityData.name}.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F0F7FF] transition-colors group min-h-[44px]"
              >
                <span className="text-sm font-medium text-[#0A1628] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {service.name}
                </span>
                <span className="text-xs text-[#2563EB] flex items-center gap-0.5">
                  Learn more <ArrowRight size={10} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body Content ────────────────────────────────────────────────── */}
      {content && (
        <section className="py-14 bg-[#F8F9FA]" aria-labelledby="city-content-heading">
          <div className="max-w-3xl mx-auto px-6">
            <h2 id="city-content-heading" className="text-2xl font-bold text-[#0A1628] mb-6">
              Roofing & Exterior Services in {cityData.name}
            </h2>
            <div className="space-y-5 text-[#475569] leading-relaxed">
              {content.bodyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Local reasons */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-[#0A1628] mb-4">
                Why {cityData.name} Homeowners Choose TVE
              </h3>
              <ul className="space-y-2">
                {content.localReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[#475569] text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── Quote Widget ────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed city={cityData.name} />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="py-14 bg-[#F8F9FA]" aria-labelledby="city-faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <h2 id="city-faq-heading" className="text-2xl font-bold text-[#0A1628] mb-8">
              Roofing & Exterior FAQs — {cityData.name}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Nearby Cities ───────────────────────────────────────────────── */}
      {nearbyCities.length > 0 && (
        <section className="py-14 bg-white" aria-labelledby="nearby-cities-heading">
          <div className="max-w-4xl mx-auto px-6">
            <h2 id="nearby-cities-heading" className="text-lg font-bold text-[#0A1628] mb-4">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.state}/${nearby.slug}/`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
                >
                  <MapPin size={12} aria-hidden />
                  {nearby.name}, {nearby.stateShort}
                </Link>
              ))}
              <Link
                href="/service-areas/"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F0F7FF] border border-[#2563EB] text-[#2563EB] text-sm font-medium hover:bg-[#2563EB] hover:text-white transition-colors min-h-[44px]"
              >
                All service areas <ArrowRight size={12} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#2563EB]" aria-labelledby="city-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="city-cta-heading" className="text-3xl font-bold text-white mb-4">
            Ready for Your {cityData.name} Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free estimate from Tennessee Valley Exteriors — veteran-owned, locally trusted,
            serving {cityData.name} and all of {cityData.stateName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#2563EB] font-bold text-lg hover:bg-blue-50 transition-colors min-h-[44px]"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Call {COMPANY.phone}
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Or{' '}
            <Link href="/contact/" className="underline hover:text-white">
              send us a message
            </Link>{' '}
            — we respond within 1 business day.
          </p>
        </div>
      </section>
    </>
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none min-h-[56px] hover:bg-[#F8F9FA] transition-colors">
        <span className="font-medium text-[#0A1628] text-sm">{q}</span>
        <ChevronDown
          size={18}
          aria-hidden
          className="text-[#2563EB] shrink-0 group-open:rotate-180 transition-transform"
        />
      </summary>
      <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#F1F5F9]">
        <p className="pt-3">{a}</p>
      </div>
    </details>
  )
}
