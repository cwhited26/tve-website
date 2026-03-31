import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Wrench,
  Droplets,
  Layers,
  Square,
  Paintbrush,
  CloudLightning,
  Search,
  MapPin,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildAggregateRatingSchema,
} from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { HeroLeadForm } from '@/components/home/HeroLeadForm'
import { QuoteWidgetEmbed } from '@/components/QuoteWidgetEmbed'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Contractor Chattanooga TN',
  description:
    'Tennessee Valley Exteriors — veteran-owned roofing, siding, gutters, and exterior contracting in Chattanooga, TN and North Georgia. Free estimates. Call 423-762-7728.',
  path: '/',
  keywords: [
    'roofing contractor Chattanooga TN',
    'exterior contractor Chattanooga',
    'roof replacement Chattanooga',
    'roofing company near me',
  ],
})

// ─── Data ────────────────────────────────────────────────────────────────────

const TRUST_STATS = [
  { value: '200+', label: 'Projects Completed', icon: Home },
  { value: '4.9★', label: 'Google Rating', icon: Star },
  { value: '2+', label: 'Years in Business', icon: Shield },
  { value: '100%', label: 'Satisfaction Guarantee', icon: CheckCircle },
]

const SERVICES = [
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    desc: 'Full roof replacement with premium Owens Corning and IKO shingles. Lifetime warranty on materials.',
    icon: Home,
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    desc: 'Emergency and routine repairs to stop leaks fast and extend the life of your existing roof.',
    icon: Wrench,
  },
  {
    slug: 'gutters',
    name: 'Gutters & Downspouts',
    desc: 'Seamless aluminum gutters, gutter guards, and downspout systems that protect your foundation.',
    icon: Droplets,
  },
  {
    slug: 'siding',
    name: 'Siding',
    desc: 'Hardie Board, LP SmartSide, CraneBoard vinyl — durable siding that looks great for decades.',
    icon: Layers,
  },
  {
    slug: 'decks',
    name: 'Composite Decks',
    desc: 'Beautiful, low-maintenance composite deck construction built to handle Tennessee seasons.',
    icon: Square,
  },
  {
    slug: 'painting',
    name: 'Exterior Painting',
    desc: 'Professional exterior painting with proper surface prep, priming, and premium paint systems.',
    icon: Paintbrush,
  },
  {
    slug: 'storm-damage',
    name: 'Storm Damage',
    desc: 'Insurance claim assistance and emergency storm damage repair — we work with all major carriers.',
    icon: CloudLightning,
  },
  {
    slug: 'inspections',
    name: 'Free Roof Inspection',
    desc: 'Thorough 25-point roof inspection with a detailed written report. No cost, no pressure.',
    icon: Search,
  },
]

const TESTIMONIALS = [
  {
    name: 'Mike T.',
    city: 'Signal Mountain, TN',
    rating: 5,
    text: "Chase and his crew replaced our entire roof in one day and left the yard cleaner than they found it. Couldn't believe the turnaround. Highly recommend TVE to anyone in the area.",
  },
  {
    name: 'Sarah K.',
    city: 'Chattanooga, TN',
    rating: 5,
    text: 'After the hailstorm last spring, TVE helped us navigate the entire insurance claim process. They handled everything — we just had to approve the work. Roof looks brand new.',
  },
  {
    name: 'David R.',
    city: 'Hixson, TN',
    rating: 5,
    text: 'Got three quotes — TVE was the most transparent about what we actually needed. No upselling, no surprises. The Hardie Board siding they installed looks incredible.',
  },
]

const RECENT_PROJECTS = [
  {
    title: 'Roof Replacement',
    location: 'Signal Mountain, TN',
    material: 'Owens Corning Duration Shingles',
    color: 'bg-slate-700',
  },
  {
    title: 'Hardie Board Siding',
    location: 'Lookout Mountain, TN',
    material: 'James Hardie HardiePlank',
    color: 'bg-stone-600',
  },
  {
    title: 'Storm Damage Repair',
    location: 'Hixson, TN',
    material: 'IKO Dynasty Shingles',
    color: 'bg-neutral-700',
  },
]

