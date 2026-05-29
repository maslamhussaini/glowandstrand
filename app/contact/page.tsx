import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Glow & Strand',
  description: 'Get in touch with Sofia Malik at Glow & Strand. Questions, collaborations, or just to say hi.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-blush-500 mb-2">Say hello</p>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-4">Get in Touch</h1>
        <p className="text-ink-500">
          Have a question, a hairstyle request, or want to work together?
          I read every message and reply within 2–3 business days.
        </p>
      </div>

      <div className="bg-white border border-ink-100 rounded-2xl p-6 sm:p-8 shadow-sm">
        <ContactForm />
      </div>

      <div className="mt-8 text-center text-sm text-ink-400">
        Or email directly:{' '}
        <a href="mailto:hello@glowandstrand.com" className="text-blush-500 hover:underline">
          hello@glowandstrand.com
        </a>
      </div>
    </div>
  )
}
