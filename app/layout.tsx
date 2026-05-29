import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://glowandstrand.com'),
  title: {
    default: 'Glow & Strand — Hairstyles & Nail Ideas for Every Woman',
    template: '%s | Glow & Strand',
  },
  description: 'Discover the best hairstyles, haircuts, and nail designs. Real ideas for real women — updated weekly.',
  keywords: ['hairstyles', 'nail designs', 'haircuts for women', 'nail art', 'beauty tips'],
  authors: [{ name: 'Sofia Malik', url: 'https://glowandstrand.com/about' }],
  creator: 'Sofia Malik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glowandstrand.com',
    siteName: 'Glow & Strand',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Glow & Strand' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@glowandstrand',
    creator: '@glowandstrand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'YOUR_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* AdSense verification tag — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </head>
      <body className="bg-brand-50 font-body text-ink-900 antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* AdSense script — loads after page is interactive, SSR-safe */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
