import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight, ChevronDown, CheckCircle, Shield, Star, Award, Home, Wrench, Droplets, Layers, Square, Paintbrush, CloudLightning, Search } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
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
      <section className="relative bg-[#0A1628] pt-6 pb-16 overflow-hidden" aria-labelledby="city-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/50 [&_a:hover]:text-white [&_span]:text-white/80 mb-6" />

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#93c5fd] rounded-full px-4 py-2 mb-6 text-sm font-semibold">
            <MapPin size={14} aria-hidden="true" />
            {cityData.name}, {cityData.stateName}
          </div>

          <h1
            id="city-hero-heading"
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
          >
            Roofing &amp; Exterior Services
            <br />
            in {cityData.name}, {cityData.stateShort}
          </h1>
          {content && (
            <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">{content.heroSubhead}</p>
          )}

          {/* Trust strip */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Shield, text: 'Veteran-Owned' },
              { icon: Star, text: '4.9★ Rated' },
              { icon: Award, text: '5-Yr Warranty' },
            ].map(({ icon: BadgeIcon, text }) => (
              <div key={text} className="flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5 text-white/80 text-xs font-semibold">
                <BadgeIcon size={12} className="text-[#2563EB]" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2563EB]/30 min-h-[52px]"
            >
              Get Your Free Estimate <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Available ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-labelledby="city-services-heading">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 id="city-services-heading" className="text-2xl md:text-3xl font-black text-[#0A1628] mb-3">
              Services Available in {cityData.name}
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto">
              Tennessee Valley Exteriors offers the full range of exterior services in {cityData.name}.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
                Home, Wrench, Droplets, Layers, Square, Paintbrush, CloudLightning, Search,
              }
              const ServiceIcon = iconMap[service.icon] ?? Home
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#2563EB] hover:shadow-md transition-all duration-200 card-lift"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                    <ServiceIcon size={18} className="text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-[#0A1628] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {service.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Body Content + Why Choose TVE ────────────────────────────────── */}
      {content && (
        <section className="py-16 bg-white" aria-labelledby="city-content-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Body text */}
              <div>
                <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">Local Expertise</p>
                <h2 id="city-content-heading" className="text-2xl md:text-3xl font-black text-[#0A1628] mb-7 leading-tight">
                  Roofing &amp; Exterior Services<br />in {cityData.name}
                </h2>
                <div className="space-y-5 text-[#475569] leading-relaxed">
                  {content.bodyParagraphs.map((para, i) => (
                    <p key={i} className="text-base">{para}</p>
                  ))}
                </div>
              </div>

              {/* Why choose TVE */}
              <div>
                <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#E2E8F0]">
                  <h3 className="text-xl font-black text-[#0A1628] mb-6">
                    Why {cityData.name} Homeowners Choose TVE
                  </h3>
                  <ul className="space-y-4">
                    {content.localReasons.map((reason, i) => (
                      <FadeIn key={i} delay={i * 60}>
                        <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle size={15} className="text-[#2563EB]" aria-hidden="true" />
                          </div>
                          <span className="text-[#334155] text-sm leading-relaxed">{reason}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>

                  {/* Local stat highlights */}
                  <div className="grid grid-cols-2 gap-3 mt-7 pt-6 border-t border-[#E2E8F0]">
                    {[
                      { value: 'Free', label: 'Inspection' },
                      { value: '4.9★', label: 'Google Rating' },
                      { value: '5-Yr', label: 'Warranty' },
                      { value: 'Same-Wk', label: 'Scheduling' },
                    ].map(({ value, label }) => (
                      <div key={label} className="bg-white rounded-xl p-3 text-center border border-[#E2E8F0]">
                        <p className="text-[#0A1628] font-black text-base">{value}</p>
                        <p className="text-[#64748B] text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Quote Widget ────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed city={cityData.name} />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="py-16 bg-[#F8F9FA]" aria-labelledby="city-faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="text-center mb-10">
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">Common Questions</p>
              <h2 id="city-faq-heading" className="text-2xl md:text-3xl font-black text-[#0A1628]">
                Roofing &amp; Exterior FAQs — {cityData.name}
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-3">
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
          <div className="max-w-5xl mx-auto px-6">
            <h2 id="nearby-cities-heading" className="text-base font-black text-[#0A1628] mb-5">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.state}/${nearby.slug}/`}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-[#475569] text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all min-h-[44px]"
                >
                  <MapPin size={12} aria-hidden />
                  {nearby.name}, {nearby.stateShort}
                </Link>
              ))}
              <Link
                href="/service-areas/"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0A1628] text-white text-sm font-bold hover:bg-[#1e3a5f] transition-colors min-h-[44px]"
              >
                All service areas <ArrowRight size={12} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-20 bg-[#2563EB] overflow-hidden" aria-labelledby="city-cta-heading">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 id="city-cta-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready for Your {cityData.name} Project?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get a free estimate from Tennessee Valley Exteriors — veteran-owned, locally trusted,
            serving {cityData.name} and all of {cityData.stateName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2563EB] font-black text-base hover:bg-[#EFF6FF] transition-colors min-h-[52px] shadow-lg"
            >
              Get Your Free Estimate <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 hover:border-white/70 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden />
              {COMPANY.phone}
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            Or{' '}
            <Link href="/contact/" className="underline hover:text-white transition-colors">
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
    <details className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#2563EB]/30 transition-colors">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none min-h-[60px] hover:bg-[#EFF6FF]/50 transition-colors">
        <span className="font-bold text-[#0A1628] text-sm leading-snug">{q}</span>
        <ChevronDown
          size={18}
          aria-hidden
          className="text-[#2563EB] shrink-0 group-open:rotate-180 transition-transform duration-200"
        />
      </summary>
      <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#E2E8F0]">
        <p className="pt-4">{a}</p>
      </div>
    </details>
  )
}
