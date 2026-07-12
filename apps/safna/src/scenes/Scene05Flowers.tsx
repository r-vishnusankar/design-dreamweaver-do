"use client";

import { motion } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { InvitationCard } from "@/components/cinematic/InvitationCard";
import { FlowerParticles } from "@/components/cinematic/FlowerParticles";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/hooks/useAudio";

export default function Scene05Flowers() {
  const advanceScene = useSceneStore((s) => s.advanceScene);
  const { startMusic } = useAudio();

  const handleContinue = (withMusic: boolean) => {
    if (withMusic) startMusic();
    advanceScene();
  };

  return (
    <div className="fixed inset-0 z-50 bg-ivory flex items-center justify-center px-6">
      <div className="relative w-full max-w-md">
        <FlowerParticles count={8} />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-warm-white shadow-envelope rounded-sm border border-sand/70 paper-texture"
        >
          <InvitationCard revealStage={3} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 text-center space-y-4"
        >
          <p className="font-body text-sm text-text-muted">Would you like to hear the music?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => handleContinue(true)} size="sm">
              Yes, gently
            </Button>
            <Button variant="outline" onClick={() => handleContinue(false)} size="sm">
              Continue in silence
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
