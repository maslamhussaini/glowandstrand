'use client'

import { useState } from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  href: string
  sub?: { label: string; href: string }[]
}

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-ink-700 hover:text-blush-500 transition-colors"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-ink-100 shadow-lg z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-2.5 text-sm font-medium text-ink-800 hover:text-blush-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <button
                      onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                      className="p-2 text-ink-400"
                      aria-label="Expand submenu"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points={expanded === item.href ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}/>
                      </svg>
                    </button>
                  )}
                </div>
                {item.sub && expanded === item.href && (
                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-blush-100 ml-2">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-ink-600 hover:text-blush-500 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
