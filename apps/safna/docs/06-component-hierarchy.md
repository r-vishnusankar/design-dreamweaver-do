# Component Hierarchy

```
InvitationExperience
├── SmoothScroll (Lenis)
├── NightModeProvider
├── SoundExperience
├── OpeningExperience
├── JasminePetals
├── CursorPetals
└── main
    ├── HeroSection (Ch.1 Welcome)
    ├── LetterFromSafna (Ch.2)
    ├── HerJourney (Ch.3)
    ├── TheirStory (Ch.4)
    ├── ReceptionDetails (Ch.5)
    ├── VenueSection (Ch.6)
    ├── FamilySection (Ch.7)
    ├── GallerySection (Ch.8)
    ├── CountdownSection (Ch.9)
    ├── BlessingsSection (Ch.10)
    └── ThankYouSection (Ch.11)
        └── WeddingSeal

Shared UI
├── Button (shadcn-style)
├── FadeIn / LetterReveal / ChapterWrapper
└── Effects
    ├── GeometricPattern
    └── JasminePetals
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/blessings/route.ts
├── components/
│   ├── InvitationExperience.tsx
│   ├── chapters/          # 11 story chapters
│   ├── effects/           # Petals, sound, night mode, seal
│   ├── layout/            # SmoothScroll
│   ├── opening/           # Opening animation
│   └── ui/                # Button, motion primitives
└── lib/
    ├── constants.ts       # All wedding content
    └── utils.ts
```
