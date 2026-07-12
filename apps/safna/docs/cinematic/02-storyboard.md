# 02 — Storyboard

Visual frames for all 18 scenes. Each frame describes **composition, lighting, motion intent, and duration**.

Aspect ratio reference: **9:16 mobile primary**, **16:9 desktop cinematic letterbox optional**.

---

## Scene 0 — Bismillah

```
┌─────────────────────────────────────────┐
│                                         │
│              ░░░ BLACK ░░░              │
│                                         │
│         (very subtle grain texture)     │
│                                         │
│      بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ      │
│                                         │
│     Bismillahir Rahmanir Rahim          │
│         (small, muted gold)             │
│                                         │
│              ░░░ BLACK ░░░              │
└─────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Duration | 4s hold → 2s fade |
| Lighting | None — void |
| Audio | Soft room tone (-40dB) |
| Motion | Text fade in 1.5s, hold, fade to Scene 1 |
| Camera | Static |

---

## Scene 1 — The Envelope

```
┌─────────────────────────────────────────┐
│    ░░░ soft vignette ░░░                │
│                                         │
│     ═══════════════════════════         │
│     ║  warm wood table texture  ║       │
│     ║                           ║       │
│     ║      ┌─────────────┐      ║       │
│     ║      │  ENVELOPE   │      ║       │
│     ║      │   ivory     │      ║       │
│     ║      │     (S)     │ ← wax seal    │
│     ║      └─────────────┘      ║       │
│     ║         ↑ soft shadow     ║       │
│     ═══════════════════════════         │
│                                         │
│        morning light from top-left      │
│                                         │
│         "Tap to open" (fade in)         │
└─────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Duration | User-controlled |
| Lighting | Warm key light 45°, soft fill |
| Audio | None until interaction |
| Motion | Envelope breathes (scale 1→1.008, 6s loop); seal glints on hover |
| Interaction | Click/tap seal → Scene 2 |

---

## Scene 2 — Seal Breaks

```
     Frame A (0.0s)          Frame B (0.4s)         Frame C (0.8s)
    ┌───────────┐            ┌───────────┐           ┌───────────┐
    │    (S)    │  crack →   │  (S) ╱    │  break →  │  seal     │
    │           │            │           │           │  pieces   │
    └───────────┘            └───────────┘           └───────────┘
```

| Property | Value |
|----------|-------|
| Duration | 1.2s auto-advance |
| Audio | Wax crack (0.1s) + paper whisper (0.3s) |
| Motion | Seal fractures radially; envelope flap loosens |
| Haptic | Light tap on mobile (optional) |

---

## Scene 3 — Invitation Slides Out

```
    Side view (camera tracks right →)

    ┌──────┐
    │ env  │──────→  ┌────────────┐
    │      │         │ invitation │  emerging
    └──────┘         └────────────┘
                     partial text visible
```

| Property | Value |
|----------|-------|
| Duration | 2.0s |
| Audio | Paper slide friction |
| Motion | Card emerges 60% out; camera dolly follows |
| Easing | cubic-bezier(0.22, 1, 0.36, 1) |

---

## Scene 4 — Three-Stage Unfold

```
    Stage 1          Stage 2           Stage 3 (full)
    ┌──┬──┐         ┌─────┬──┐        ┌─────────────┐
    │  │  │  →      │     │  │   →    │             │
    └──┴──┘         └─────┴──┘        │  FULL CARD  │
    (tri-fold)      (half open)       │  invitation │
                                      └─────────────┘
         pause 0.8s      pause 0.8s
```

| Property | Value |
|----------|-------|
| Duration | 4.5s total (3 folds × 1.5s incl. pause) |
| Audio | Soft crease per fold |
| Motion | Each fold rotates on Y-axis; slight paper bend shader |
| End state | Full invitation fills 85% viewport |

---

## Scene 5 — Flowers Bloom

```
    ┌─────────────────────────────────┐
    │  ✿        invitation card       │
    │     ✿                           │
    │          ✿    ✿                 │
    │   ✿              gentle petals  │
    │        ✿   ✿                    │
    │   (jasmine + soft sage tones)   │
    └─────────────────────────────────┘
    
    "Begin the music?" [ soft piano icon ]
```

| Property | Value |
|----------|-------|
| Duration | 3s bloom → user prompt |
| Audio | Opt-in piano begins here (not before) |
| Motion | 5–8 flowers scale from 0 with stagger; particles drift |
| Particles | Max 20, opacity < 0.4 |

---

## Scene 6 — Bride Introduction

```
    ┌─────────────────────────────────┐
    │                                 │
    │         ╭───────────╮           │
    │         │  PORTRAIT │  oval/    │
    │         │   Safna   │  arch mask│
    │         ╰───────────╯           │
    │                                 │
    │          Safna Latheef          │  ← Great Vibes
    │         ─────────────           │
    │         Daughter of             │
    │      Mr. Latheef K. &           │
    │    Mrs. Arifa Kammukutty        │
    │                                 │
    │   Cordially invites your...     │
    │                                 │
    │            ↓ scroll             │
    └─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Duration | Scroll-controlled |
| Lighting | Soft portrait vignette |
| Motion | Portrait mask reveal; name letter-by-letter |
| Typography | Hero moment — largest text in experience |

---

## Scene 7 — A Blessing

```
    ┌─────────────────────────────────┐
    │                                 │
    │                                 │
    │    "Every beautiful beginning   │
    │         starts with a prayer."  │
    │                                 │
    │              —                  │
    │                                 │
    │         (minimal, centered)     │
    │                                 │
    │                                 │
    └─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Duration | 3s auto or scroll |
| Background | Pure ivory, no decoration |
| Motion | Quote blur-reveal; long hold |

