# 04 — Wireframes

Structural layouts at **mobile (375px)**, **tablet (768px)**, and **desktop (1280px)**. Wireframes show content hierarchy, not visual polish.

---

## Global Chrome (Post Scene 8)

```
MOBILE                                    DESKTOP
┌─────────────────────┐                  ┌────────────────────────────────────────┐
│ ○ ○ ○ ○ ○  (dots)   │                  │  ○ ○ ○ ○ ○ ○ ○ ○ ○  scene nav (right)   │
│                     │                  │                                        │
│   [ scene content ] │                  │         [ scene content ]              │
│                     │                  │              max-w-4xl centered        │
│                     │                  │                                        │
│              [ 🔇 ]  │                  │                              [ 🔇 ]    │
└─────────────────────┘                  └────────────────────────────────────────┘
```

- Scene dots: fixed right edge, 8px circles, active = gold fill
- Mute: fixed bottom-right, 44px touch target
- No persistent header — content is the navigation

---

## Scene 0 — Bismillah

```
┌─────────────────────┐
│                     │
│                     │
│   بِسْمِ ٱللَّٰهِ...   │
│                     │
│ Bismillahir...      │
│                     │
│                     │
└─────────────────────┘
Full viewport, centered, no UI chrome
```

---

## Scene 1 — Envelope

```
┌─────────────────────┐
│          Skip intro │  ← text link, top-right
│                     │
│   ┌─────────────┐   │
│   │             │   │
│   │  ENVELOPE   │   │
│   │    (S)      │   │
│   │             │   │
│   └─────────────┘   │
│    wood surface     │
│                     │
│  Tap the seal       │
└─────────────────────┘

DESKTOP: envelope max-width 480px, table extends full bleed
```

---

## Scene 4 — Unfold (Full Card)

```
┌─────────────────────┐
│  WEDDING RECEPTION  │
│  ─────────────────  │
│                     │
│   Safna Latheef     │
│        &            │
│ Jithin Abdulsalam   │
│                     │
│  Sunday, 16 Aug     │
│  2026               │
│                     │
│  3 Rabi' al-Awwal   │
│  1448 AH            │
│                     │
│  Everest Convention │
│  Centre             │
└─────────────────────┘
Card ratio: 3:4 portrait on mobile, 4:3 landscape on desktop
```

---

## Scene 6 — Bride Hero

```
MOBILE                           DESKTOP
┌─────────────────────┐         ┌──────────────────────────────────┐
│   ٱلسَّلَامُ عَلَيْكُمْ   │         │                                  │
│                     │         │  ┌────────┐                      │
│    ┌─────────┐      │         │  │        │   Safna Latheef      │
│    │ portrait│      │         │  │ portrait│  ───────────────    │
│    └─────────┘      │         │  │        │  Daughter of...     │
│                     │         │  └────────┘  Invitation text...  │
│   Safna Latheef     │         │                                  │
│   Daughter of...    │         │  Sun 16 Aug 2026                 │
│   Invitation...     │         │                                  │
│   Sun 16 Aug        │         │              ↓ Scroll            │
│        ↓            │         └──────────────────────────────────┘
└─────────────────────┘         Two-column: portrait left, text right
```

---

## Scene 9 — Love Journey

```
MOBILE (vertical)                DESKTOP (vertical, wider)
┌─────────────────────┐         ┌──────────────────────────────────┐
│      Prayer         │         │              Prayer              │
│         │           │         │                │                 │
│         ○           │         │                ○                 │
│         │           │         │                │                 │
│        Hope         │         │               Hope               │
│         │           │         │                │                 │
│         ○           │         │                ○                 │
│        ...          │         │               ...                │
└─────────────────────┘         └──────────────────────────────────┘

Alternating text left/right on desktop; centered on mobile
```

---

## Scene 10 — Two Families

