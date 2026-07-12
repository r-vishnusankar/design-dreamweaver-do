export type SceneId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

export type SceneMode = "directed" | "scroll";

export interface SceneMeta {
  id: SceneId;
  mode: SceneMode;
  label: string;
  autoAdvance: number | null;
}

export interface Blessing {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}
