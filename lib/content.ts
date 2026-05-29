import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  subcategory?: string
  coverImage: string
  coverAlt: string
  author: string
  readingTime: string
  tags: string[]
  affiliateNote?: string
  featured?: boolean
}

export type Post = PostMeta & { content: string }

const CONTENT_DIR = path.join(process.cwd(), 'content')

export function getPostSlugs(category: string): string[] {
  const dir = path.join(CONTENT_DIR, category)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getPost(category: string, slug: string): Post | null {
  const filePath =
    path.join(CONTENT_DIR, category, `${slug}.mdx`) ||
    path.join(CONTENT_DIR, category, `${slug}.md`)

  const fullPath = fs.existsSync(path.join(CONTENT_DIR, category, `${slug}.mdx`))
    ? path.join(CONTENT_DIR, category, `${slug}.mdx`)
    : path.join(CONTENT_DIR, category, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title:        data.title       ?? '',
    description:  data.description ?? '',
    date:         data.date        ?? '',
    category:     data.category    ?? category,
    subcategory:  data.subcategory,
    coverImage:   data.coverImage  ?? '',
    coverAlt:     data.coverAlt    ?? data.title ?? '',
    author:       data.author      ?? 'Sofia Malik',
    readingTime:  rt.text,
    tags:         data.tags        ?? [],
    affiliateNote:data.affiliateNote,
    featured:     data.featured    ?? false,
    content,
  }
}

export function getAllPosts(category?: string): PostMeta[] {
  const categories = category ? [category] : ['hairstyles', 'nails']
  const posts: PostMeta[] = []

  for (const cat of categories) {
    const slugs = getPostSlugs(cat)
    for (const slug of slugs) {
      const post = getPost(cat, slug)
      if (post) {
        const { content: _, ...meta } = post
        posts.push(meta)
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts(limit = 6): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.featured)
    .slice(0, limit)
}
