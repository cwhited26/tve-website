import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowRight, Rss } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { getAllBlogPosts, BLOG_CATEGORIES } from '@/lib/blog'
import { FadeIn } from '@/components/ui/FadeIn'
import { COMPANY } from '@/lib/constants'
import type { BlogPost } from '@/lib/blog'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing & Exterior Blog — Expert Tips for Homeowners',
  description:
    'Roofing, siding, gutters, and exterior tips from Tennessee Valley Exteriors. Helpful guides for Chattanooga, TN and North Georgia homeowners.',
  path: '/blog/',
  keywords: [
    'roofing tips Chattanooga',
    'roof replacement guide Tennessee',
    'exterior contractor blog',
    'homeowner roofing advice',
  ],
})

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ]

  return (
    <>
      <JsonLd schema={buildLocalBusinessSchema()} />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbs)} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] pt-6 pb-14 overflow-hidden" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={breadcrumbs}
            className="[&_a]:text-white/50 [&_a:hover]:text-white [&_span]:text-white/80 mb-6"
          />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
              <Rss size={18} className="text-[#2563EB]" aria-hidden="true" />
            </div>
            <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest">The TVE Blog</p>
          </div>
          <h1
            id="blog-hero-heading"
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            Roofing Tips &amp; Expert Guides
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Helpful guides, honest advice, and local expertise from the TVE team. Written by
            contractors who actually do this work.
          </p>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────────────────────── */}
      {featuredPost && (
        <section className="bg-[#F8F9FA] pt-0 pb-0" aria-label="Featured post">
          <div className="max-w-5xl mx-auto px-6">
            <div className="-mt-6">
              <FadeIn>
                <FeaturedCard post={featuredPost} />
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ── Category Filter ───────────────────────────────────────────────── */}
      <nav
        className="sticky top-[72px] z-20 bg-white border-b border-[#E2E8F0] shadow-sm"
        aria-label="Blog categories"
      >
        <div className="max-w-5xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <Link
              href="/blog/"
              className="shrink-0 px-5 py-2 rounded-full bg-[#0A1628] text-white text-sm font-bold min-h-[36px] flex items-center transition-all"
            >
              All Posts
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.value}
                href={`/blog/category/${cat.value}/`}
                className="shrink-0 px-5 py-2 rounded-full border border-[#E2E8F0] text-[#475569] text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all min-h-[36px] flex items-center"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Post Grid ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA]" aria-label="Blog posts">
        <div className="max-w-5xl mx-auto px-6">
          {remainingPosts.length === 0 && posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#64748B] text-lg">
                Blog posts are coming soon. Check back shortly!
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:underline"
              >
                Contact us with questions <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 60}>
                  <PostCard post={post} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A1628] relative overflow-hidden" aria-labelledby="blog-cta-heading">
        <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 id="blog-cta-heading" className="text-2xl md:text-3xl font-black text-white mb-3">
            Have a Specific Question?
          </h2>
          <p className="text-white/65 mb-8 text-lg">
            Call us or use the contact form — we answer real homeowner questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-[#1d4ed8] transition-colors min-h-[52px] shadow-lg shadow-[#2563EB]/20"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-colors min-h-[52px]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Card Components ──────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: BlogPost }) {
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category
  const dateObj = new Date(post.date)
  const dateLabel = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl group">
      <div className="grid md:grid-cols-5">
        {/* Image */}
        <div className="md:col-span-2 relative aspect-[16/9] md:aspect-auto min-h-[260px] bg-[#0A1628]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/40 to-transparent" />
          <span className="absolute top-5 left-5 bg-[#C0392B] text-white text-xs font-bold px-3 py-1.5 rounded-full">
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold">
              {categoryLabel}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4 leading-tight group-hover:text-[#2563EB] transition-colors">
            <Link href={`/blog/${post.slug}/`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <PostMeta post={post} dateLabel={dateLabel} />
            <Link
              href={`/blog/${post.slug}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-colors"
              aria-label={`Read: ${post.title}`}
            >
              Read Article <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

function PostCard({ post }: { post: BlogPost }) {
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category
  const dateLabel = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] group hover:shadow-xl hover:border-[#2563EB]/20 transition-all duration-300 card-lift h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-[#0A1628] overflow-hidden flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
        <span className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
          {categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <PostMeta post={post} dateLabel={dateLabel} />
        <h2 className="text-base font-black text-[#0A1628] mt-3 mb-3 leading-snug group-hover:text-[#2563EB] transition-colors">
          <Link href={`/blog/${post.slug}/`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-[#475569] text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}/`}
          className="mt-4 flex items-center gap-1.5 text-[#2563EB] text-sm font-bold group-hover:gap-2.5 transition-all"
          aria-label={`Read: ${post.title}`}
        >
          Read More <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </article>
  )
}

function PostMeta({ post, dateLabel }: { post: BlogPost; dateLabel: string }) {
  return (
    <div className="flex items-center flex-wrap gap-3 text-[#94A3B8] text-xs">
      <span className="flex items-center gap-1">
        <Calendar size={11} aria-hidden />
        <time dateTime={post.date}>{dateLabel}</time>
      </span>
      <span className="flex items-center gap-1">
        <Clock size={11} aria-hidden />
        {post.readTime} min read
      </span>
      <span className="flex items-center gap-1">
        <Tag size={11} aria-hidden />
        {post.author}
      </span>
    </div>
  )
}