```
MOBILE (stacked)                 DESKTOP (side by side)
┌─────────────────────┐         ┌──────────────────────────────────┐
│  BRIDE'S FAMILY     │         │  BRIDE'S FAMILY  │ GROOM'S FAMILY│
│  Mr. Latheef K.     │         │  Mr. Latheef K.  │ Mr. Abdulsalam│
│  Mrs. Arifa...      │         │  Mrs. Arifa... │ Mrs. Salma    │
│  Kottekatil House   │         │  Kottekatil... │ Thayyullyill..│
│                     │         │         │              │        │
│        &            │         │         └────── ○ ──────┘        │
│                     │         │      Two families, one celebration│
│  GROOM'S FAMILY     │         └──────────────────────────────────┘
│  Mr. Abdulsalam     │
│  ...                │
└─────────────────────┘
```

---

## Scene 11 — Reception Cards

```
MOBILE (1 col)                   DESKTOP (2×2 grid)
┌─────────────────────┐         ┌──────────────────────────────────┐
│ ┌─────────────────┐ │         │ ┌──────────────┐ ┌──────────────┐│
│ │ DATE            │ │         │ │ DATE         │ │ TIME         ││
│ └─────────────────┘ │         │ └──────────────┘ └──────────────┘│
│ ┌─────────────────┐ │         │ ┌──────────────┐ ┌──────────────┐│
│ │ TIME            │ │         │ │ VENUE        │ │ OCCASION     ││
│ └─────────────────┘ │         │ └──────────────┘ └──────────────┘│
│ ┌─────────────────┐ │         └──────────────────────────────────┘
│ │ VENUE           │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ OCCASION        │ │
│ └─────────────────┘ │
└─────────────────────┘
```

---

## Scene 13 — Venue

```
┌─────────────────────┐
│ ┌─────────────────┐ │
│ │                 │ │
│ │  VENUE PHOTO    │ │
│ │                 │ │
│ └─────────────────┘ │
│ Everest Convention  │
│ Centre              │
│ Karikkad, Thrissur  │
│                     │
│ You ·····→ Venue    │  animated path
│                     │
│ ┌────────┐┌────────┐│
│ │ Maps   ││ Direct ││
│ └────────┘└────────┘│
│                     │
│ Parking: ...        │
│ Landmarks: ...      │
└─────────────────────┘
```

---

## Scene 14 — Gallery Album

```
┌─────────────────────┐
│  ┌───────────────┐  │
│  │               │  │
│  │    PHOTO      │  │  ← page curl top-right
│  │               │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│   ‹   ○ ● ○   ›     │  nav arrows + dots
│                     │
│   "Caption text"    │
└─────────────────────┘
Single photo focus — never grid
```

---

## Scene 15 — Blessings Form

```
┌─────────────────────┐
│  Leave Your         │
│  Blessings          │
│                     │
│  YOUR NAME          │
│  ┌─────────────────┐│
│  │                 ││
│  └─────────────────┘│
│                     │
│  YOUR MESSAGE       │
│  ┌─────────────────┐│
│  │                 ││
│  │                 ││
│  └─────────────────┘│
│                     │
│  [ Send Blessings ] │
│                     │
│  ┌─────────────────┐│  submitted messages
│  │ Guest: "..."    ││
│  └─────────────────┘│
└─────────────────────┘
```

---

## Scene 16 — Keepsake Box

```
┌─────────────────────┐
│                     │
│    (zoomed out)     │
│                     │
│   ┌─────────────┐   │
│   │   BOX LID   │   │
│   ├─────────────┤   │
│   │  invitation │   │  descending
│   │  inside     │   │
│   └─────────────┘   │
│    wood table       │
│                     │
└─────────────────────┘
Centered, 60% viewport width on mobile
```

---

## Breakpoint Behavior Summary

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Envelope | 85vw | 420px fixed | 480px fixed |
| Portrait | 192px circle | 240px | 320px |
| Info cards | 1 column | 2 columns | 2×2 grid |
| Gallery | Full width | 80vw | 640px max |
| Typography scale | 0.85× | 1× | 1.1× |
| Cursor petals | Off | Off | On |
| Scene nav dots | Hidden < Scene 8 | Right rail | Right rail |

---

*Next document: [05 — Design System](./05-design-system.md)*
