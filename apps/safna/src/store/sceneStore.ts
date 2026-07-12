"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SceneId, SceneMode } from "@/types/scene";
import { SCENE_REGISTRY } from "@/lib/scenes";

interface SceneStore {
  currentScene: SceneId;
  mode: SceneMode;
  introCompleted: boolean;
  audioEnabled: boolean;
  audioMuted: boolean;
  scrollUnlocked: boolean;
  _hasHydrated: boolean;

  advanceScene: () => void;
  jumpToScene: (id: SceneId) => void;
  skipIntro: () => void;
  completeIntro: () => void;
  enableAudio: () => void;
  toggleMute: () => void;
  unlockScroll: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useSceneStore = create<SceneStore>()(
  persist(
    (set, get) => ({
      currentScene: 0,
      mode: "directed",
      introCompleted: false,
      audioEnabled: false,
      audioMuted: true,
      scrollUnlocked: false,
      _hasHydrated: false,

      advanceScene: () => {
        const current = get().currentScene;
        if (current >= 17) return;
        const next = (current + 1) as SceneId;
        const meta = SCENE_REGISTRY[next];
        set({
          currentScene: next,
          mode: meta.mode,
        });
      },

      jumpToScene: (id) => {
        const meta = SCENE_REGISTRY[id];
        set({
          currentScene: id,
          mode: meta.mode,
          scrollUnlocked: id >= 8,
          introCompleted: id >= 8 ? true : get().introCompleted,
        });
      },

      skipIntro: () => {
        get().unlockScroll();
      },

      completeIntro: () => set({ introCompleted: true }),

      enableAudio: () => set({ audioEnabled: true, audioMuted: false }),

      toggleMute: () => set((s) => ({ audioMuted: !s.audioMuted })),

      unlockScroll: () => {
        set({ scrollUnlocked: true, mode: "scroll", currentScene: 9, introCompleted: true });
      },

      setHasHydrated: (value) => set({ _hasHydrated: value }),
    }),
    {
      name: "safna-scene-store",
      partialize: (s) => ({ introCompleted: s.introCompleted }),
      onRehydrateStorage: () => (state) => {
        if (state?.introCompleted) {
          state.scrollUnlocked = true;
          state.mode = "scroll";
          state.currentScene = 9;
        }
        state?.setHasHydrated(true);
      },
    }
  )
);
