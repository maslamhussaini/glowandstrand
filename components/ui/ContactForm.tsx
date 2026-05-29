'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Replace with your form handler (Formspree, Resend, etc.)
    // For now simulates a successful send
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">💌</div>
        <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Message sent!</h3>
        <p className="text-ink-500 text-sm">I'll get back to you within 2–3 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-1.5">
          Your name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border border-ink-200 rounded-xl text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-colors bg-white"
          placeholder="Sofia"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 border border-ink-200 rounded-xl text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-colors bg-white"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 border border-ink-200 rounded-xl text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100 transition-colors bg-white resize-none"
          placeholder="Ask me anything about hairstyles, nails, or the site..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 px-6 bg-blush-500 hover:bg-blush-600 disabled:opacity-60 text-white text-sm font-medium rounded-xl transition-colors"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-500 text-center">
          Something went wrong. Please email us directly at hello@glowandstrand.com
        </p>
      )}
    </form>
  )
}
