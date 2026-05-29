import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/content'

const BASE = 'https://glowandstrand.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const postUrls = posts.map((post) => ({
    url: `${BASE}/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticPages = [
    { url: BASE,                      priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/hairstyles`,       priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/hairstyles/short`, priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/hairstyles/medium`,priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/hairstyles/long`,  priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/nails`,            priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: `${BASE}/nails/gel`,        priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/nails/nail-art`,   priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/nails/simple`,     priority: 0.85, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/about`,            priority: 0.6,  changeFrequency: 'yearly'  as const },
    { url: `${BASE}/contact`,          priority: 0.5,  changeFrequency: 'yearly'  as const },
    { url: `${BASE}/privacy`,          priority: 0.3,  changeFrequency: 'yearly'  as const },
    { url: `${BASE}/disclosure`,       priority: 0.3,  changeFrequency: 'yearly'  as const },
  ].map((p) => ({ ...p, lastModified: new Date() }))

  return [...staticPages, ...postUrls]
}