const BLOG_POSTS = [
  {
    slug: 'roof-replacement-cost-chattanooga',
    title: 'How Much Does a Roof Replacement Cost in Chattanooga in 2026?',
    excerpt:
      'A full breakdown of what drives roofing costs in the Chattanooga market — materials, labor, and what to watch out for.',
    date: 'March 15, 2026',
    category: 'Roofing',
  },
  {
    slug: 'signs-you-need-roof-repair',
    title: '5 Signs You Need a Roof Repair (And When to Replace Instead)',
    excerpt:
      'Not every roof problem means a full replacement. Here\'s how to tell the difference and what to do about each one.',
    date: 'March 8, 2026',
    category: 'Roofing',
  },
  {
    slug: 'hardie-board-vs-lp-smartside-chattanooga-homes',
    title: 'Hardie Board vs. LP SmartSide: Best Siding for Chattanooga Homes',
    excerpt:
      'Both are fiber cement siding options built to last — but they perform differently in East Tennessee\'s climate.',
    date: 'February 28, 2026',
    category: 'Siding',
  },
]

const SERVICE_AREA_CITIES = [
  { name: 'Chattanooga', state: 'TN', href: '/service-areas/tennessee/chattanooga/' },
  { name: 'Signal Mountain', state: 'TN', href: '/service-areas/tennessee/signal-mountain/' },
  { name: 'Lookout Mountain', state: 'TN', href: '/service-areas/tennessee/lookout-mountain/' },
  { name: 'Red Bank', state: 'TN', href: '/service-areas/tennessee/red-bank/' },
  { name: 'Hixson', state: 'TN', href: '/service-areas/tennessee/hixson/' },
  { name: 'Soddy Daisy', state: 'TN', href: '/service-areas/tennessee/soddy-daisy/' },
  { name: 'Ooltewah', state: 'TN', href: '/service-areas/tennessee/ooltewah/' },
  { name: 'Cleveland', state: 'TN', href: '/service-areas/tennessee/cleveland/' },
  { name: 'Dalton', state: 'GA', href: '/service-areas/georgia/dalton/' },
  { name: 'Ringgold', state: 'GA', href: '/service-areas/georgia/ringgold/' },
  { name: 'Fort Oglethorpe', state: 'GA', href: '/service-areas/georgia/fort-oglethorpe/' },
  { name: 'Chickamauga', state: 'GA', href: '/service-areas/georgia/chickamauga/' },
  { name: 'Rossville', state: 'GA', href: '/service-areas/georgia/rossville/' },
  { name: 'East Ridge', state: 'GA', href: '/service-areas/georgia/east-ridge/' },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const schemas = [
  buildLocalBusinessSchema({
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '47',
    },
  }),
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildAggregateRatingSchema(4.9, 47),
]

