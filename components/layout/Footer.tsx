import Link from 'next/link'

const FOOTER_LINKS = {
  Hairstyles: [
    { label: 'Short Hair',  href: '/hairstyles/short' },
    { label: 'Medium Hair', href: '/hairstyles/medium' },
    { label: 'Long Hair',   href: '/hairstyles/long' },
    { label: 'All Styles',  href: '/hairstyles' },
  ],
  Nails: [
    { label: 'Gel Nails',    href: '/nails/gel' },
    { label: 'Nail Art',     href: '/nails/nail-art' },
    { label: 'Simple Nails', href: '/nails/simple' },
    { label: 'All Nails',    href: '/nails' },
  ],
  'About & Legal': [
    { label: 'About Sofia',          href: '/about' },
    { label: 'Contact',              href: '/contact' },
    { label: 'Privacy Policy',       href: '/privacy' },
    { label: 'Affiliate Disclosure', href: '/disclosure' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Brand + tagline */}
        <div className="mb-10">
          <p className="font-display text-2xl font-bold text-white mb-2">
            Glow<span className="text-blush-300">&</span>Strand
          </p>
          <p className="text-sm text-ink-400 max-w-xs">
            Real hairstyle and nail ideas for real women. Updated weekly by Sofia Malik.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 hover:text-blush-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} Glow & Strand. All rights reserved.</p>
          <p>
            This site contains affiliate links.{' '}
            <Link href="/disclosure" className="underline hover:text-blush-300">
              See disclosure.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
