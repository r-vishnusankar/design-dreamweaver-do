# 07 — Folder Structure

Production codebase architecture for the cinematic rebuild. Modular, scalable, animation-friendly.

---

## Root Structure

```
safna-wedding-invitation/
├── public/
│   ├── audio/
│   │   ├── ambient-room.mp3
│   │   ├── piano-ambient.mp3
│   │   ├── wax-crack.mp3
│   │   ├── paper-slide.mp3
│   │   ├── paper-crease.mp3
│   │   └── box-close.mp3
│   ├── textures/
│   │   ├── paper-fiber.webp
│   │   ├── wood-teak.webp
│   │   └── film-grain.webp
│   ├── images/
│   │   ├── envelope-closed.webp
│   │   ├── wax-seal.webp
│   │   ├── portrait-safna.webp
│   │   └── venue-everest.webp
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── providers.tsx
│   │   └── api/
│   │       └── blessings/
│   │           └── route.ts
│   │
│   ├── scenes/                    # Scene components (1 file per scene)
│   │   ├── SceneEngine.tsx        # Orchestrator
│   │   ├── Scene00Bismillah.tsx
│   │   ├── Scene01Envelope.tsx
│   │   ├── Scene02SealBreak.tsx
│   │   ├── Scene03SlideOut.tsx
│   │   ├── Scene04Unfold.tsx
│   │   ├── Scene05Flowers.tsx
│   │   ├── Scene06BrideIntro.tsx
│   │   ├── Scene07Blessing.tsx
│   │   ├── Scene08Transition.tsx
│   │   ├── Scene09LoveJourney.tsx
│   │   ├── Scene10Families.tsx
│   │   ├── Scene11Reception.tsx
│   │   ├── Scene12Countdown.tsx
│   │   ├── Scene13Venue.tsx
│   │   ├── Scene14Gallery.tsx
│   │   ├── Scene15Blessings.tsx
│   │   ├── Scene16Keepsake.tsx
│   │   └── Scene17Final.tsx
│   │
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   └── divider.tsx
│   │   │
│   │   ├── motion/                # Reusable animation components
│   │   │   ├── FadeReveal.tsx
│   │   │   ├── LetterReveal.tsx
│   │   │   ├── PaperFold.tsx
│   │   │   ├── SceneTransition.tsx
│   │   │   ├── ParallaxLayer.tsx
│   │   │   ├── BloomFlower.tsx
│   │   │   ├── PageTurn.tsx
│   │   │   └── CountdownRing.tsx
│   │   │
│   │   ├── cinematic/             # Composite visual elements
│   │   │   ├── Envelope.tsx
│   │   │   ├── WaxSeal.tsx
│   │   │   ├── InvitationCard.tsx
│   │   │   ├── KeepsakeBox.tsx
│   │   │   ├── WoodTable.tsx
│   │   │   ├── FlowerParticle.tsx
│   │   │   └── CursorPetals.tsx
│   │   │
│   │   ├── cards/                 # Content cards
│   │   │   ├── InfoCard.tsx
│   │   │   ├── FamilyCard.tsx
│   │   │   └── BlessingCard.tsx
│   │   │
│   │   └── layout/
│   │       ├── SmoothScroll.tsx
│   │       ├── SceneNav.tsx
│   │       ├── AudioController.tsx
│   │       └── SkipIntro.tsx
│   │
│   ├── hooks/
│   │   ├── useSceneEngine.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useAudio.ts
│   │   ├── useCountdown.ts
│   │   └── useNightMode.ts
│   │
│   ├── store/
│   │   └── sceneStore.ts          # Zustand
│   │
│   ├── lib/
│   │   ├── constants.ts           # Wedding content
│   │   ├── scenes.ts              # Scene metadata registry
│   │   ├── motion.ts              # Easing, duration tokens
│   │   ├── utils.ts               # cn(), formatters
│   │   ├── validations.ts         # Zod schemas
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── blessings.ts
│   │
│   └── types/
│       ├── scene.ts
│       └── blessing.ts
│
├── docs/
│   └── cinematic/                 # This creative package
│
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── components.json                # shadcn config
├── prettier.config.js
└── package.json
```

---

## Module Boundaries

| Module | Responsibility | Depends On |
|--------|---------------|------------|
| `scenes/` | Scene-specific layout, copy, choreography | motion/, cinematic/, store |
| `components/motion/` | Reusable animation primitives | lib/motion |
| `components/cinematic/` | Visual assets (envelope, box) | motion/ |
| `components/cards/` | Data display | ui/ |
| `store/` | Scene state, audio state, visit flags | types/ |
| `hooks/` | Side effects, media queries | store/ |
| `lib/` | Pure functions, constants | nothing |

**Rule:** Scenes never import from other scenes. Shared logic goes to `hooks/` or `components/`.

---

## Scene Registry (`lib/scenes.ts`)

```typescript
export const SCENE_REGISTRY = {
  0:  { id: 0,  mode: 'directed', component: 'Scene00Bismillah',  autoAdvance: 6000 },
  1:  { id: 1,  mode: 'directed', component: 'Scene01Envelope',   autoAdvance: null },
  2:  { id: 2,  mode: 'directed', component: 'Scene02SealBreak',  autoAdvance: 1200 },
  // ...
  8:  { id: 8,  mode: 'directed', component: 'Scene08Transition', autoAdvance: 2000 },
  9:  { id: 9,  mode: 'scroll',   component: 'Scene09LoveJourney', autoAdvance: null },
  // ...
  17: { id: 17, mode: 'scroll',   component: 'Scene17Final',      autoAdvance: 4000 },
} as const;
```

---

## Code Splitting Strategy

```typescript
// SceneEngine.tsx
const Scene04Unfold = dynamic(() => import('./Scene04Unfold'), { ssr: false });
const Scene14Gallery = dynamic(() => import('./Scene14Gallery'));
// Scenes 0-8: eager load (first paint critical path)
// Scenes 9-17: lazy load after Scene 8 transition
```

---

## Environment Variables

```env
# .env.local.example
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_GROOM_SITE_URL=https://jithin-wedding-invitation.vercel.app
```

---

## shadcn/ui Configuration

```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "stone",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Scene files | `Scene{NN}{Name}.tsx` | `Scene04Unfold.tsx` |
| Motion components | PascalCase verb | `FadeReveal.tsx` |
| Hooks | `use{Name}.ts` | `useSceneEngine.ts` |
| Constants | SCREAMING_SNAKE | `WEDDING_DATE` |
| CSS variables | `--color-{name}` | `--color-gold` |
| Assets | kebab-case | `wax-seal.webp` |

---

*Next document: [08 — Component Tree](./08-component-tree.md)*
