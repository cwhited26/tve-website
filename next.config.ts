import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Trailing slashes handled by middleware for 301 redirects
  trailingSlash: false,

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
      // WordPress date-based URLs → blog
      {
        source: '/20:year(\\d{2})/:rest*',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/category/:slug*',
        destination: '/blog/',
        permanent: true,
      },
      // WordPress page slugs that may have changed
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
