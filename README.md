# Glow & Strand

Pinterest-driven hairstyle and nail blog. Built with Next.js 14 App Router, Tailwind CSS, deployed on Vercel.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Framework: Next.js (auto-detected)
4. Deploy — done

## Before going live — replace these

| File | What to replace |
|------|----------------|
| `app/layout.tsx` | `ca-pub-XXXXXXXXXXXXXXXX` → your AdSense publisher ID |
| `components/ads/AdSlot.tsx` | `ca-pub-XXXXXXXXXXXXXXXX` and `data-ad-slot` → your ad unit IDs |
| `app/layout.tsx` | Google Search Console verification code |
| All pages | `glowandstrand.com` → your actual domain |
| `app/about/page.tsx` | Replace "Sofia Malik" with your author name/photo |

## Adding content

Create MDX files in `/content/hairstyles/` or `/content/nails/`.

Each file needs this frontmatter:

```yaml
---
title: "Your Post Title"
description: "150-160 character description"
date: "2025-01-15"
category: "hairstyles"
subcategory: "Short Hair"
coverImage: "https://your-image-url.jpg"
coverAlt: "Descriptive alt text"
author: "Sofia Malik"
tags: ["tag1", "tag2"]
featured: true
affiliateNote: "This post contains affiliate links..."
---
```

## Ad network requirements checklist

- [x] Author identity (About page with name + bio)
- [x] Privacy Policy page
- [x] Affiliate Disclosure page  
- [x] Contact page
- [x] Auto sitemap at /sitemap.xml
- [x] robots.txt allowing AdsBot-Google
- [x] JSON-LD structured data on all posts
- [x] SSR/SSG — all content visible to crawlers
- [x] Security headers via vercel.json
- [ ] 25+ published posts (write these)
- [ ] Google Search Console verified
- [ ] Replace placeholder AdSense IDs

## Folder structure

```
app/
├── page.tsx              Homepage
├── about/                Author bio
├── contact/              Contact form
├── privacy/              Privacy policy
├── disclosure/           Affiliate disclosure
├── hairstyles/[slug]/    Individual posts
├── nails/[slug]/         Individual posts
├── sitemap.ts            Auto sitemap
└── robots.ts             robots.txt

content/
├── hairstyles/           .mdx post files
└── nails/                .mdx post files

components/
├── layout/               Header, Footer, MobileMenu
├── ads/                  AdSlot component
└── ui/                   ContactForm, etc.
```
