# 05 — UI Design System

A token-driven system for luxury stationery aesthetics. Typography is the hero; decoration is restrained.

---

## Design Principles

1. **Paper, not pixels** — Surfaces feel tactile (texture, shadow, warmth)
2. **Light is character** — Morning window light, never flat fills
3. **Gold is accent, not theme** — Used for labels, dividers, seal — never backgrounds
4. **Whitespace is luxury** — Minimum 96px section padding
5. **Islamic geometry is structure** — 3–5% opacity patterns only

---

## Color Tokens

### CSS Variables (`globals.css`)

```css
:root {
  /* Surfaces */
  --color-ivory:        40 33% 98%;    /* #FAF8F5 */
  --color-champagne:    35 40% 93%;    /* #F5EDE3 */
  --color-warm-white:   45 100% 99%;   /* #FFFEF9 */
  --color-paper:        38 30% 96%;    /* #F7F3EE */
  
  /* Accents */
  --color-gold:         43 40% 59%;    /* #C4A962 */
  --color-gold-muted:   43 30% 73%;    /* #D4C4A0 */
  --color-sage:         100 12% 73%;   /* #B8C4B0 */
  --color-sage-muted:   100 10% 84%;   /* #D4DDD0 */
  --color-kerala-green: 100 10% 50%;   /* #7A8B72 */
  
  /* Neutrals */
  --color-brown-warm:   25 15% 35%;    /* #5C4F47 — wood tones */
  --color-sand:         35 30% 86%;    /* #E8DFD0 — borders */
  --color-text:         30 8% 16%;    /* #2C2825 */
  --color-text-secondary: 30 5% 40%;  /* #6B6560 */
  --color-text-muted:   30 5% 58%;    /* #9A948C */
  
  /* Scene 0 */
  --color-void:         30 10% 4%;     /* #0A0908 */
  
  /* Shadows */
  --shadow-soft:    0 4px 24px hsl(30 8% 16% / 0.06);
  --shadow-lifted:  0 8px 32px hsl(30 8% 16% / 0.10);
  --shadow-envelope: 0 12px 40px hsl(25 15% 20% / 0.15);
}
```

### Tailwind Extension

```typescript
colors: {
  ivory: 'hsl(var(--color-ivory))',
  champagne: 'hsl(var(--color-champagne))',
  gold: 'hsl(var(--color-gold))',
  sage: 'hsl(var(--color-sage))',
  // ...
}
```

### Pairing with Groom Site

Both sites share **gold + warm neutrals**. Safna's site adds **sage + champagne warmth** — softer, more intimate. Jithin's site remains the authoritative event reference; Safna's is the emotional companion.

---

## Typography Scale

### Font Stack (next/font)

| Token | Font | Variable | Usage |
|-------|------|----------|-------|
| `font-display` | Great Vibes | `--font-great-vibes` | Names, romantic accents |
| `font-heading` | Cormorant Garamond | `--font-cormorant` | Titles, family names, quotes |
| `font-subheading` | Playfair Display | `--font-playfair` | Section subtitles, captions |
| `font-body` | Inter | `--font-inter` | Labels, forms, UI |

### Type Scale

| Token | Mobile | Desktop | Weight | Tracking |
|-------|--------|---------|--------|----------|
| `text-hero` | 48px | 80px | 400 | 0 |
| `text-display` | 36px | 56px | 300 | 0.02em |
| `text-h1` | 32px | 48px | 400 | 0 |
| `text-h2` | 24px | 36px | 400 | 0 |
| `text-h3` | 20px | 28px | 500 | 0 |
| `text-body-lg` | 18px | 20px | 300 | 0 |
| `text-body` | 16px | 16px | 400 | 0 |
| `text-label` | 11px | 12px | 500 | 0.25em |
| `text-caption` | 13px | 14px | 400 | 0.05em |

### Arabic / Islamic Text
- Font: `Noto Naskh Arabic` (next/font, subset arabic)
- Direction: `rtl` with `dir="rtl"`
- Always pair with transliteration below in Inter caption

---

## Spacing Scale

Based on 4px grid with generous section rhythm.

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Icon gaps |
| `space-sm` | 8px | Inline spacing |
| `space-md` | 16px | Card internal |
| `space-lg` | 24px | Between elements |
| `space-xl` | 32px | Card padding mobile |
| `space-2xl` | 48px | Section sub-spacing |
| `space-3xl` | 64px | Between sections mobile |
| `space-4xl` | 96px | Section padding |
| `space-5xl` | 128px | Hero vertical padding desktop |

---

## Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0 | Editorial sharpness (cards) |
| `radius-sm` | 2px | Buttons, inputs |
| `radius-md` | 4px | Gallery photos |
| `radius-full` | 9999px | Portrait, countdown rings |
| `border-subtle` | 1px solid hsl(var(--color-sand)) | Cards |
| `border-gold` | 1px solid hsl(var(--color-gold) / 0.4) | Hover states |

**No large border-radius.** Luxury stationery has sharp or minimally rounded corners.

---

## Elevation System

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | none | Flat text sections |
| 1 | `--shadow-soft` | Info cards at rest |
| 2 | `--shadow-lifted` | Cards on hover |
| 3 | `--shadow-envelope` | Envelope, keepsake box |
| 4 | fixed overlay | Gallery lightbox, Scene 0 |

---

## Component Library (shadcn/ui base)

### Atoms
- `Button` — primary (gold), outline (gold border), ghost
- `Input` — ivory bg, sand border, gold focus ring
- `Textarea` — same as input, min-height 120px
- `Label` — uppercase tracking, text-label size
- `Divider` — 64px gold line, centered

### Molecules
- `InfoCard` — icon + label + primary + secondary
- `FamilyCard` — names + address block
- `CountdownRing` — SVG circle + number
- `GalleryPage` — single photo + curl + nav
- `BlessingCard` — submitted message display

### Organisms
- `EnvelopeScene` — table + envelope + seal
- `UnfoldSequence` — tri-fold animation container
- `LoveTimeline` — vertical milestone list
- `FamilyMerge` — dual card + connection animation
- `KeepsakeClose` — box + fold reverse sequence

### Templates
- `DirectedScene` — fixed viewport scene wrapper
- `ScrollScene` — min-h-screen section wrapper
- `SceneEngine` — state machine orchestrator

---

## Texture Assets

| Asset | Format | Usage |
|-------|--------|-------|
| `paper-fiber.webp` | 512×512 tile | Card backgrounds, 4% opacity |
| `wood-teak.webp` | 1920×1080 | Scene 1 & 16 table |
| `film-grain.webp` | 256×256 tile | Scene 0 overlay |
| `geometric-pattern.svg` | vector | 3% opacity backgrounds |

---

## Iconography

- **Library:** Lucide React
- **Stroke:** 1.5px
- **Size:** 20px inline, 24px card headers
- **Color:** `--color-gold` for decorative, `--color-text-secondary` for functional

---

## Responsive Grid

```css
.container-cinematic {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 6rem);
}
```

| Breakpoint | Width | Columns | Gutter |
|------------|-------|---------|--------|
| sm | 640px | 4 | 16px |
| md | 768px | 8 | 24px |
| lg | 1024px | 12 | 32px |
| xl | 1280px | 12 | 32px |

---

## Dark / Night Mode (Optional Easter Egg)

After sunset (18:00–06:00 local):
- Background shifts ivory → `#1A1816`
- Text inverts to warm white
- Gold accents brighten 10%
- Envelope scene uses candlelight gradient instead of morning light

Implemented via `next-themes` + time detection — not a user toggle.

---

*Next document: [06 — Motion System](./06-motion-system.md)*
