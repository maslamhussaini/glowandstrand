import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPost, getPostSlugs, getAllPosts } from '@/lib/content'
import AdSlot from '@/components/ads/AdSlot'
import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
  params: { slug: string }
}

// Pre-build all post pages at build time — SSG for Vercel
export async function generateStaticParams() {
  const slugs = getPostSlugs('hairstyles')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost('hairstyles', params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default function HairstylePost({ params }: Props) {
  const post = getPost('hairstyles', params.slug)
  if (!post) notFound()

  const relatedPosts = getAllPosts('hairstyles')
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  // JSON-LD structured data — required for Google rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://glowandstrand.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Glow & Strand',
      url: 'https://glowandstrand.com',
    },
  }

  return (
    <>
      {/* JSON-LD for Google rich results — server rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-ink-400 mb-6 flex items-center gap-1" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blush-500">Home</Link>
          <span>›</span>
          <Link href="/hairstyles" className="hover:text-blush-500">Hairstyles</Link>
          <span>›</span>
          <span className="text-ink-600">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blush-500 mb-3">
            {post.subcategory ?? 'Hairstyles'}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-ink-500 mb-5">{post.description}</p>

          {/* Author + meta row */}
          <div className="flex items-center gap-3 py-4 border-y border-ink-100">
            <div className="w-10 h-10 rounded-full bg-blush-400 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
              SM
            </div>
            <div>
              <p className="text-sm font-medium text-ink-800">
                By{' '}
                <Link href="/about" className="text-blush-500 hover:underline">
                  Sofia Malik
                </Link>
              </p>
              <p className="text-xs text-ink-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
                {' · '}
                {post.readingTime}
              </p>
            </div>
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="overflow-hidden rounded-2xl mb-8 aspect-[3/2]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              width={800}
              height={533}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Affiliate disclosure */}
        {post.affiliateNote && (
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mb-8 text-sm text-ink-600">
            <strong className="text-ink-800">Affiliate note:</strong> {post.affiliateNote}
          </div>
        )}

        {/* Ad above content */}
        <AdSlot slotId="post-top" />

        {/* Post content — MDX rendered server-side */}
        <div className="prose prose-ink max-w-none mt-8 prose-headings:font-display prose-a:text-blush-500 prose-img:rounded-2xl">
          <MDXRemote source={post.content} />
        </div>

        {/* Ad mid-content */}
        <AdSlot slotId="post-mid" className="my-8" />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-ink-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-brand-50 border border-brand-100 text-ink-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author bio box — ad networks check for this */}
        <div className="mt-10 p-6 bg-blush-50 border border-blush-100 rounded-2xl flex gap-4">
          <div className="w-14 h-14 rounded-full bg-blush-400 flex items-center justify-center text-lg font-bold text-white flex-shrink-0">
            SM
          </div>
          <div>
            <p className="font-display font-bold text-ink-900 mb-1">Sofia Malik</p>
            <p className="text-sm text-ink-500 leading-relaxed">
              Sofia has spent years experimenting with hairstyles on fine, wavy hair.
              She writes from real experience — not just trends. When she's not writing,
              she's testing gel nail kits she probably doesn't need.{' '}
              <Link href="/about" className="text-blush-500 hover:underline">
                Read more about Sofia →
              </Link>
            </p>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-50 border-t border-ink-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">You Might Also Like</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/hairstyles/${p.slug}`} className="group block">
                  <div className="overflow-hidden rounded-xl bg-ink-100 aspect-[3/4] mb-3 img-zoom">
                    {p.coverImage ? (
                      <Image
                        src={p.coverImage}
                        alt={p.coverAlt}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blush-100 to-brand-100" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-ink-900 group-hover:text-blush-500 transition-colors text-sm leading-snug">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom ad */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <AdSlot slotId="post-bottom" />
      </div>
    </>
  )
}
