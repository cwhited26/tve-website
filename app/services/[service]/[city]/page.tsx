import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, ChevronDown, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import {
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import { getServiceBySlug, SERVICE_DATA } from '@/lib/services'
import { getCityBySlug, SERVICE_AREAS } from '@/lib/serviceAreas'
import { MATRIX_CONTENT, getMatrixContent } from '@/lib/matrixContent'
import { COMPANY } from '@/lib/constants'

// ─── Static params ────────────────────────────────────────────────────────────
// Build all combinations — generateStaticParams includes MATRIX_CONTENT priority
// combos first (always built); others are generated on demand via ISR.

export function generateStaticParams() {
  return MATRIX_CONTENT.map((m) => ({
    service: m.serviceSlug,
    city: m.citySlug,
  }))
}

type PageProps = { params: Promise<{ service: string; city: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, city } = await params
  const serviceData = getServiceBySlug(service)
  const cityData = getCityBySlug(city)
  if (!serviceData || !cityData) return {}

  return generatePageMetadata({
    title: `${serviceData.name} in ${cityData.name}, ${cityData.stateShort} | Tennessee Valley Exteriors`,
    description: `Expert ${serviceData.name.toLowerCase()} in ${cityData.name}, ${cityData.stateShort}. Tennessee Valley Exteriors — veteran-owned, free estimates. Call ${COMPANY.phone}.`,
    path: `/services/${service}/${city}/`,
    keywords: [
      `${serviceData.name.toLowerCase()} ${cityData.name} ${cityData.stateShort}`,
      `${serviceData.name.toLowerCase()} contractor ${cityData.name}`,
      `${cityData.name} ${serviceData.name.toLowerCase()}`,
    ],
  })
}

export default async function MatrixPage({ params }: PageProps) {
  const { service, city } = await params

  const serviceData = getServiceBySlug(service)
  const cityData = getCityBySlug(city)

  if (!serviceData || !cityData) notFound()

  const content = getMatrixContent(service, city)
  // If no pre-written content and not a valid service/city combo, 404
  // (For the 8 priority combos, content will always exist)
  if (!content) notFound()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: serviceData.name, href: `/services/${service}/` },
    { label: cityData.name },
  ]

  const localBusinessSchema = buildLocalBusinessSchema({
    areaServed: [{ '@type': 'City', name: cityData.name, containedIn: cityData.stateName }],
  })
  const serviceSchema = buildServiceSchema(
    serviceData.name,
    serviceData.metaDescription,
    `/services/${service}/${city}/`
  )
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)
  const faqSchema = buildFAQSchema(content.faqs.map((f) => ({ question: f.q, answer: f.a })))

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="matrix-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={breadcrumbs}
            className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white"
          />
          <h1
            id="matrix-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {serviceData.name} in {cityData.name}, {cityData.stateShort}
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">{content.heroSubhead}</p>
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

      {/* ── Body Content ────────────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="matrix-content-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="matrix-content-heading" className="text-2xl font-bold text-[#0A1628] mb-6">
            {serviceData.name} in {cityData.name}
          </h2>
          <div className="space-y-5 text-[#475569] leading-relaxed">
            {content.bodyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Widget ────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed service={service} city={cityData.name} />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#F8F9FA]" aria-labelledby="matrix-faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="matrix-faq-heading" className="text-2xl font-bold text-[#0A1628] mb-8">
            {serviceData.name} FAQs — {cityData.name}, {cityData.stateShort}
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none min-h-[56px] hover:bg-[#F8F9FA] transition-colors">
                  <span className="font-medium text-[#0A1628] text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden
                    className="text-[#2563EB] shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#F1F5F9]">
                  <p className="pt-3">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ──────────────────────────────────────────────── */}
      <section className="py-10 bg-white" aria-label="Related pages">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-medium text-[#64748B] uppercase tracking-wide mb-4">
            Related Pages
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/services/${service}/`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
            >
              <ArrowRight size={12} aria-hidden />
              {serviceData.name} (all cities)
            </Link>
            <Link
              href={`/service-areas/${cityData.state}/${city}/`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
            >
              <MapPin size={12} aria-hidden />
              All services in {cityData.name}
            </Link>
            <Link
              href="/services/"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
            >
              All services
            </Link>
            <Link
              href="/contact/"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#2563EB]" aria-labelledby="matrix-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="matrix-cta-heading" className="text-3xl font-bold text-white mb-4">
            Ready for Your {serviceData.name} in {cityData.name}?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free estimate from Tennessee Valley Exteriors. Veteran-owned, locally trusted,
            and serving {cityData.name}, {cityData.stateShort}.
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
        </div>
      </section>
    </>
  )
}
