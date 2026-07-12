/**
 * Scene image assets — local files in /public/assets/scenes when available,
 * Unsplash fallbacks for missing or empty generated assets.
 */

const U = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format`;

/** Local paths under /public/assets/scenes */
export const LOCAL_SCENE_PATHS = {
  scene01: "/assets/scenes/scene-01-envelope-closed.png",
  scene03: "/assets/scenes/scene-03-envelope-open.png",
  scene04: "/assets/scenes/scene-04-invitation-open-full.png",
  scene05: "/assets/scenes/scene-05-names-flowers.png",
  scene06: "/assets/scenes/scene-06-bride-portrait.png",
  scene07: "/assets/scenes/scene-07-verse-calligraphy.png",
  scene08: "/assets/scenes/scene-08-story-timeline-bg.png",
  scene09: "/assets/scenes/scene-09-kerala-lantern-path.png",
  scene10: "/assets/scenes/scene-10-reception-card.png",
  scene11: "/assets/scenes/scene-11-countdown-night-sky.png",
} as const;

/** Which local scene PNGs exist and are non-empty in public/assets/scenes */
export const LOCAL_SCENE_INVENTORY: Record<keyof typeof LOCAL_SCENE_PATHS, boolean> = {
  scene01: true,
  scene03: true,
  scene04: true,
  scene05: true,
  scene06: false,
  scene07: true,
  scene08: false,
  scene09: false,
  scene10: false,
  scene11: false,
};

type SceneAsset = { src: string; alt: string; local: boolean };

function sceneAsset(
  key: keyof typeof LOCAL_SCENE_PATHS,
  fallback: string,
  alt: string
): SceneAsset {
  const local = LOCAL_SCENE_INVENTORY[key];
  return {
    src: local ? LOCAL_SCENE_PATHS[key] : fallback,
    alt,
    local,
  };
}

export const SCENE_ASSETS = {
  scene01: sceneAsset(
    "scene01",
    U("photo-1519225421980-715cb0215aed", 1200),
    "Luxury envelope on wood table with wax seal"
  ),
  scene02: {
    src: U("photo-1519225421980-715cb0215aed", 1200),
    alt: "Hands opening wedding invitation",
    local: false,
  },
  scene03: sceneAsset(
    "scene03",
    U("photo-1519225421980-715cb0215aed", 1200),
    "Envelope opening revealing invitation"
  ),
  scene04: sceneAsset(
    "scene04",
    U("photo-1519741497674-611481863552", 1200),
    "Tri-fold wedding invitation"
  ),
  scene05: sceneAsset(
    "scene05",
    U("photo-1522673607200-164d1b6ce486", 1200),
    "Names among jasmine flowers"
  ),
  scene06: sceneAsset(
    "scene06",
    U("photo-1534528741775-53994a69daeb", 800),
    "Meera Malhotra — bride portrait"
  ),
  scene07: sceneAsset(
    "scene07",
    U("photo-1456513080510-7bf3a84b82f8", 1600),
    "Gold Arabic calligraphy blessing"
  ),
  scene08: sceneAsset(
    "scene08",
    U("photo-1519167758481-83f29da48271", 1920),
    "Parchment story background"
  ),
  scene09: sceneAsset(
    "scene09",
    U("photo-1600596542815-ffad4c1539a9", 1920),
    "Kerala home lantern path at dusk"
  ),
  scene10: sceneAsset(
    "scene10",
    U("photo-1519741497674-611481863552", 1200),
    "Reception details card"
  ),
  scene11: sceneAsset(
    "scene11",
    U("photo-1419242902214-272b3f66ee7a", 1920),
    "Crescent moon night sky"
  ),
  scene12: {
    src: U("photo-1519167758481-83f29da48271", 1920),
    alt: "Everest Convention Centre venue",
    local: false,
  },
  scene14: {
    src: U("photo-1456513080510-7bf3a84b82f8", 1600),
    alt: "Guest blessings leather book",
    local: false,
  },
  scene16: {
    src: U("photo-1544378730-b048d76fbf12", 1200),
    alt: "Keepsake box open",
    local: false,
  },
  scene17: {
    src: U("photo-1513519245088-0e12902e35ca", 1200),
    alt: "Keepsake box closed",
    local: false,
  },
} as const;

export const GALLERY_ASSETS = [
  { src: U("photo-1519741497674-611481863552", 800), alt: "Wedding moment", caption: "Moments of grace" },
  { src: U("photo-1465495970607-00522e7078ea", 800), alt: "Celebration", caption: "Blessed traditions" },
  { src: U("photo-1522673607200-164d1b6ce486", 800), alt: "Floral elegance", caption: "Natural beauty" },
  { src: U("photo-1511285560929-80b456fea0bc", 800), alt: "Together", caption: "Together forever" },
  { src: U("photo-1606216794074-735e91aa2c92", 800), alt: "Sacred promise", caption: "A sacred promise" },
] as const;

/** Summary for reporting — scene key → exists locally */
export function getSceneAssetStatus() {
  const local = Object.entries(LOCAL_SCENE_INVENTORY)
    .filter(([, exists]) => exists)
    .map(([key]) => key);
  const missing = Object.entries(LOCAL_SCENE_INVENTORY)
    .filter(([, exists]) => !exists)
    .map(([key]) => key);
  return { local, missing, localCount: local.length, missingCount: missing.length };
}
