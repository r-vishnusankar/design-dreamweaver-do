"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { WoodTable } from "@/components/cinematic/WoodTable";
import { Envelope } from "@/components/cinematic/Envelope";
import { InvitationCard } from "@/components/cinematic/InvitationCard";
import { EASING } from "@/lib/motion";
import { SCENE_REGISTRY } from "@/lib/scenes";

export default function Scene03SlideOut() {
  const advanceScene = useSceneStore((s) => s.advanceScene);

  useEffect(() => {
    const t = setTimeout(advanceScene, SCENE_REGISTRY[3].autoAdvance ?? 2000);
    return () => clearTimeout(t);
  }, [advanceScene]);

  return (
    <div className="fixed inset-0 z-50">
      <WoodTable>
        <div className="relative w-[min(90vw,480px)]">
          <Envelope state="empty" showSeal={false} className="opacity-60" />
          <motion.div
            initial={{ x: "-20%", opacity: 0, scale: 0.9 }}
            animate={{ x: "5%", opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: EASING.luxury }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] z-20"
          >
            <div className="bg-warm-white shadow-envelope rounded-sm border border-sand/60 paper-texture">
              <InvitationCard revealStage={1} compact />
            </div>
          </motion.div>
        </div>
      </WoodTable>
    </div>
  );
}
