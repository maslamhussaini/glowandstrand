'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

type AdSlotProps = {
  slotId: string
  dataAdSlot?: string   // Replace with your real ad unit IDs from AdSense dashboard
  format?: 'auto' | 'rectangle' | 'leaderboard'
  className?: string
}

export default function AdSlot({
  slotId,
  dataAdSlot = '0000000000', // Replace with real slot ID per unit
  format = 'auto',
  className = '',
}: AdSlotProps) {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  return (
    <div className={`ad-container my-4 text-center ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={dataAdSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* Fallback shown during development or before AdSense approval */}
      <noscript>
        <div className="ad-slot">Advertisement</div>
      </noscript>
    </div>
  )
}
