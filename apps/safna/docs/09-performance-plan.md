# Performance Optimization Plan

## Images
- [x] Next.js `Image` component with `sizes` prop
- [x] Remote patterns for Cloudinary/Unsplash
- [ ] Upload to Cloudinary with `f_auto,q_auto,w_800`
- [ ] Replace Unsplash placeholders with optimized assets
- [ ] WebP/AVIF via Next.js automatic format

## Fonts
- [x] `next/font/google` with `display: swap`
- [x] Subset: latin only
- [x] CSS variables (no FOUT flash)

## JavaScript
- [x] Client components only where needed
- [ ] Dynamic import Lenis on desktop only (optional)
- [ ] Lazy load gallery images below fold

## CSS
- [x] Tailwind purge via content paths
- [x] Minimal custom CSS in globals

## Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

## Bundle
- Framer Motion: tree-shake unused exports
- Lenis: ~15KB — acceptable for smooth scroll UX

## Caching
- Static pages: ISR or SSG via App Router
- API blessings: no cache on POST; CDN cache GET

## Monitoring
- Vercel Analytics
- Lighthouse CI in GitHub Actions (Phase 7)
