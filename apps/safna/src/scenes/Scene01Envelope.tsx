"use client";

import { motion } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { WoodTable } from "@/components/cinematic/WoodTable";
import { Envelope } from "@/components/cinematic/Envelope";
import { useAudio } from "@/hooks/useAudio";

export default function Scene01Envelope() {
  const advanceScene = useSceneStore((s) => s.advanceScene);
  const skipIntro = useSceneStore((s) => s.skipIntro);
  const { playSfx } = useAudio();

  const handleSealClick = () => {
    playSfx("/audio/wax-crack.mp3", 0.2);
    advanceScene();
  };

  return (
    <div className="fixed inset-0 z-50">
      <WoodTable>
        <button
          type="button"
          onClick={skipIntro}
          className="absolute top-6 right-6 z-30 font-body text-xs uppercase tracking-widest text-warm-white/50 hover:text-warm-white/80 transition-colors"
        >
          Skip intro
        </button>

        <div className="relative z-10 flex flex-col items-center gap-10 px-6">
          <Envelope state="closed" showSeal onSealClick={handleSealClick} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="font-body text-xs uppercase tracking-[0.3em] text-warm-white/60"
          >
            Tap the seal to open
          </motion.p>
        </div>
      </WoodTable>
    </div>
  );
}
