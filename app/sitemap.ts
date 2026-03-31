import type { MetadataRoute } from 'next'
import { SITE_URL, SERVICES } from '@/lib/constants'
import { getBlogSlugs, BLOG_CATEGORIES } from '@/lib/blog'
import { MATRIX_CONTENT } from '@/lib/matrixContent'
import { SERVICE_AREAS, STATES as SERVICE_AREA_STATES } from '@/lib/serviceAreas'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/gallery/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/quote/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/reviews/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${SITE_URL}/service-areas/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // State hub pages
  const statePages: MetadataRoute.Sitemap = SERVICE_AREA_STATES.map((state) => ({
    url: `${SITE_URL}/service-areas/${state.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // City pages
  const cityPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((city) => ({
    url: `${SITE_URL}/service-areas/${city.state}/${city.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service × city matrix pages
  const matrixPages: MetadataRoute.Sitemap = MATRIX_CONTENT.map((entry) => ({
    url: `${SITE_URL}/services/${entry.serviceSlug}/${entry.citySlug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Blog category pages
  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.value}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Blog post pages
  const blogSlugs = getBlogSlugs()
  const blogPostPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...statePages,
    ...cityPages,
    ...matrixPages,
    ...blogCategoryPages,
    ...blogPostPages,
  ]
}
