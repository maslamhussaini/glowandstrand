import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Sofia Malik — Glow & Strand',
  description: 'Meet Sofia Malik, the writer behind Glow & Strand. Real hairstyle and nail ideas from someone who actually tests them.',
  openGraph: {
    title: 'About Sofia Malik — Glow & Strand',
    description: 'Real hairstyle and nail ideas from someone who actually tests them.',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-blush-400 mx-auto mb-5 flex items-center justify-center text-3xl font-display font-bold text-white">
          SM
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blush-500 mb-2">The person behind this site</p>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-4">Hi, I'm Sofia Malik</h1>
        <p className="text-lg text-ink-500">
          I write about hairstyles and nail designs because I've spent years figuring out what actually works — not just what looks good in a photo.
        </p>
      </div>

      {/* Story */}
      <div className="prose prose-ink max-w-none space-y-6">
        <h2 className="font-display text-2xl font-bold text-ink-900">Why I Started Glow & Strand</h2>
        <p className="text-ink-600 leading-relaxed">
          For most of my twenties, I had a love-hate relationship with my hair. It's fine, slightly wavy,
          and has a personality of its own. I spent years saving Pinterest boards full of hairstyles that
          looked amazing on other hair types and catastrophic on mine.
        </p>
        <p className="text-ink-600 leading-relaxed">
          I started Glow & Strand because I wanted a place where the content was actually honest.
          Not "30 hairstyles that work on everyone" — but specific guidance on what works for your
          hair type, face shape, and lifestyle. Everything I publish here is something I'd actually try,
          or have tried, myself.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink-900">What You'll Find Here</h2>
        <p className="text-ink-600 leading-relaxed">
          Two things: <strong>hairstyles</strong> and <strong>nail designs</strong>.
          I cover short, medium and long hair — sorted by face shape, hair type, and how much time you
          realistically have in the morning. On the nails side, I focus on gel, nail art, and simple
          everyday designs.
        </p>
        <p className="text-ink-600 leading-relaxed">
          Some posts include affiliate links to products I recommend — mostly hair tools, treatments, and
          nail kits available on Amazon. I only link things I've researched properly or used myself.
          You can read my full{' '}
          <Link href="/disclosure" className="text-blush-500 hover:underline">
            affiliate disclosure here
          </Link>.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink-900">Get in Touch</h2>
        <p className="text-ink-600 leading-relaxed">
          Have a hairstyle request? A question about a product? Just want to say hi?
          I read every message.{' '}
          <Link href="/contact" className="text-blush-500 hover:underline">
            Send me a note here →
          </Link>
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-4 mt-12 py-8 border-y border-ink-100">
        {[
          { num: '50+', label: 'Posts published' },
          { num: '2', label: 'Niches covered' },
          { num: '100%', label: 'Human written' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-blush-500">{s.num}</p>
            <p className="text-xs text-ink-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
