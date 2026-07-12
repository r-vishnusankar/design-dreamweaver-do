# 03 — Scene-by-Scene Breakdown

Production specification for each scene: copy, state, motion, audio, assets, and acceptance criteria.

---

## Scene 0 — Bismillah

### Copy
- **Arabic:** بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
- **Transliteration:** Bismillahir Rahmanir Rahim
- **No additional text**

### Visual
- Background: `#0A0908` (near black, not pure #000)
- Film grain overlay: 3% opacity
- Text: Muted gold `#C4A962` at 80% opacity

### Motion
| Time | Action |
|------|--------|
| 0.0s | Black screen, ambient tone begins |
| 0.5s | Arabic fades in (1.2s, ease-out) |
| 1.0s | Transliteration fades in (0.8s) |
| 3.5s | Hold |
| 4.0s | Crossfade to Scene 1 (2s) |

### Audio
- Ambient room tone: single sine pad, -40dB
- No music

### State
```typescript
scene: 0
canSkip: false
hasInteracted: false
```

### Acceptance Criteria
- [ ] Text readable on OLED and LCD
- [ ] Reduced motion: 2s static then advance
- [ ] Screen reader announces Arabic and transliteration

---

## Scene 1 — Envelope on Table

### Copy
- **CTA:** "Tap the seal to open" (fades in at 2s)
- **Skip link:** "Skip intro" (top-right, appears at 3s)

### Visual Assets
- `envelope-closed.webp` — ivory envelope, top-down 15° angle
- `table-wood.webp` — warm Kerala teak texture
- `wax-seal.webp` — gold monogram "S"
- Lighting: CSS gradient simulating morning window light

### Motion
- Envelope idle: `scale [1, 1.008, 1]` over 6s, infinite
- Seal hover: `brightness(1.1)` + subtle scale 1.05
- Shadow: animated blur 20px→24px on hover

### Interaction
- Click/tap wax seal → trigger Scene 2
- Click "Skip intro" → jump to Scene 8 with fade

### Audio
- None until tap

### Acceptance Criteria
- [ ] Envelope centered on 320px–1920px viewports
- [ ] Seal touch target ≥ 48px
- [ ] Skip intro persists accessibility

---

## Scene 2 — Wax Seal Breaks

### Motion Timeline (GSAP or Framer sequence)
| Time | Element | Action |
|------|---------|--------|
| 0.0s | Seal | Crack line SVG draws |
| 0.3s | Seal fragments | 4 pieces translate outward, rotate, fade |
| 0.6s | Envelope flap | Rotates -15deg on top edge |
| 1.2s | — | Auto-advance to Scene 3 |

### Audio
- `wax-crack.mp3` (0.15s, -12dB)
- `paper-flutter.mp3` (0.4s, -18dB)

### Acceptance Criteria
- [ ] Works without audio
- [ ] Reduced motion: instant flap open, no fragment animation

---

## Scene 3 — Invitation Slides Out

### Motion
- Invitation card: `translateX(-30%) → translateX(0)` over 2s
- Camera: subtle `scale(1.05) → scale(1)` parallax on table
- Card reveals partial text: "Safna Latheef" in Great Vibes

### Audio
- `paper-slide.mp3` (0.8s)

### Acceptance Criteria
- [ ] Card edge visible emerging from envelope
- [ ] No layout shift on transition

---

## Scene 4 — Three-Stage Unfold

### Fold Mechanics
```
Fold 1: rotateY(-90deg) on left third   — 0.0–1.5s, pause 0.3s
Fold 2: rotateY(-90deg) on center third — 1.8–3.3s, pause 0.3s  
Fold 3: rotateY(-90deg) on right third  — 3.6–5.1s
```

### Visual
- Paper thickness simulated with 2px side edge shadow
- Texture: `paper-fiber.webp` tiled at 5% opacity
- Back of fold shows faint Islamic geometric pattern

### Content Revealed (progressive)
1. Fold 1: Wedding Reception header
2. Fold 2: Date — Sunday, 16 August 2026
3. Fold 3: Full invitation text + families preview

### Acceptance Criteria
- [ ] Each fold pauses perceptibly (min 0.5s)
- [ ] 2D fallback: three fade reveals stacked vertically

---

## Scene 5 — Flowers Bloom

### Motion
- 6 jasmine blossoms: stagger `scale(0) → scale(1)`, 0.4s apart
- 12 particles: random drift, 8s duration, loop
- Invitation card: subtle `translateY(-8px)` float begins

### Copy
- **Prompt:** "Would you like to hear the music?"
- **Buttons:** "Yes, gently" / "Continue in silence"

### Audio
- On "Yes": `piano-ambient.mp3` fades in over 3s, volume 0.25
- Mute toggle appears fixed bottom-right

### Acceptance Criteria
- [ ] Music never autoplays without explicit tap
- [ ] "Continue in silence" advances immediately

---

## Scene 6 — Bride Introduction

### Copy
```
ٱلسَّلَامُ عَلَيْكُمْ

Safna Latheef

Daughter of
Mr. Latheef K.
Mrs. Arifa Kammukutty

Cordially invites your esteemed presence and blessings
with family on the auspicious occasion of her wedding reception.

Sunday · 16 · August 2026
3 Rabi' al-Awwal 1448 AH
```

### Visual
- Portrait: Cloudinary-optimized, oval mask with gold border
- Name: Great Vibes 72px desktop / 48px mobile
- Parents: Cormorant Garamond 24px

### Motion
- Portrait: mask expand from center, 1.5s
- Name: letter-by-letter, 40ms per character
- Scroll indicator: gentle bounce after 3s idle

### Acceptance Criteria
- [ ] Portrait LCP < 2.5s with blur placeholder
- [ ] All wedding facts visible without scrolling on desktop

---

## Scene 7 — A Blessing

### Copy
> "Every beautiful beginning starts with a prayer."

### Visual
- Full viewport ivory
- Single quote, Cormorant italic 32px
- No images, no patterns — intentional emptiness

### Motion
- Blur reveal 12px → 0, 2s
- Hold 3s minimum

---

## Scene 8 — Scroll Transition

### Technical Transition
1. Exit fixed `SceneEngine` container
2. Mount scroll document at hero position
3. Enable Lenis smooth scroll
4. Fade in minimal nav dots (chapter indicators)

### Motion
- Invitation scales from 85vw → 100vw width
- Background expands from table scene to full ivory page
- Duration: 2s continuous

### Acceptance Criteria
- [ ] No scroll jank at handoff
- [ ] Lenis initializes after transition complete

---

## Scene 9 — Love Journey

### Milestones (no dates)
| # | Title | Description |
|---|-------|-------------|
| 1 | Prayer | Where every beautiful beginning finds its grace |
| 2 | Hope | A quiet faith that the best was yet to come |
| 3 | Meeting | Two souls who recognized something familiar |
| 4 | Trust | Built slowly, strengthened by family |
| 5 | Love | Not loud — deep, patient, sure |
| 6 | Marriage | A promise witnessed by those who matter most |
| 7 | Forever | A story that has only just begun |

### Cross-link
- "Read Jithin's chapter →" links to groom site

---

## Scene 10 — Two Families

### Copy
**Bride's Family**
Mr. Latheef K. & Mrs. Arifa Kammukutty  
Kottekatil House, Nammarapadam, Nemmara, Palakkad District

**Groom's Family**
Mr. Abdulsalam & Mrs. Salma  
Thayyullyill House, Akkikavu, Thrissur

### Motion
- Left card enters from `-100px`, right from `+100px`
- Meet at center: golden connecting line draws (SVG stroke)
- Merge text fades in: "Two families, one celebration"

---

## Scene 11 — Reception Information

### Cards
| Card | Primary | Secondary |
|------|---------|-----------|
| Date | Sunday, 16 August 2026 | 3 Rabi' al-Awwal 1448 AH |
| Time | 11:00 AM – 3:00 PM | Indian Standard Time |
| Venue | Everest Convention Centre | Karikkad, Thrissur, Kerala |
| Occasion | Wedding Reception | Family warmly welcomed |

### Micro-interaction
- Hover: `translateY(-2px)`, shadow `0 8px 24px rgba(44,40,37,0.08)`

---

## Scene 12 — Countdown

### Target
`2026-08-16T11:00:00+05:30`

### Visual
- 4 circular SVG rings
- Numbers: Cormorant 48px
- Label: Inter 10px uppercase tracking 0.2em

### Motion
- Number change: fade + slight upward drift, 0.4s

---

## Scene 13 — Venue

### Copy
- Full address, parking, landmarks
- CTAs: Google Maps, Get Directions

### Motion
- Dotted path animates left-to-right on scroll into view
- Venue photo: parallax `translateY` at 0.3 scroll speed

### Assets
- `venue-everest.webp` (replace placeholder)

---

## Scene 14 — Gallery Album

### Interaction Model
- Single photo per "page"
- Click right half / swipe left → next page
- Page turn: `rotateY(-15deg)` curl effect, 0.8s

### Assets
- 5–12 photos via Cloudinary
- Captions optional, Playfair italic

---

## Scene 15 — Guest Blessings

### Form Fields
- Name (required, max 80 chars)
- Message (required, max 500 chars)

### Motion
- On type: subtle ink stroke underline animates
- On submit success: flower bloom (8 petals), 2s
- Confirmation: "Jazakum Allahu Khairan for your blessings."

### Backend
- POST `/api/blessings` → Supabase `blessings` table

---

## Scene 16 — Keepsake Box

### Motion Sequence
| Time | Action |
|------|--------|
| 0.0s | Invitation reverse-folds (2.5s) |
| 2.5s | Camera zoom out (scale 1 → 0.6) |
| 3.5s | Box lid opens from below frame |
| 4.0s | Invitation descends into box |
| 4.5s | Lid closes |
| 5.0s | Advance to Scene 17 |

### Visual Callback
- Same wood table texture as Scene 1 — narrative circle complete

---

## Scene 17 — Final Blessing

### Copy
```
Safna & Jithin

Sunday · 16 August 2026
Everest Convention Centre, Thrissur

With best compliments from Dear & Near

Jazakum Allahu Khairan
```

### Motion
- Fade in stagger 0.3s per line
- Final 4s fade to ivory (not black — warmth, not ending)

### Easter Egg
- Long-press monogram seal → hidden dua (same as v1 spec)

---

## Global Scene State Machine

```typescript
type SceneId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

interface SceneState {
  currentScene: SceneId;
  mode: 'directed' | 'scroll';  // directed = 0-8, scroll = 9+
  audioEnabled: boolean;
  introSkipped: boolean;
  hasVisitedBefore: boolean;
}
```

---

*Next document: [04 — Wireframes](./04-wireframes.md)*
