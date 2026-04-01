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
  ArrowRight,
  Shield,
  Star,
  Award,
  Clock,
  MapPin,
} from 'lucide-react'
import { generatePageMetadata, buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'
import { SERVICE_DATA, getServiceBySlug, getRelatedServices } from '@/lib/services'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import { FadeIn } from '@/components/ui/FadeIn'
import type { BreadcrumbItem } from '@/lib/seo'

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

export async function generateStaticParams() {
  return SERVICE_DATA.map((service) => ({ slug: service.slug }))
}

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

const PROCESS_STEPS = [
  { step: '01', title: 'Free Inspection', desc: 'Thorough 25-point inspection with photos and written report.' },
  { step: '02', title: 'Written Estimate', desc: 'Itemized quote before any work starts. No surprises.' },
  { step: '03', title: 'Scheduled Work', desc: 'Most projects are on the calendar within 7 days.' },
  { step: '04', title: 'Clean Completion', desc: 'Full cleanup and final walkthrough when we\'re done.' },
]

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

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 px-6 overflow-hidden" aria-label="Service overview">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="flex-1">
              {/* Icon + service label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={28} className="text-[#2563EB]" aria-hidden />
                </div>
                <div>
                  <p className="text-[#2563EB] font-bold text-xs uppercase tracking-widest">
                    TVE Services
                  </p>
                  <p className="text-white/60 text-sm">{service.name}</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                {service.h1}
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-8">{service.heroTagline}</p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, text: 'Veteran-Owned' },
                  { icon: Star, text: '4.9★ Rated' },
                  { icon: Award, text: '5-Yr Warranty' },
                  { icon: Clock, text: 'Same-Week' },
                ].map(({ icon: BadgeIcon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5 text-white/80 text-xs font-semibold">
                    <BadgeIcon size={12} className="text-[#2563EB]" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2563EB]/30 min-h-[52px]"
                >
                  Get Free Estimate <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-colors min-h-[52px]"
                >
                  <Phone size={18} aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            {/* Benefits panel */}
            <div className="lg:w-80 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-white font-black text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <CheckCircle size={14} className="text-[#2563EB]" aria-hidden="true" />
                What&apos;s Included
              </p>
              <ul className="flex flex-col gap-3.5" role="list">
                {service.benefits.slice(0, 5).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-[#2563EB]" aria-hidden="true" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/10">
                <Link
                  href="/quote/"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0A1628] font-bold text-sm hover:bg-[#F8F9FA] transition-colors min-h-[44px]"
                >
                  Start Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body content ────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none text-[#334155] space-y-5">
            {service.body.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits grid ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#F8F9FA]" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-10">
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-black text-[#0A1628]">
              Why Chattanooga Homeowners Choose TVE for {service.shortName}
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={benefit} delay={i * 50}>
                <li className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-sm transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                  <span className="text-[#334155] text-sm leading-relaxed">{benefit}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process timeline ────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white" aria-labelledby="process-heading">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-10">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 id="process-heading" className="text-2xl md:text-3xl font-black text-[#0A1628]">
              Our {service.shortName} Process
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 80}>
                <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E2E8F0] text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2563EB] font-black text-sm">{step}</span>
                  </div>
                  <h3 className="text-[#0A1628] font-black text-sm mb-2">{title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product tiers ───────────────────────────────────────────────── */}
      {service.tiers && service.tiers.length > 0 && (
        <section className="py-14 px-6 bg-[#F8F9FA]" aria-labelledby="tiers-heading">
          <div className="mx-auto max-w-4xl">
            <FadeIn className="text-center mb-10">
              <h2 id="tiers-heading" className="text-2xl md:text-3xl font-black text-[#0A1628] mb-3">
                Product Options
              </h2>
              <p className="text-[#64748B] max-w-xl mx-auto">
                Three tiers to match different budgets and long-term goals. We&apos;ll help you
                choose the right one during your free estimate.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={[
                    'rounded-2xl border-2 p-7 flex flex-col relative bg-white',
                    i === 1
                      ? 'border-[#2563EB] shadow-xl shadow-[#2563EB]/10'
                      : 'border-[#E2E8F0]',
                  ].join(' ')}
                >
                  {i === 1 && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-black text-[#0A1628] text-lg mb-2">{tier.name}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-1">
                    {tier.description}
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {tier.examples.map((ex) => (
                      <li key={ex} className="text-[#475569] text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" aria-hidden="true" />
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

      {/* ── Quote widget ────────────────────────────────────────────────── */}
      <QuoteWidgetEmbed
        service={service.slug}
        heading={`Get Your ${service.shortName} Estimate`}
        subheading="Tell us about your project — we'll give you a real number, not a range designed to get you on the phone."
      />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="text-center mb-10">
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-3">Common Questions</p>
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-[#0A1628]">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 px-6 bg-[#F8F9FA]" aria-labelledby="related-heading">
          <div className="mx-auto max-w-4xl">
            <FadeIn className="mb-8">
              <h2 id="related-heading" className="text-xl font-black text-[#0A1628]">Related Services</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => {
                const RelIcon = ICON_MAP[rel.icon] ?? Home
                return (
                  <FadeIn key={rel.slug}>
                    <Link
                      href={`/services/${rel.slug}/`}
                      className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 hover:border-[#2563EB] hover:shadow-md transition-all card-lift"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-3 group-hover:bg-[#2563EB] transition-colors">
                        <RelIcon size={20} className="text-[#2563EB] group-hover:text-white transition-colors" aria-hidden />
                      </div>
                      <h3 className="font-black text-[#0A1628] text-sm mb-1 group-hover:text-[#2563EB] transition-colors">{rel.name}</h3>
                      <p className="text-[#64748B] text-xs leading-relaxed">{rel.heroTagline}</p>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Service area links ──────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-lg font-black text-[#0A1628] mb-2">
            {service.shortName} in Your Area
          </h2>
          <p className="text-[#64748B] text-sm mb-5">
            We provide {service.name.toLowerCase()} services across East Tennessee and North Georgia.
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E2E8F0] text-[#475569] text-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all"
              >
                <MapPin size={11} aria-hidden="true" />
                {city.name}
              </Link>
            ))}
            <Link
              href="/service-areas/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A1628] text-white text-sm font-semibold hover:bg-[#1e3a5f] transition-colors"
            >
              View All <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#2563EB] py-16 px-6 relative overflow-hidden" aria-label="Get estimate CTA">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white font-black text-2xl md:text-3xl">
              Ready for your free {service.shortName.toLowerCase()} estimate?
            </p>
            <p className="text-white/75 text-sm mt-1.5">We respond within one business hour.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#2563EB] font-black hover:bg-[#EFF6FF] transition-colors min-h-[52px] shadow-lg"
            >
              Get Free Estimate
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── FAQ accordion (native details/summary — no JS) ──────────────────────────
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#2563EB]/30 transition-colors">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none min-h-[60px] hover:bg-[#EFF6FF]/50 transition-colors">
        <span className="font-bold text-[#0A1628] text-sm leading-snug">{question}</span>
        <ChevronDown
          size={18}
          className="text-[#2563EB] flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
          aria-hidden="true"
        />
      </summary>
      <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#E2E8F0]">
        <p className="pt-4">{answer}</p>
      </div>
    </details>
  )
}
