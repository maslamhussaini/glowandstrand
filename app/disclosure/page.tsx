import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — Glow & Strand',
  description: 'Affiliate disclosure for Glow & Strand. We earn from qualifying Amazon purchases.',
}

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Affiliate Disclosure</h1>
      <p className="text-sm text-ink-400 mb-10">Last updated: January 1, 2025</p>

      <div className="prose prose-ink max-w-none text-ink-600 leading-relaxed space-y-6">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
          <p className="font-medium text-ink-800">
            Glow & Strand is a participant in the Amazon Services LLC Associates Program,
            an affiliate advertising program designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon.com.
          </p>
        </div>

        <p>
          This means that when you click on certain links on this site and make a purchase,
          we may earn a small commission — at no extra cost to you. The price you pay is
          exactly the same whether you use our link or go directly.
        </p>

        <h2 className="font-display text-xl font-bold text-ink-900">What this means for you</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We only recommend products we've researched thoroughly or used personally.</li>
          <li>Affiliate commissions help keep this site free and running.</li>
          <li>Our editorial opinions are never influenced by affiliate relationships.</li>
          <li>If a product isn't worth recommending, we don't recommend it — regardless of commission.</li>
        </ul>

        <h2 className="font-display text-xl font-bold text-ink-900">How to spot affiliate links</h2>
        <p>
          Affiliate links are usually labelled in the post, or marked with a note such as
          "This post contains affiliate links." We do our best to be transparent throughout.
        </p>

        <h2 className="font-display text-xl font-bold text-ink-900">FTC compliance</h2>
        <p>
          This disclosure is made in accordance with the Federal Trade Commission's 16 CFR,
          Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
        </p>

        <p>
          Questions? Email us at{' '}
          <a href="mailto:hello@glowandstrand.com" className="text-blush-500 hover:underline">
            hello@glowandstrand.com
          </a>.
        </p>
      </div>
    </div>
  )
}