// ─── Components ───────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? '#F59E0B' : 'none'}
          stroke={i < count ? '#F59E0B' : '#D1D5DB'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd schema={schemas} />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0f2040] to-[#0A1628]" />

        {/* Subtle grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Actual hero image (swap in real photo — path: /images/hero-roof.jpg) */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-roof.jpg"
            alt="Completed roof replacement in Chattanooga, Tennessee"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div>
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.9 Rating on Google</span>
              <span className="text-white/50 text-sm">·</span>
              <span className="text-white/80 text-sm">Veteran-Owned</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5">
              Chattanooga&apos;s Trusted{' '}
              <span className="text-[#2563EB]">Roofing &amp; Exterior</span> Contractor
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Quality craftsmanship, transparent pricing, and real communication — from a local,
              veteran-led team that actually shows up. Serving East TN and North GA since 2024.
            </p>

            {/* Trust bullets */}
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Free 25-point roof inspection — no obligation',
                'Licensed & insured — we handle insurance claims',
                'Same-week scheduling on most projects',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle size={16} className="text-[#2563EB] flex-shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#get-estimate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[48px] text-base"
              >
                Schedule Free Inspection
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors min-h-[48px] text-base"
              >
                <Phone size={18} aria-hidden="true" />
                Call Now: {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Right: Lead capture form */}
          <div id="get-estimate" className="scroll-mt-24">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-[#0A1628] font-bold text-2xl mb-1">Get Your Free Estimate</h2>
                <p className="text-[#64748B] text-sm">
                  We&apos;ll call you back within 2 hours to schedule.
                </p>
              </div>
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Trust Bar ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0]" aria-label="Trust indicators">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-8">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E2E8F0]">
            {TRUST_STATS.map(({ value, label, icon: Icon }) => (
              <li key={label} className="flex flex-col items-center text-center lg:px-8 gap-2">
                <Icon size={28} className="text-[#2563EB]" aria-hidden="true" />
                <span className="text-[#0A1628] font-bold text-2xl">{value}</span>
                <span className="text-[#64748B] text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 3: Services Overview ─────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FA]" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 id="services-heading" className="text-[#0A1628] font-bold text-3xl md:text-4xl mb-4">
              Roofing &amp; Exterior Services
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              From a simple repair to a complete exterior transformation — we handle every project
              with the same attention to detail.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {SERVICES.map(({ slug, name, desc, icon: Icon }) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}/`}
                  className="group flex flex-col h-full bg-white rounded-xl border border-[#E2E8F0] p-6 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-200"
                  aria-label={`${name} — learn more`}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <Icon
                      size={22}
                      className="text-[#2563EB] group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-[#0A1628] font-semibold text-base mb-2">{name}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed flex-1">{desc}</p>
                  <span className="mt-4 flex items-center gap-1 text-[#2563EB] text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-colors min-h-[44px]"
            >
              View All Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Quote Widget ───────────────────────────────────────── */}
      <QuoteWidgetEmbed
        heading="Get Your Instant Estimate"
        subheading="Answer a few quick questions about your project and get a realistic price range in minutes — no phone call required."
      />

      {/* ── Section 5: About Preview ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FA]" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0A1628] min-h-[360px] lg:min-h-[440px]">
              <Image
                src="/images/chase-team.jpg"
                alt="Chase Whited, founder of Tennessee Valley Exteriors, on a roofing project in Chattanooga"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Veteran badge overlay */}
              <div className="absolute bottom-6 left-6 bg-[#2563EB] rounded-xl px-4 py-3 flex items-center gap-3">
                <Shield size={24} className="text-white flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-bold text-sm leading-none">Veteran-Owned</p>
                  <p className="text-white/80 text-xs mt-0.5">US Military Service</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 id="about-heading" className="text-[#0A1628] font-bold text-3xl md:text-4xl mb-6">
                Built on the Standard We Wish Existed
              </h2>
              <div className="flex flex-col gap-4 text-[#64748B] leading-relaxed">
                <p>
                  Tennessee Valley Exteriors was founded in 2024 by Chase Whited after watching too
                  many Chattanooga homeowners get burned by contractors who over-promised, under-delivered,
                  and went silent the moment a check was cashed.
                </p>
                <p>
                  We set out to do it differently: straight answers, fair pricing, and craftsmanship
                  you can see. Every project — whether it&apos;s a 30-year shingle replacement or a
                  gutter repair — gets the same attention to detail.
                </p>
                <p>
                  As a veteran-led company, we bring discipline and accountability to every job site.
                  When we say we&apos;ll be there at 8am, we&apos;re there at 8am.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A1628] text-white font-semibold hover:bg-[#1e3a5f] transition-colors min-h-[44px]"
                >
                  Read Our Story <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E2E8F0] text-[#334155] font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]"
                >
                  <Phone size={16} aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Recent Projects ───────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Work
              </p>
              <h2 id="projects-heading" className="text-[#0A1628] font-bold text-3xl md:text-4xl">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/gallery/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all text-sm flex-shrink-0"
            >
              View All Projects <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {RECENT_PROJECTS.map(({ title, location, material, color }) => (
              <li key={title + location}>
                <div className="group rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-md transition-shadow">
                  {/* Placeholder image area — swap with next/image when photos available */}
                  <div
                    className={`relative h-52 ${color} flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={`/images/projects/${title.toLowerCase().replace(/\s/g, '-')}.jpg`}
                      alt={`${title} project in ${location}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#0A1628]/40 flex items-center justify-center">
                      <Home size={36} className="text-white/60" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#0A1628] font-semibold mb-1">{title}</h3>
                    <div className="flex items-center gap-1.5 text-[#64748B] text-sm mb-1">
                      <MapPin size={14} aria-hidden="true" />
                      {location}
                    </div>
                    <p className="text-[#94A3B8] text-xs">{material}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 7: Testimonials ──────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1628]" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
              Customer Reviews
            </p>
            <h2 id="testimonials-heading" className="text-white font-bold text-3xl md:text-4xl mb-4">
              What Our Customers Say
            </h2>
            {/* Aggregate rating display */}
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9</span>
              <span className="text-white/60 text-sm">47 Google Reviews</span>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" role="list">
            {TESTIMONIALS.map(({ name, city, rating, text }) => (
              <li key={name} className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col">
                <StarRating count={rating} />
                <blockquote className="text-white/85 text-sm leading-relaxed mt-4 flex-1 italic">
                  &ldquo;{text}&rdquo;
                </blockquote>
                <footer className="mt-5 pt-5 border-t border-white/10">
                  <cite className="not-italic">
                    <span className="text-white font-semibold text-sm block">{name}</span>
                    <span className="text-white/50 text-xs">{city}</span>
                  </cite>
                </footer>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Read All Reviews <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 8: Service Areas ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F9FA]" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
              Where We Work
            </p>
            <h2 id="areas-heading" className="text-[#0A1628] font-bold text-3xl md:text-4xl mb-4">
              Serving East Tennessee &amp; North Georgia
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Based in Chattanooga, we serve a 50-mile radius across the Tennessee Valley — from the
              mountains of Signal Mountain to the fields of Dalton, GA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* City list */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_AREA_CITIES.map(({ name, state, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 p-3 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] transition-all text-sm"
                  >
                    <MapPin
                      size={14}
                      className="text-[#2563EB] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#334155] font-medium group-hover:text-[#2563EB] transition-colors">
                      {name},{' '}
                      <span className="text-[#64748B] font-normal group-hover:text-[#2563EB]">
                        {state}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/service-areas/"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all text-sm"
                >
                  View Full Service Area Map <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Map / coverage card */}
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-3">Not Sure if We Cover You?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                We serve most of the greater Chattanooga area — Hamilton County, Bradley County, and
                Walker County, GA. If you&apos;re within about 50 miles of downtown Chattanooga,
                there&apos;s a good chance we&apos;re already working in your neighborhood.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors min-h-[44px] justify-center"
                >
                  <Phone size={16} aria-hidden="true" />
                  Call to Confirm: {COMPANY.phone}
                </a>
                <Link
                  href="/contact/"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                >
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Blog Preview ──────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3">
                From the Blog
              </p>
              <h2 id="blog-heading" className="text-[#0A1628] font-bold text-3xl md:text-4xl">
                Roofing Tips &amp; Guides
              </h2>
            </div>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all text-sm flex-shrink-0"
            >
              Read the Blog <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {BLOG_POSTS.map(({ slug, title, excerpt, date, category }) => (
              <li key={slug}>
                <article className="h-full flex flex-col rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#F8F9FA] relative">
                    <Image
                      src={`/images/blog/${slug}.jpg`}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#0A1628]/30" />
                    <span className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <time dateTime={date} className="text-[#94A3B8] text-xs mb-3 block">
                      {date}
                    </time>
                    <h3 className="text-[#0A1628] font-semibold text-base leading-snug mb-3">
                      <Link
                        href={`/blog/${slug}/`}
                        className="hover:text-[#2563EB] transition-colors"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed flex-1">{excerpt}</p>
                    <Link
                      href={`/blog/${slug}/`}
                      className="mt-4 flex items-center gap-1 text-[#2563EB] text-sm font-medium hover:gap-2 transition-all"
                      aria-label={`Read more: ${title}`}
                    >
                      Read More <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 10: Final CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-[#2563EB]" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
          <h2 id="cta-heading" className="text-white font-bold text-3xl md:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Call us today or schedule your free inspection online. Most projects are on the calendar
            within the week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#2563EB] font-bold text-base hover:bg-[#F8F9FA] transition-colors min-h-[52px]"
            >
              Schedule Free Inspection
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-colors min-h-[52px]"
            >
              <Phone size={18} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            {COMPANY.hours.weekdays} &nbsp;·&nbsp; {COMPANY.hours.saturday}
          </p>
        </div>
      </section>
    </>
  )
}
