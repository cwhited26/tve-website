import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Trailing slashes: proxy.ts middleware redirects /path → /path/
  // Setting true here ensures pages are generated at the slash-suffixed URLs
  trailingSlash: true,

  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'ewugdptjuhbljqnecjdm.supabase.co',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression for performance
  compress: true,

  // Powered-by header removal
  poweredByHeader: false,

  // 301 redirects from old WordPress URLs
  async redirects() {
    return [
      // www → non-www handled in middleware
      // ── Specific known WordPress post URLs (must come before catch-all) ──
      // Hardie Board vs LP SmartSide (existing WordPress post)
      {
        source: '/2025/05/22/:slug*',
        destination: '/blog/hardie-board-vs-lp-smartside-chattanooga/',
        permanent: true,
      },
      // Deck building guide (existing WordPress post)
      {
        source: '/2025/07/07/:slug*',
        destination: '/blog/deck-building-guide-composite-vs-wood-chattanooga/',
        permanent: true,
      },
      // ── WordPress date-based URL catch-all ──────────────────────────────
      // Matches /2025/anything/, /2024/05/post-slug/, etc.
      {
        source: '/:year(20[0-9][0-9])/:rest*',
        destination: '/blog/',
        permanent: true,
      },
      // ── WordPress category URLs ─────────────────────────────────────────
      {
        source: '/category/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      // ── WordPress page slugs ────────────────────────────────────────────
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/gallery/',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/reviews/',
        permanent: true,
      },
      {
        source: '/get-a-quote',
        destination: '/quote/',
        permanent: true,
      },
      {
        source: '/free-estimate',
        destination: '/quote/',
        permanent: true,
      },
      {
        source: '/roofing',
        destination: '/services/roof-replacement/',
        permanent: true,
      },
      {
        source: '/roofing-services',
        destination: '/services/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
