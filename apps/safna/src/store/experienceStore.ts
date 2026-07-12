"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ExperiencePhase = "opening" | "experience";

interface ExperienceStore {
  phase: ExperiencePhase;
  audioMuted: boolean;
  _hasHydrated: boolean;
  setPhase: (phase: ExperiencePhase) => void;
  toggleMute: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useExperienceStore = create<ExperienceStore>()(
  persist(
    (set) => ({
      phase: "opening",
      audioMuted: true,
      _hasHydrated: false,
      setPhase: (phase) => set({ phase }),
      toggleMute: () => set((s) => ({ audioMuted: !s.audioMuted })),
      setHasHydrated: (value) => set({ _hasHydrated: value }),
    }),
    {
      name: "safna-experience-v3",
      partialize: () => ({}),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          useExperienceStore.getState().setHasHydrated(true);
          return;
        }
        (state ?? useExperienceStore.getState()).setHasHydrated(true);
      },
    }
  )
);
