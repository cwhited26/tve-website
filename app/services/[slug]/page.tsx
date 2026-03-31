import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
  CheckCircle,
  ChevronDown,
} from 'lucide-react'
import { generatePageMetadata, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'
import { SERVICE_DATA, getServiceBySlug, getRelatedServices } from '@/lib/services'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import type { BreadcrumbItem } from '@/lib/seo'

// Map icon name → Lucide component
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

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return SERVICE_DATA.map((service) => ({ slug: service.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
    keywords: [service.primaryKeyword, `${service.shortName} Chattanooga TN`, `${service.shortName} North Georgia`],
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = getRelatedServices(service)
  const Icon = ICON_MAP[service.icon] ?? Home

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: service.name },
  ]

  const schemas = [
    buildServiceSchema(service.name, service.metaDescription, `/services/${service.slug}/`),
    buildFAQSchema(service.faqs),
    buildBreadcrumbSchema(breadcrumbs),
  ]

  return (
    <>
      <JsonLd schema={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-16 px-6" aria-label="Service overview">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/20 flex items-center justify-center mb-5">
                <Icon size={28} className="text-[#2563EB]" aria-hidden />
              </div>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
                {service.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {service.h1}
              </h1>
              <p className="text-white/70 text-xl mb-8">{service.heroTagline}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
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

            {/* Benefits quick list */}
            <div className="lg:w-80 flex-shrink-0 bg-white/5 rounded-2xl p-6">
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                What&apos;s Included
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {service.benefits.slice(0, 5).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      className="text-[#2563EB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About this service ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none">
            {service.body.map((paragraph, i) => (
              <p key={i} className="text-[#334155] text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits full list ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#F8F9FA]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
            Why Chattanooga Homeowners Choose TVE for {service.shortName}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[#2563EB] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[#334155] text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Good / Better / Best tiers (roofing and siding only) ──────────────── */}
      {service.tiers && service.tiers.length > 0 && (
        <section className="py-14 px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Product Options</h2>
            <p className="text-[#64748B] mb-8">
              We offer three tiers to match different budgets and long-term goals. We&apos;ll help
              you choose the right one during your free estimate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={[
                    'rounded-2xl border p-6 flex flex-col',
                    i === 1
                      ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20 relative'
                      : 'border-[#E2E8F0]',
                  ].join(' ')}
                >
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-[#0A1628] text-base mb-2">{tier.name}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-1">
                    {tier.description}
                  </p>
                  <ul className="flex flex-col gap-1" role="list">
                    {tier.examples.map((ex) => (
                      <li key={ex} className="text-[#475569] text-xs flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0"
                          aria-hidden="true"
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote widget embed ──────────────────────────────────────────────── */}
      <QuoteWidgetEmbed
        service={service.slug}
        heading={`Get Your ${service.shortName} Estimate`}
        subheading="Tell us about your project — we'll give you a real number, not a range designed to get you on the phone."
      />

      {/* FAQ section ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="flex flex-col divide-y divide-[#E2E8F0]">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </section>

      {/* Related services ───────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 px-6 bg-[#F8F9FA]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => {
                const RelIcon = ICON_MAP[rel.icon] ?? Home
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}/`}
                    className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 hover:border-[#2563EB] hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-3 group-hover:bg-[#2563EB] transition-colors">
                      <RelIcon
                        size={20}
                        className="text-[#2563EB] group-hover:text-white transition-colors"
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-bold text-[#0A1628] text-sm mb-1">{rel.name}</h3>
                    <p className="text-[#64748B] text-xs leading-relaxed">{rel.heroTagline}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Service area links ─────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-[#0A1628] mb-2">
            {service.shortName} in Your Area
          </h2>
          <p className="text-[#64748B] text-sm mb-6">
            We provide {service.name.toLowerCase()} services across East Tennessee and North
            Georgia.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Chattanooga, TN', href: '/service-areas/tennessee/chattanooga/' },
              { name: 'Signal Mountain, TN', href: '/service-areas/tennessee/signal-mountain/' },
              { name: 'Hixson, TN', href: '/service-areas/tennessee/hixson/' },
              { name: 'Ooltewah, TN', href: '/service-areas/tennessee/ooltewah/' },
              { name: 'Cleveland, TN', href: '/service-areas/tennessee/cleveland/' },
              { name: 'Lookout Mountain, TN', href: '/service-areas/tennessee/lookout-mountain/' },
              { name: 'Red Bank, TN', href: '/service-areas/tennessee/red-bank/' },
              { name: 'Soddy Daisy, TN', href: '/service-areas/tennessee/soddy-daisy/' },
              { name: 'Dalton, GA', href: '/service-areas/georgia/dalton/' },
              { name: 'Ringgold, GA', href: '/service-areas/georgia/ringgold/' },
              { name: 'Fort Oglethorpe, GA', href: '/service-areas/georgia/fort-oglethorpe/' },
              { name: 'Chickamauga, GA', href: '/service-areas/georgia/chickamauga/' },
            ].map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="inline-block px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/service-areas/"
              className="inline-block px-3 py-1.5 rounded-lg bg-[#0A1628] text-white text-sm hover:bg-[#1e2d45] transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#2563EB] py-14 px-6">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-2xl">
              Ready for your free {service.shortName.toLowerCase()} estimate?
            </p>
            <p className="text-white/80 text-sm mt-1">
              We respond within one business hour.
            </p>
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

// ─── FAQ accordion item (server-side, no JS required) ─────────────────────────
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-5">
      <dt>
        <details className="group">
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
            <span className="font-semibold text-[#0A1628] leading-snug">{question}</span>
            <ChevronDown
              size={18}
              className="text-[#64748B] flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform"
              aria-hidden="true"
            />
          </summary>
          <dd className="mt-3 text-[#475569] text-sm leading-relaxed">{answer}</dd>
        </details>
      </dt>
    </div>
  )
}
