import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildAggregateRatingSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { REVIEWS, REVIEW_STATS } from '@/lib/reviews'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews — Tennessee Valley Exteriors',
  description:
    'Read verified customer reviews for Tennessee Valley Exteriors. See why homeowners in Chattanooga, TN and North Georgia trust TVE for roofing, siding, gutters, and more.',
  path: '/reviews/',
  keywords: [
    'Tennessee Valley Exteriors reviews',
    'roofing contractor reviews Chattanooga',
    'TVE customer testimonials',
  ],
})

export default function ReviewsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Reviews' },
  ]

  const aggregateRatingSchema = buildAggregateRatingSchema(
    REVIEW_STATS.average,
    REVIEW_STATS.count
  )
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd schema={aggregateRatingSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] pt-16 pb-12" aria-labelledby="reviews-hero-heading">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white" />
          <h1
            id="reviews-hero-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            What Our Customers Say
          </h1>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl">
            Honest feedback from real homeowners across Chattanooga, TN and North Georgia. We let
            our work — and our customers — speak for themselves.
          </p>

          {/* Aggregate stats */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/10 rounded-2xl px-6 py-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">{REVIEW_STATS.average}</p>
              <p className="text-white/60 text-xs mt-1">out of 5</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <StarRow rating={5} size="md" />
              <p className="text-white/70 text-sm mt-1">
                Based on {REVIEW_STATS.count} reviews ·{' '}
                <a
                  href={COMPANY.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline inline-flex items-center gap-1"
                  aria-label="View our Google reviews (opens in new tab)"
                >
                  See on Google <ExternalLink size={12} aria-hidden />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-label="Customer reviews">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={typeof review === 'object' ? review : review} />
            ))}
          </div>

          {/* Link to Google */}
          <div className="mt-12 text-center">
            <p className="text-[#64748B] text-sm mb-4">
              These reviews represent a sample of our feedback. Read all reviews on Google.
            </p>
            <a
              href={COMPANY.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0A1628] font-semibold hover:bg-[#F8F9FA] transition-colors min-h-[44px] shadow-sm"
              aria-label="Read all our Google reviews (opens in new tab)"
            >
              Read All Google Reviews <ExternalLink size={16} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#2563EB]" aria-labelledby="reviews-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="reviews-cta-heading" className="text-3xl font-bold text-white mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get the same quality and communication that our customers rave about. Free estimates,
            honest pricing, and work that stands behind our name.
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
            View our{' '}
            <Link href="/gallery/" className="underline hover:text-white">
              project gallery
            </Link>{' '}
            or{' '}
            <Link href="/services/" className="underline hover:text-white">
              explore our services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

// ─── Review Card ──────────────────────────────────────────────────────────────

import type { Review } from '@/lib/reviews'

function ReviewCard({ review }: { review: Review }) {
  const dateObj = new Date(review.date)
  const dateLabel = dateObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const dateIso = review.date

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p itemProp="author" className="font-semibold text-[#0A1628]">
            {review.name}
          </p>
          <p className="text-[#64748B] text-sm">
            {review.city}, {review.state}
            {review.service && ` · ${review.service}`}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <StarRow rating={review.rating} size="sm" />
          <time
            dateTime={dateIso}
            className="text-[#94A3B8] text-xs"
            itemProp="datePublished"
            content={dateIso}
          >
            {dateLabel}
          </time>
        </div>
      </div>
      <blockquote
        itemProp="reviewBody"
        className="text-[#475569] leading-relaxed text-sm border-l-2 border-[#2563EB] pl-4"
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
        className="hidden"
      >
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
      </div>
    </article>
  )
}

// ─── Star Row ─────────────────────────────────────────────────────────────────

function StarRow({ rating, size }: { rating: number; size: 'sm' | 'md' }) {
  const px = size === 'md' ? 20 : 14
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={px}
          aria-hidden
          className={n <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-[#E2E8F0] fill-[#E2E8F0]'}
        />
      ))}
    </div>
  )
}
