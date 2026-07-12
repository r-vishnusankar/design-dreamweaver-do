/**
 * Feature flags — flip these to revert parts of the v2 update without losing code.
 * Set `useLegacyOpening: true` to restore the simple envelope opening.
 */
export const FEATURES = {
  useLegacyOpening: false,
  /** TEMPORARY: video-based opening. Set false to restore the CSS gate-fold doors. */
  useVideoOpening: false,
  enableLanguagePicker: false,
  /** Standalone dua section before the closing card. Off so the finale fills one screen. */
  enableDuaSection: false,
} as const;
