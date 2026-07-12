# Accessibility Checklist

## Structure
- [x] Semantic HTML (`section`, `main`, `h1`–`h2` hierarchy)
- [x] `aria-labelledby` on chapter sections
- [x] Form labels associated with inputs
- [x] Button `aria-label` on icon-only controls

## Motion
- [x] `prefers-reduced-motion` CSS override
- [x] No autoplay audio (user-initiated)
- [x] Animations use `useInView` once (no repeated distraction)

## Visual
- [x] Color contrast: text-primary on ivory (AAA)
- [x] Focus visible rings on interactive elements
- [x] Text sizing responsive (min 14px body)

## Keyboard
- [x] All buttons/links keyboard accessible
- [x] Gallery lightbox close button
- [ ] Trap focus in gallery modal (future enhancement)

## Screen Readers
- [x] `aria-label` on decorative petal containers (`aria-hidden`)
- [x] LetterReveal preserves full text in `aria-label`
- [x] Wedding seal describes long-press interaction

## Internationalization
- [x] Arabic greeting with proper Unicode
- [x] Islamic date included
- [ ] Malayalam family names (verify rendering)

## Testing Targets
- axe DevTools: 0 violations
- VoiceOver/NVDA: navigate all chapters
- Keyboard-only: complete blessings form
