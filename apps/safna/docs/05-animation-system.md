# Animation System

## Principles

- **Ease:** `[0.25, 0.1, 0.25, 1]` — no bounce
- **Duration:** 0.8–1.5s for reveals; 8–15s for ambient
- **Trigger:** Scroll-in via `useInView` (once)
- **Respect:** `prefers-reduced-motion` disables animations

## Animation Catalog

| Name | Component | Trigger | Duration |
|------|-----------|---------|----------|
| Opening fade | OpeningExperience | Mount | 1.5s |
| Paper unfold | OpeningExperience | Phase change | 1.8s |
| FadeIn | motion.tsx | Scroll in view | 0.8s |
| Blur reveal | FadeIn blur prop | Scroll in view | 0.8s |
| Letter reveal | LetterReveal | Scroll in view | 0.4s/char |
| Float | Hero portrait | Infinite | 12s |
| Petal fall | JasminePetals | Infinite | 12–20s |
| Cursor petal | CursorPetals | Mouse move | 60 frames |
| Flower bloom | BlessingsSection | Form submit | 2s |
| Seal bloom | WeddingSeal | Long press 1.5s | 1.2s |
| Geometric rotate | GeometricPattern | Infinite | 15–20s |
| Countdown tick | CountdownSection | 1s interval | 0.4s |

## Lenis Configuration

```typescript
duration: 1.4
easing: exponential decay
smoothWheel: true
```

## Framer Motion Variants (Standard)

```typescript
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
```
