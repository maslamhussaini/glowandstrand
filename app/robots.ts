import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow Google's ad crawler — required for AdSense approval
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: '/',
      },
    ],
    sitemap: 'https://glowandstrand.com/sitemap.xml',
    host: 'https://glowandstrand.com',
  }
}
