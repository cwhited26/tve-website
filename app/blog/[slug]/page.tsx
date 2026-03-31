import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowRight, ChevronRight } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { generatePageMetadata } from '@/lib/seo'
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { getBlogPostBySlug, getBlogSlugs, getRelatedPosts, BLOG_CATEGORIES } from '@/lib/blog'
import { COMPANY, SITE_URL } from '@/lib/constants'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}/`,
    image: post.image,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const categoryLabel = BLOG_CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category
  const related = getRelatedPosts(post, 3)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: post.title },
  ]

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}/`,
    datePublished: post.date,
    image: post.image,
  })
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  const dateObj = new Date(post.date)
  const dateLabel = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="bg-[#0A1628] pt-16 pb-10" aria-label="Post header">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={breadcrumbs}
            className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white"
          />
          <div className="mt-6 flex items-center gap-2">
            <Link
              href={`/blog/category/${post.category}/`}
              className="px-2.5 py-1 rounded-full bg-[#2563EB]/20 text-[#60A5FA] text-xs font-semibold hover:bg-[#2563EB]/30 transition-colors"
            >
              {categoryLabel}
            </Link>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-[#94A3B8] text-sm">
            <span className="flex items-center gap-1.5">
              <Tag size={14} aria-hidden />
              By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden />
              <time dateTime={post.date}>{dateLabel}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </header>

      {/* ── Hero Image ────────────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-96 bg-[#F8F9FA]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* ── Content + Sidebar ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Article */}
          <article
            className="lg:col-span-2 prose prose-slate prose-lg max-w-none
              prose-headings:text-[#0A1628] prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#475569] prose-p:leading-relaxed
              prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#0A1628]
              prose-ul:text-[#475569] prose-ol:text-[#475569]
              prose-blockquote:border-[#2563EB] prose-blockquote:text-[#475569]"
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="author" content={post.author} />
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  ],
                },
              }}
            />
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0 space-y-8" aria-label="Post sidebar">
            {/* Author Card */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-3">
                About the Author
              </p>
              <p className="font-semibold text-[#0A1628]">{post.author}</p>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Founder of Tennessee Valley Exteriors. Veteran-owned roofing and exterior
                contracting in Chattanooga, TN and North Georgia.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#0A1628] rounded-2xl p-5 text-center">
              <p className="font-bold text-white mb-2">Ready for Your Project?</p>
              <p className="text-[#94A3B8] text-sm mb-4">
                Get a free estimate from TVE.
              </p>
              <Link
                href="/quote/"
                className="block w-full py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Get Free Estimate
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="block w-full mt-2 py-3 rounded-xl border border-white/20 text-white/80 font-medium text-sm hover:bg-white/5 transition-colors min-h-[44px] flex items-center justify-center"
              >
                {COMPANY.phone}
              </a>
            </div>

            {/* Social Share */}
            <div>
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide mb-3">
                Share This Post
              </p>
              <div className="flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blog/${slug}/`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg border border-[#E2E8F0] text-[#475569] text-xs font-medium text-center hover:bg-[#F8F9FA] transition-colors min-h-[44px] flex items-center justify-center"
                  aria-label="Share on Facebook (opens in new tab)"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}/blog/${slug}/`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg border border-[#E2E8F0] text-[#475569] text-xs font-medium text-center hover:bg-[#F8F9FA] transition-colors min-h-[44px] flex items-center justify-center"
                  aria-label="Share on X/Twitter (opens in new tab)"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Posts ─────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 bg-[#F8F9FA] border-t border-[#E2E8F0]" aria-labelledby="related-posts-heading">
          <div className="max-w-4xl mx-auto px-6">
            <h2 id="related-posts-heading" className="text-2xl font-bold text-[#0A1628] mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <article key={relPost.slug} className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm group">
                  <div className="relative aspect-[16/9] bg-[#F8F9FA]">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0A1628] text-sm leading-snug mb-2 group-hover:text-[#2563EB] transition-colors">
                      <Link href={`/blog/${relPost.slug}/`} className="hover:underline">
                        {relPost.title}
                      </Link>
                    </h3>
                    <span className="text-xs text-[#94A3B8]">
                      {relPost.readTime} min read
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-[#2563EB] font-medium hover:underline"
              >
                View all posts <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