---

## Scene 8 — Transition to Scroll

```
    Camera pulls back:
    
    invitation card shrinks slightly
    paper texture fades to full-width layout
    scroll indicator appears
    Lenis smooth scroll activates
    
    ═══════════════════════════════════
    (no hard cut — continuous motion)
```

| Property | Value |
|----------|-------|
| Duration | 2s morph |
| Technical | Switch from `fixed` scene container to document scroll |
| Motion | Scale 1→1, translate to natural document position |

---

## Scene 9 — Love Journey

```
         Prayer 🌿
            │
         Hope ✨
            │
       Meeting 💫
            │
        Trust 🤝
            │
         Love 🌸
            │
      Marriage 🤲
            │
       Forever ∞
```

Vertical timeline, center axis, alternating labels.

---

## Scene 10 — Two Families Merge

```
    BEFORE                    MERGE                    AFTER
    
    BRIDE'S          GROOM'S              ONE CELEBRATION
    ┌────────┐      ┌────────┐           ┌─────────────────┐
    │ Latheef│      │Abdul-  │    →      │  Two families   │
    │ family │  +   │ salam  │           │  one blessing   │
    └────────┘      └────────┘           └─────────────────┘
    
    Cards slide from L/R, meet center, golden line connects
```

---

## Scene 11 — Reception Information

```
    ┌──────────────┐  ┌──────────────┐
    │ 📅 Date      │  │ 🕐 Time      │
    │ Sun 16 Aug   │  │ 11AM–3PM IST │
    └──────────────┘  └──────────────┘
    ┌──────────────┐  ┌──────────────┐
    │ 📍 Venue     │  │ ✦ Occasion   │
    │ Everest CC   │  │ Reception    │
    └──────────────┘  └──────────────┘
    
    Cards lift 2px on hover; soft shadow deepens
```

---

## Scene 12 — Countdown

```
         ╭────╮  ╭────╮  ╭────╮  ╭────╮
         │ 42 │  │ 08 │  │ 31 │  │ 17 │
         ╰────╯  ╰────╯  ╰────╯  ╰────╯
          Days    Hours   Mins    Secs
         
         circular SVG rings, minimal
```

---

## Scene 13 — Venue Journey

```
    ┌─────────────────────────────────┐
    │  [ venue photograph ]           │
    │  Everest Convention Centre      │
    │                                 │
    │  ─── animated dotted path ───   │
    │  You  ···············→  Venue   │
    │                                 │
    │  [ Google Maps ] [ Directions ] │
    └─────────────────────────────────┘
```

---

## Scene 14 — Gallery Album

```
    ┌─────────────────────────────────┐
    │  ┌─────┐                        │
    │  │photo│  page curl corner →   │
    │  │     │                        │
    │  └─────┘                        │
    │     swipe / click turns page    │
    │                                 │
    │  ○ ● ○ ○ ○   (page indicators)  │
    └─────────────────────────────────┘
```

Page-turn animation (CSS 3D or Framer rotateY), not grid.

---

## Scene 15 — Guest Blessings

```
    ┌─────────────────────────────────┐
    │  Your name: ________________    │
    │                                 │
    │  ┌─────────────────────────┐   │
    │  │ ink stroke animates as  │   │
    │  │ user types blessing...  │   │
    │  └─────────────────────────┘   │
    │                                 │
    │       [ Send Blessings ]        │
    │                                 │
    │  🌸 bloom on success            │
    └─────────────────────────────────┘
```

---

## Scene 16 — Keepsake Box Close

```
    Frame sequence:
    
    1. Invitation folds (reverse of Scene 4)
    2. Camera zooms out
    3. Invitation descends into wooden box
    4. Lid closes gently
    5. Box rests on table (callback to Scene 1)
```

| Property | Value |
|----------|-------|
| Duration | 5s |
| Emotion | Closure, preservation, timelessness |
| Audio | Soft box close, paper settle |

---

## Scene 17 — Final Blessing

```
    ┌─────────────────────────────────┐
    │                                 │
    │         Safna & Jithin          │
    │                                 │
    │    Sunday · 16 August 2026      │
    │    Everest Convention Centre    │
    │                                 │
    │      Jazakum Allahu Khairan     │
    │                                 │
    │         ─── fade to ivory ───   │
    └─────────────────────────────────┘
```

---

## Storyboard Summary Table

| Scene | Name | Type | Duration | User Action |
|-------|------|------|----------|-------------|
| 0 | Bismillah | Auto | 6s | None |
| 1 | Envelope | Interactive | — | Tap seal |
| 2 | Seal Breaks | Auto | 1.2s | None |
| 3 | Slide Out | Auto | 2s | None |
| 4 | Unfold | Auto | 4.5s | None |
| 5 | Flowers | Interactive | 3s+ | Opt-in music |
| 6 | Bride Intro | Scroll | — | Scroll |
| 7 | Blessing | Auto/Scroll | 3s | Scroll |
| 8 | Transition | Auto | 2s | Scroll enabled |
| 9 | Journey | Scroll | — | Scroll |
| 10 | Families | Scroll | — | Scroll |
| 11 | Reception | Scroll | — | Scroll |
| 12 | Countdown | Scroll | — | Scroll |
| 13 | Venue | Scroll | — | Tap maps |
| 14 | Gallery | Interactive | — | Turn pages |
| 15 | Blessings | Interactive | — | Submit form |
| 16 | Keepsake | Auto | 5s | None |
| 17 | Final | Auto | 4s fade | None |

**Total directed opening (0–8):** ~25 seconds + user pauses  
**Full experience:** 4–6 minutes

---

*Next document: [03 — Scene Breakdown](./03-scene-breakdown.md)*
