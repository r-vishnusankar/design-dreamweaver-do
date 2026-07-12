# Revert guide — v2 cinematic update

This update adds language picker, card-unfold opening, typical Malayalam copy, and Rahna lantern tribute.

## Quick revert (no git)

Edit `src/lib/features.ts`:

```ts
export const FEATURES = {
  useLegacyOpening: true,      // restores simple envelope opening
  enableLanguagePicker: false, // skips EN/ML picker
} as const;
```

## Full revert with git

If you committed before v2:

```bash
git log --oneline -5
git revert <commit-hash>   # safest — keeps history
# or
git checkout <pre-v2-commit> -- .
```

## What v2 changed

| Area | Files |
|------|--------|
| Feature flags | `src/lib/features.ts` |
| Translations | `src/lib/i18n/translations.ts` |
| Language | `LanguagePicker.tsx`, `LanguageToggle.tsx` |
| Opening | `CardUnfoldOpening.tsx`, `TapToOpenOpening.tsx` |
| Legacy opening | `TapToOpenOpening.legacy.impl.tsx` |
| Store | `src/store/experienceStore.ts` |
| Sections | `src/components/experience/sections/*` |

## Clear saved language (test first visit)

In browser DevTools → Application → Local Storage → delete `safna-experience-v2`
