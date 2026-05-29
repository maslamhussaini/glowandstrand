import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Glow & Strand',
  description: 'Privacy policy for Glow & Strand. How we collect, use, and protect your information.',
  robots: { index: true, follow: true },
}

const UPDATED = 'January 1, 2025'
const SITE = 'Glow & Strand'
const DOMAIN = 'glowandstrand.com'
const EMAIL = 'hello@glowandstrand.com'

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Privacy Policy</h1>
      <p className="text-sm text-ink-400 mb-10">Last updated: {UPDATED}</p>

      <div className="prose prose-ink max-w-none space-y-8 text-ink-600 leading-relaxed">

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">1. Introduction</h2>
          <p>
            Welcome to {SITE} (<strong>{DOMAIN}</strong>). This Privacy Policy explains how we collect,
            use, and protect information about visitors to our website. By using this site, you agree
            to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Usage data:</strong> Pages visited, time spent on site, browser type, device type, referring URLs. Collected automatically via Google Analytics.</li>
            <li><strong>Contact information:</strong> If you contact us via our contact form, we collect your name and email address.</li>
            <li><strong>Cookies:</strong> We use cookies for analytics and advertising purposes. See the Cookies section below.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To understand how visitors use our site and improve content</li>
            <li>To respond to contact form enquiries</li>
            <li>To serve relevant advertisements via Google AdSense</li>
            <li>To measure the performance of affiliate links</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">4. Cookies</h2>
          <p>
            This site uses cookies. Cookies are small text files stored on your device. We use:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Google Analytics cookies:</strong> To track site usage anonymously.</li>
            <li><strong>Google AdSense cookies:</strong> To show relevant advertisements. Google may use your data to personalise ads. You can opt out at <a href="https://www.google.com/settings/ads" className="text-blush-500 hover:underline" target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.</li>
            <li><strong>Amazon affiliate cookies:</strong> A 24-hour cookie is set when you click an Amazon affiliate link.</li>
          </ul>
          <p className="mt-3">
            You can disable cookies in your browser settings. Note that doing so may affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">5. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Google Analytics</strong> — <a href="https://policies.google.com/privacy" className="text-blush-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Google AdSense</strong> — <a href="https://policies.google.com/privacy" className="text-blush-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><strong>Amazon Associates</strong> — <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" className="text-blush-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Notice</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">6. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 12 months. Analytics data is retained per
            Google Analytics' default retention settings. We do not sell your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">7. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or delete your personal
            data. To exercise these rights or ask any questions, contact us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-blush-500 hover:underline">{EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page reflects
            the most recent update. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">9. Contact</h2>
          <p>
            Questions about this privacy policy? Email us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-blush-500 hover:underline">{EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
