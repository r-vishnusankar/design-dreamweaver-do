"use client";

import { useEffect } from "react";
import { useSceneStore } from "@/store/sceneStore";
import { WoodTable } from "@/components/cinematic/WoodTable";
import { Envelope } from "@/components/cinematic/Envelope";
import { WaxSeal } from "@/components/cinematic/WaxSeal";
import { SCENE_REGISTRY } from "@/lib/scenes";

export default function Scene02SealBreak() {
  const advanceScene = useSceneStore((s) => s.advanceScene);

  useEffect(() => {
    const t = setTimeout(advanceScene, SCENE_REGISTRY[2].autoAdvance ?? 1200);
    return () => clearTimeout(t);
  }, [advanceScene]);

  return (
    <div className="fixed inset-0 z-50">
      <WoodTable>
        <div className="relative">
          <Envelope state="open" showSeal={false} />
          <WaxSeal breaking className="pointer-events-none" />
        </div>
      </WoodTable>
    </div>
  );
}
