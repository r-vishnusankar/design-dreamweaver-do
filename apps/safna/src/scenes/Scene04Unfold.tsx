"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { InvitationCard } from "@/components/cinematic/InvitationCard";
import { EASING } from "@/lib/motion";
import { SCENE_REGISTRY } from "@/lib/scenes";

export default function Scene04Unfold() {
  const advanceScene = useSceneStore((s) => s.advanceScene);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1500),
      setTimeout(() => setStage(2), 3000),
      setTimeout(() => setStage(3), 4500),
      setTimeout(advanceScene, SCENE_REGISTRY[4].autoAdvance ?? 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [advanceScene]);

  return (
    <div className="fixed inset-0 z-50 bg-ivory flex items-center justify-center px-6">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: EASING.luxury }}
        className="w-full max-w-md"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ rotateY: -20, opacity: 0.5 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: EASING.fold }}
            className="bg-warm-white shadow-envelope rounded-sm border border-sand/70 paper-texture overflow-hidden"
          >
            <InvitationCard revealStage={stage as 0 | 1 | 2 | 3} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
