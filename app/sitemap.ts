import type { MetadataRoute } from 'next'
import { SITE_URL, SERVICES } from '@/lib/constants'

const STATES = ['tennessee', 'georgia']
const CITIES: Record<string, string[]> = {
  tennessee: [
    'chattanooga',
    'signal-mountain',
    'lookout-mountain',
    'red-bank',
    'hixson',
    'soddy-daisy',
    'ooltewah',
    'cleveland',
  ],
  georgia: ['dalton', 'ringgold', 'fort-oglethorpe', 'chickamauga', 'rossville', 'east-ridge'],
}

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
  const statePages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${SITE_URL}/service-areas/${state}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // City pages
  const cityPages: MetadataRoute.Sitemap = STATES.flatMap((state) =>
    (CITIES[state] || []).map((city) => ({
      url: `${SITE_URL}/service-areas/${state}/${city}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...servicePages, ...statePages, ...cityPages]
}
