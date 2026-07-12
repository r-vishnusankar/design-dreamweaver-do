# Safna Latheef — From Her Heart (Cinematic Edition)

An interactive cinematic wedding invitation — open the envelope, unfold the story.

**Companion site:** [Jithin's Invitation](https://jithin-wedding-invitation.vercel.app)

## Experience

18 directed + scroll scenes: Bismillah → Envelope ritual → Bride intro → Love journey → Reception → Keepsake box close.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Debug: `?scene=9` jumps to a scene · `Skip intro` on envelope screen

## Customize

| Item | Location |
|------|----------|
| Wedding details | `src/lib/constants.ts` |
| Scene flow | `src/lib/scenes.ts` |
| Bride portrait | `src/scenes/Scene06BrideIntro.tsx` |
| Maps URL | `constants.ts` → `venue.mapsUrl` |
| Music | `public/audio/ambient-piano.mp3` |

## Docs

Creative direction: `/docs/cinematic/`
