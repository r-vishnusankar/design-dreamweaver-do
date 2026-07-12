# 09 — Development Roadmap

Phased build plan. **Code begins only after creative approval.**

Each phase ends with a demo-able milestone and QA gate.

---

## Phase 0 — Creative Approval ← **YOU ARE HERE**

| Task | Status |
|------|--------|
| UX Strategy | ✅ Complete |
| Storyboard (18 scenes) | ✅ Complete |
| Scene-by-scene breakdown | ✅ Complete |
| Wireframes | ✅ Complete |
| Design System | ✅ Complete |
| Motion System | ✅ Complete |
| Folder Structure | ✅ Complete |
| Component Tree | ✅ Complete |
| Development Roadmap | ✅ Complete |

**Gate:** Stakeholder sign-off on Scenes 0–17 flow, visual direction, motion philosophy.

---

## Phase 1 — Foundation (Week 1)

### Goals
Project scaffold, design tokens, scene engine skeleton.

### Tasks
- [ ] Migrate/restructure existing codebase to new folder architecture
- [ ] Install stack: Framer Motion, Lenis, Zustand, RHF, Zod, shadcn/ui, next-themes
- [ ] Implement CSS token system (`globals.css`)
- [ ] Configure fonts: Cormorant, Playfair, Great Vibes, Inter, Noto Naskh Arabic
- [ ] Build `SceneEngine` + `sceneStore` (Zustand)
- [ ] Build motion primitives: `FadeReveal`, `LetterReveal`, `SceneTransition`
- [ ] Build `useReducedMotion`, `useAudio` hooks
- [ ] Scene registry + debug mode (`?scene=N`)

### Deliverable
Blank scene engine cycling through placeholder scenes 0–17.

### QA Gate
- [ ] Scene state machine advances correctly
- [ ] Skip intro works
- [ ] Reduced motion path functional
- [ ] Lighthouse baseline recorded

---

## Phase 2 — Directed Act: The Opening (Week 2)

### Goals
Scenes 0–8 fully choreographed.

### Tasks
- [ ] **Scene 0:** Bismillah fade sequence + grain overlay
- [ ] **Scene 1:** Wood table + envelope + wax seal + hover/breathe
- [ ] **Scene 2:** Seal break animation + audio sync
- [ ] **Scene 3:** Card slide out
- [ ] **Scene 4:** `PaperFold` three-stage unfold (Framer 3D; GSAP fallback if needed)
- [ ] **Scene 5:** Flower bloom + music opt-in prompt
- [ ] **Scene 6:** Bride portrait + letter reveal + event summary
- [ ] **Scene 7:** Blessing quote
- [ ] **Scene 8:** Directed → scroll handoff + Lenis init
- [ ] Source/create audio assets (6 files)
- [ ] Source/create texture assets (paper, wood, grain)

### Deliverable
Complete opening ritual from black screen to scroll — the "short film" experience.

### QA Gate
- [ ] 60fps on iPhone 13 + mid-range Android
- [ ] Full ritual completable in < 30s (rushed) to 60s (natural)
- [ ] Audio never autoplays without consent
- [ ] Skip intro lands correctly on Scene 8

---

## Phase 3 — Scroll Act: The Story (Week 3)

### Goals
Scenes 9–15 — content-rich scroll sections.

### Tasks
- [ ] **Scene 9:** Love timeline with stagger animations
- [ ] **Scene 10:** Family merge animation
- [ ] **Scene 11:** InfoCard grid (4 cards)
- [ ] **Scene 12:** Countdown rings + live timer
- [ ] **Scene 13:** Venue photo, parallax, journey path, map buttons
- [ ] **Scene 14:** PageTurn gallery album
- [ ] **Scene 15:** BlessingForm + BloomFlower + API route
- [ ] SceneNav dots (right rail)
- [ ] Cross-link to groom site in Scene 9
- [ ] Lazy load Scenes 9–17

### Deliverable
Full scroll experience with all event information and guest interaction.

### QA Gate
- [ ] All wedding facts match groom site
- [ ] Mobile scroll smooth with Lenis
- [ ] Form validation works (Zod)
- [ ] Gallery page-turn works touch + click

---

## Phase 4 — Closing Act + Polish (Week 4)

### Goals
Scenes 16–17, easter eggs, performance hardening.

### Tasks
- [ ] **Scene 16:** Reverse fold + keepsake box close sequence
- [ ] **Scene 17:** Final blessing + fade
- [ ] Wedding seal easter egg (long-press → hidden dua)
- [ ] Night mode (after sunset via next-themes)
- [ ] Cursor petals (desktop only)
- [ ] Return visitor flow (skip intro via localStorage)
- [ ] Supabase blessings persistence
- [ ] Cloudinary image integration
- [ ] Open Graph meta + favicon
- [ ] Replace all placeholder images

### Deliverable
Feature-complete cinematic experience.

### QA Gate
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] axe DevTools 0 violations
- [ ] Cross-browser: Chrome, Safari, Firefox, Samsung Internet

---

## Phase 5 — Launch (Week 5)

### Tasks
- [ ] Add Google Maps URL
- [ ] Add real Safna portrait + gallery photos
- [ ] Add ambient piano audio file
- [ ] Vercel deployment + custom domain
- [ ] Vercel Analytics event tracking (scene completion funnel)
- [ ] Share preview with family for content approval
- [ ] Final QA on real devices via WhatsApp link flow

### Deliverable
Production URL live and shareable.

---

## Phase 6 — Keepsake Evolution (Post-Wedding)

Future phases from original vision:

| Feature | Timeline |
|---------|----------|
| Full wedding gallery | Wedding day +1 week |
| Wedding film embed | When available |
| Guestbook PDF export | +1 month |
| Anniversary countdown mode | Year 1 |
| Admin dashboard | As needed |
| PWA offline mode | Optional |

---

## Team Allocation by Phase

| Phase | Creative | Motion | Frontend | QA |
|-------|----------|--------|----------|-----|
| 0 | ████████ | ████ | — | — |
| 1 | ██ | ██ | ████████ | ██ |
| 2 | ████ | ████████ | ████████ | ████ |
| 3 | ██ | ████ | ████████ | ████ |
| 4 | ████ | ████ | ████████ | ████████ |
| 5 | ██ | — | ████ | ████████ |

---

## Risk Register

| Risk | Phase | Mitigation |
|------|-------|------------|
| Scene 4 fold jank | 2 | GSAP fallback; 2D fade stack fallback |
| Audio licensing | 2 | Royalty-free piano (Pixabay/Epidemic) |
| Large texture assets | 2 | WebP, max 200kb each |
| Supabase setup delay | 4 | In-memory API until ready |
| Content approval delay | 5 | Placeholder copy matches approved facts |

---

## Definition of Done

The project is complete when a guest can:

1. Open the link on WhatsApp (mobile)
2. Experience the envelope ritual (or skip gracefully)
3. Read Safna's invitation and letter
4. Find date, time, venue, and directions
5. Leave a blessing
6. Watch the invitation return to the keepsake box
7. Feel they received something memorable — not visited a website

---

## Approval to Proceed

| Stakeholder | Scene Flow | Visual Direction | Motion | Architecture |
|-------------|-----------|------------------|--------|--------------|
| Safna & Family | ☐ | ☐ | ☐ | — |
| Creative Lead | ☐ | ☐ | ☐ | ☐ |
| Dev Lead | — | — | ☐ | ☐ |

**Once approved → Phase 1 development begins component by component.**

---

*Return to [Creative Brief Index](./00-index.md)*
