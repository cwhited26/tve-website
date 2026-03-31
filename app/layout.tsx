import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { COMPANY, SITE_URL } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Roofing & Exterior Contractor Chattanooga, TN`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: COMPANY.website }],
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    siteName: COMPANY.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  )
}
