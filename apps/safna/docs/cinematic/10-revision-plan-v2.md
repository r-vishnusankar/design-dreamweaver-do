# Revision Plan v2 — Cinematic Invitation Rebuild

**Status:** Planning (do not code until approved)  
**Reference:** User storyboard (16-panel cinematic grid)  
**Priority #1:** Fix scroll — it must feel fluid, not stuck

---

## Part A — Why Scroll Feels "Stuck, Stuck, Stuck"

### Root causes in current build

| Issue | Impact | Fix |
|-------|--------|-----|
| **Lenis `duration: 1.4`** | Scroll lags behind wheel input; feels like fighting the page | Reduce to `1.0` or `1.05`; tune `wheelMultiplier` |
| **Lenis not wired to `<html>`** | CSS expects `.lenis` class on html; never applied | Proper Lenis provider: attach classes, sync RAF with Framer |
| **No Lenis + anchor link integration** | Scene nav `#` links cause native jumps | `lenis.scrollTo('#id')` on all nav |
| **Blur animations on scroll** (`filter: blur(10px)`) | GPU-heavy; causes frame drops during scroll | Remove blur from scroll scenes; opacity + translate only |
| **9× `min-h-screen` sections** | Each full viewport = long scroll distance with no rhythm | Use `100dvh` snap sections OR varied heights (80vh / 100vh mix) |
| **Framer `useInView` on every block** | Many observers firing during scroll = jank | Batch animations; reduce simultaneous motion |
| **Directed scenes use `position: fixed`** | Body scroll state messy after handoff to Lenis | Clean `overflow: hidden` during Act I; explicit unlock |
| **`introCompleted` in localStorage** | Returning users skip opening; may hit broken scroll state | Separate `hasSeenIntro` from scroll init |
| **Missing `lenis/dist/lenis.css`** | Smooth scroll styles not loaded | Import Lenis CSS in layout |

### Target scroll feel

> Like Apple product pages or Locomotive-style sites: **one wheel tick = immediate response**, momentum carries smoothly, no rubber-band stutter.

### Technical approach (revised)

```
Option A — Lenis (fixed config)     ← Recommended first
  duration: 1.05
  lerp: 0.1
  smoothWheel: true
  syncTouch: true (mobile)
  + framer-motion scroll via Lenis scroll event

Option B — Native CSS scroll-snap  ← Fallback if Lenis still janky on mobile
  scroll-snap-type: y mandatory
  each scene = scroll-snap-align: start
  No artificial smoothing = never "stuck"

Option C — GSAP ScrollTrigger      ← Only if scene-scrub needed later
  Defer unless we need scroll-scrubbed envelope unfold
```

**Recommendation:** Implement **Option A** with mobile fallback test; if Android still stutters, use **Option B** for scroll sections only.

---

## Part B — Storyboard Alignment (Your 16 Panels)

Mapping your reference image to revised scenes:

| Panel | Your Storyboard | Current Build | Rebuild Plan |
|-------|-----------------|---------------|--------------|
| 1 | Envelope on wood, jasmine, **J&S wax seal** | CSS envelope, S seal | **Photoreal envelope asset** or high-fidelity composite |
| 2 | Hands breaking wax seal | CSS animation | Lottie or sequenced images (hand + crack frames) |
| 3 | Envelope opens, names visible | Slide-out CSS | Image sequence or video loop (2s) |
| 4 | Tri-fold invitation, Arabic calligraphy | CSS unfold | **Real invitation design** as 3-panel image |
| 5 | Names in jasmine flowers | Flower particles | Full-bleed storyboard art + subtle particle overlay |
| 6 | **Bride portrait** — gold bridal, traditional | Stock Unsplash | **YOUR photo** — hero of the site |
| 7 | Quranic verse gold calligraphy | Text only | Calligraphy image or SVG + transliteration |
| 8 | **Our Story timeline** with years | Emotional milestones | Per your choice (dated vs emotional) |
| 9 | Kerala house, lantern path, night | Text timeline | **Cinematic wide image** + parallax |
| 10 | Reception card with icons | Info cards grid | Single luxury card matching storyboard layout |
| 11 | Countdown, crescent moon, night sky | SVG rings | Storyboard night sky art + overlay countdown |
| 12 | Venue exterior dusk | Unsplash interior | **Everest Convention Centre** real photo |
| 13 | Photo album open | Page-turn component | Physical album spread images |
| 14 | Guest Blessings leather book | Web form | Book visual + form overlaid on page |
| 15 | Keepsake box open | CSS box | Wood box interior image |
| 16 | Keepsake box closed, engraved lid | CSS box | Wood box closed image — closing animation |

