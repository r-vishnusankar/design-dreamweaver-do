"use client";

import { translations, type Locale } from "./translations";

/**
 * English-only UI. Malayalam strings remain in translations.ts for possible restore.
 */
export function useTranslation() {
  return { t: translations.en, locale: "en" as Locale };
}

export function getTranslation(locale: Locale) {
  return translations[locale];
}
