"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { EASING } from "@/lib/motion";
import { SCENE_REGISTRY } from "@/lib/scenes";

export default function Scene08Transition() {
  const unlockScroll = useSceneStore((s) => s.unlockScroll);

  useEffect(() => {
    const t = setTimeout(unlockScroll, SCENE_REGISTRY[8].autoAdvance ?? 2500);
    return () => clearTimeout(t);
  }, [unlockScroll]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1, ease: EASING.exit }}
      className="fixed inset-0 z-50 bg-ivory flex items-center justify-center pointer-events-none"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-body text-xs uppercase tracking-[0.4em] text-gold"
      >
        The story unfolds
      </motion.p>
    </motion.div>
  );
}
