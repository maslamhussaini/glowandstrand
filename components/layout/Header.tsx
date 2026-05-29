import Link from 'next/link'
import MobileMenu from './MobileMenu'

const NAV = [
  {
    label: 'Hairstyles',
    href: '/hairstyles',
    sub: [
      { label: 'Short Hair',   href: '/hairstyles/short' },
      { label: 'Medium Hair',  href: '/hairstyles/medium' },
      { label: 'Long Hair',    href: '/hairstyles/long' },
    ],
  },
  {
    label: 'Nails',
    href: '/nails',
    sub: [
      { label: 'Gel Nails',    href: '/nails/gel' },
      { label: 'Nail Art',     href: '/nails/nail-art' },
      { label: 'Simple Nails', href: '/nails/simple' },
    ],
  },
  { label: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-sm border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-ink-900 tracking-tight hover:text-blush-500 transition-colors"
          >
            Glow<span className="text-blush-500">&</span>Strand
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-blush-500 transition-colors rounded-md hover:bg-blush-50"
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-ink-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-ink-700 hover:text-blush-500 hover:bg-blush-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu */}
          <MobileMenu nav={NAV} />
        </div>
      </div>
    </header>
  )
}