### Visual gap

Current build = **CSS placeholders**. Your storyboard = **cinematic photography + luxury stationery**. Rebuild is primarily an **asset-driven visual upgrade**, not more JavaScript.

---

## Part C — Revised Experience Architecture

### Act I — Tap/Click Through (NOT scroll)
Scenes 1–7: Envelope ritual → unfold → bride → verse  
**No Lenis during Act I.** Fixed viewport. User taps to advance.

### Act II — Smooth Scroll Story
Scenes 8–14: Journey → families → reception → countdown → venue → gallery → blessings  
**Lenis active.** One scene per viewport. Scroll-triggered reveals (lightweight).

### Act III — Directed Close
Scenes 15–16: Keepsake box animation → final blessing  
Can be scroll-triggered or auto-play when 80% visible.

---

## Part D — Scroll Scene Design (Fix the Stuck Feeling)

### Section rhythm
```css
/* Each scroll scene */
.scene {
  min-height: 100dvh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Parent when using snap fallback */
main {
  scroll-snap-type: y proximity; /* not mandatory — less aggressive */
}
```

### Animation rules during scroll
- ✅ `opacity`, `transform: translateY(24px)` — GPU friendly
- ❌ `filter: blur()` during scroll — remove
- ❌ More than 2 animated elements per viewport
- ✅ `will-change: transform` only while animating, then remove

### Lenis config (target)
```typescript
new Lenis({
  duration: 1.05,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
})
```

---

## Part E — Assets I Need From You

### Critical (site won't match storyboard without these)
1. **Safna bridal portrait** — Scene 6 hero (high-res, traditional attire preferred)
2. **Invitation card design** — tri-fold flat art or photo of real card (Scene 4)
3. **Everest Convention Centre** — exterior photo (Scene 12)

### High value
4. **Envelope + wax seal** — photo or AI render matching storyboard
5. **Keepsake wooden box** — open + closed (Scenes 15–16)
6. **Couple gallery** — 5–12 photos for album (Scene 13)
7. **Kerala house / lantern path** — for Scene 9 (or approve stock alternative)

### Optional
8. Individual storyboard panels exported as PNG/WebP (I can slice the grid you sent)
9. Ambient piano MP3
10. Google Maps URL

### How to send
- Drop files in project folder: `public/assets/scenes/`
- Or share Google Drive / Cloudinary links
- Naming: `scene-06-bride.webp`, `scene-04-invitation.webp`, etc.

---

## Part F — Content Confirmations

| Item | Current site | Storyboard | Confirm |
|------|--------------|------------|---------|
| Wedding date | 16 August 2026 | 08 August 2025 | **Which is correct?** |
| Reception time | 11:00 AM – 3:00 PM | 7:00 PM | **Which is correct?** |
| Venue city | Thrissur | Thiruvananthapuram in one panel | **Thrissur is correct?** |
| Wax seal | S | J&S | **Your choice above** |
| Journey | No dates | 2018–2025 timeline | **Your choice above** |

---

## Part G — Rebuild Phases (After Approval)

### Phase 1 — Scroll fix only (1–2 days)
- Rewrite `SmoothScroll` provider
- Remove blur from scroll animations
- Fix Lenis + html classes + anchor navigation
- Test on Chrome, Safari, mobile
- **Deliverable:** Same content, butter-smooth scroll

### Phase 2 — Visual upgrade with your assets (2–3 days)
- Replace placeholders with real images per storyboard
- Envelope / box scenes use photographic layers
- Bride portrait, venue, album

### Phase 3 — Motion polish (1–2 days)
- Page-turn gallery with real photos
- Keepsake close sequence
- Parallax on Scene 9 (lantern path)
- Night sky countdown (Scene 11)

### Phase 4 — QA & deploy
- Lighthouse 90+
- Test WhatsApp → mobile open flow
- Deploy Vercel

---

## Part H — What We Stop Doing

- ❌ Adding more scenes before scroll works
- ❌ Heavy blur/filter animations on scroll
- ❌ CSS-only envelope pretending to be cinematic
- ❌ Lenis duration > 1.1
- ❌ Building without your real photos

---

## Approval Checklist

- [ ] Scroll fix approach approved (Lenis tuned + no blur)
- [ ] Storyboard scene mapping approved
- [ ] Date/time/content confirmed
- [ ] Wax seal choice confirmed
- [ ] Journey style confirmed (dated vs emotional)
- [ ] Assets provided or timeline agreed

**Once you confirm → Phase 1 (scroll fix) starts first, then visuals.**
