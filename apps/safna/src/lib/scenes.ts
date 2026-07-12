import type { SceneId, SceneMeta } from "@/types/scene";

export const SCENE_REGISTRY: Record<SceneId, SceneMeta> = {
  0: { id: 0, mode: "directed", label: "Bismillah", autoAdvance: 6000 },
  1: { id: 1, mode: "directed", label: "Envelope", autoAdvance: null },
  2: { id: 2, mode: "directed", label: "Seal Breaks", autoAdvance: 1200 },
  3: { id: 3, mode: "directed", label: "Slide Out", autoAdvance: 2000 },
  4: { id: 4, mode: "directed", label: "Unfold", autoAdvance: 5500 },
  5: { id: 5, mode: "directed", label: "Flowers", autoAdvance: null },
  6: { id: 6, mode: "directed", label: "Bride", autoAdvance: null },
  7: { id: 7, mode: "directed", label: "Blessing", autoAdvance: 4000 },
  8: { id: 8, mode: "directed", label: "Transition", autoAdvance: 2500 },
  9: { id: 9, mode: "scroll", label: "Journey", autoAdvance: null },
  10: { id: 10, mode: "scroll", label: "Families", autoAdvance: null },
  11: { id: 11, mode: "scroll", label: "Reception", autoAdvance: null },
  12: { id: 12, mode: "scroll", label: "Countdown", autoAdvance: null },
  13: { id: 13, mode: "scroll", label: "Venue", autoAdvance: null },
  14: { id: 14, mode: "scroll", label: "Gallery", autoAdvance: null },
  15: { id: 15, mode: "scroll", label: "Blessings", autoAdvance: null },
  16: { id: 16, mode: "scroll", label: "Keepsake", autoAdvance: null },
  17: { id: 17, mode: "scroll", label: "Final", autoAdvance: null },
};

export const SCROLL_SCENE_IDS = ([9, 10, 11, 12, 13, 14, 15, 16, 17] as const) satisfies readonly SceneId[];

export const DIRECTED_SCENE_IDS = ([0, 1, 2, 3, 4, 5, 6, 7, 8] as const) satisfies readonly SceneId[];
