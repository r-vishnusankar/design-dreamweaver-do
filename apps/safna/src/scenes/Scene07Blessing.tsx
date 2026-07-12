"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OPENING_QUOTE } from "@/lib/constants";
import { SCENE_ASSETS } from "@/lib/assets";
import { useSceneStore } from "@/store/sceneStore";
import { EASING } from "@/lib/motion";
import { SCENE_REGISTRY } from "@/lib/scenes";

export default function Scene07Blessing() {
  const advanceScene = useSceneStore((s) => s.advanceScene);

  useEffect(() => {
    const t = setTimeout(advanceScene, SCENE_REGISTRY[7].autoAdvance ?? 4000);
    return () => clearTimeout(t);
  }, [advanceScene]);

  return (
    <div className="fixed inset-0 z-50 bg-ivory flex items-center justify-center px-8 overflow-hidden">
      {SCENE_ASSETS.scene07.local && (
        <Image
          src={SCENE_ASSETS.scene07.src}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          aria-hidden
        />
      )}
      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: EASING.luxury }}
        className="font-heading text-2xl md:text-4xl font-light italic text-text-primary text-center max-w-2xl leading-relaxed relative z-10"
      >
        &ldquo;{OPENING_QUOTE}&rdquo;
      </motion.blockquote>
    </div>
  );
}
