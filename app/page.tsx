import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getFeaturedPosts } from '@/lib/content'
import AdSlot from '@/components/ads/AdSlot'

export const metadata: Metadata = {
  title: 'Glow & Strand — Hairstyles & Nail Ideas for Every Woman',
  description: 'Discover the best hairstyles, haircuts, and nail designs for every hair type and occasion. Real ideas from a real woman — updated weekly.',
  openGraph: {
    title: 'Glow & Strand — Hairstyles & Nail Ideas',
    description: 'Real hairstyle and nail ideas updated weekly.',
    images: [{ url: '/og-default.jpg' }],
  },
}

const CATEGORIES = [
  {
    title: 'Short Hair',
    href: '/hairstyles/short',
    description: 'Pixies, bobs, bixies and more',
    color: 'bg-blush-50 border-blush-200',
    emoji: '✂️',
  },
  {
    title: 'Medium Hair',
    href: '/hairstyles/medium',
    description: 'Lobs, layers and waves',
    color: 'bg-brand-50 border-brand-200',
    emoji: '🌊',
  },
  {
    title: 'Long Hair',
    href: '/hairstyles/long',
    description: 'Braids, updos and curtain bangs',
    color: 'bg-amber-50 border-amber-200',
    emoji: '💫',
  },
  {
    title: 'Nail Art',
    href: '/nails/nail-art',
    description: 'Patterns, florals and designs',
    color: 'bg-purple-50 border-purple-200',
    emoji: '💅',
  },
  {
    title: 'Gel Nails',
    href: '/nails/gel',
    description: 'Long-lasting gel colour ideas',
    color: 'bg-teal-50 border-teal-200',
    emoji: '✨',
  },
  {
    title: 'Simple Nails',
    href: '/nails/simple',
    description: 'Clean, minimal everyday looks',
    color: 'bg-rose-50 border-rose-200',
    emoji: '🌸',
  },
]

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 9)
  const featuredPosts = getFeaturedPosts(3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blush-50 via-brand-50 to-amber-50 border-b border-ink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blush-500 mb-4">
            Hair & Nails for Every Woman
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-ink-900 leading-tight mb-6">
            Your Next Look
            <br />
            <span className="text-blush-500">Starts Here</span>
          </h1>
          <p className="text-lg text-ink-500 max-w-xl mx-auto mb-8">
            Honest hairstyle and nail ideas — sorted by hair type, face shape, and occasion.
            No fluff, just looks that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/hairstyles"
              className="inline-flex items-center justify-center px-6 py-3 bg-blush-500 text-white text-sm font-medium rounded-full hover:bg-blush-600 transition-colors"
            >
              Browse Hairstyles
            </Link>
            <Link
              href="/nails"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-ink-800 text-sm font-medium rounded-full border border-ink-200 hover:border-blush-300 transition-colors"
            >
              Browse Nails
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ad slot (top of content — above the fold ad) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <AdSlot slotId="homepage-top" />
      </div>

      {/* ── Category shortcuts ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group p-5 rounded-2xl border ${cat.color} hover:shadow-md transition-all duration-200`}
            >
              <span className="text-2xl mb-2 block">{cat.emoji}</span>
              <p className="font-display font-bold text-ink-900 group-hover:text-blush-500 transition-colors">
                {cat.title}
              </p>
              <p className="text-xs text-ink-500 mt-1">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured posts ─────────────────────────────────── */}
      {featuredPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-ink-900">Featured This Week</h2>
            <Link href="/hairstyles" className="text-sm text-blush-500 hover:underline">
              See all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ── Mid-page ad ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        <AdSlot slotId="homepage-mid" />
      </div>

      {/* ── Recent posts ──────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">Latest Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/hairstyles"
              className="inline-flex items-center px-6 py-3 border border-ink-200 text-sm font-medium rounded-full text-ink-700 hover:border-blush-300 hover:text-blush-500 transition-colors"
            >
              Load more posts →
            </Link>
          </div>
        </section>
      )}

      {/* ── Author strip ──────────────────────────────────── */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-blush-400 flex-shrink-0 flex items-center justify-center text-2xl font-display font-bold text-white">
            SM
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-400 mb-1">Written by</p>
            <p className="font-display text-xl font-bold text-white mb-2">Sofia Malik</p>
            <p className="text-sm text-ink-300 max-w-xl">
              I've spent years testing hairstyles on my own fine, wavy hair — and obsessing over nail designs.
              Everything on this site is something I'd actually try myself.{' '}
              <Link href="/about" className="text-blush-300 hover:underline">
                Read my story →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function PostCard({ post }: { post: any }) {
  const href = `/${post.category}/${post.slug}`
  return (
    <Link href={href} className="group block">
      <article>
        <div className="overflow-hidden rounded-2xl bg-ink-100 aspect-[3/4] mb-3 img-zoom">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              width={400}
              height={533}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blush-100 to-brand-100 flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
          )}
        </div>
        <div>
          <p className="text-xs text-blush-500 font-medium uppercase tracking-wide mb-1">
            {post.subcategory ?? post.category}
          </p>
          <h3 className="font-display font-bold text-ink-900 group-hover:text-blush-500 transition-colors leading-snug mb-1">
            {post.title}
          </h3>
          <p className="text-xs text-ink-400">{post.readingTime}</p>
        </div>
      </article>
    </Link>
  )
}
