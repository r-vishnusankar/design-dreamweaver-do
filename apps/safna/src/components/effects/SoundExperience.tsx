"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SoundExperience({
  onBegin,
  hasStarted,
}: {
  onBegin: () => void;
  hasStarted: boolean;
}) {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  }, [muted]);

  const handleBegin = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient-piano.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    audioRef.current.muted = false;
    audioRef.current.play().catch(() => {});
    setMuted(false);
    onBegin();
  };

  return (
    <>
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center px-6"
            >
              <p className="font-accent text-3xl md:text-4xl text-gold mb-6">
                From Her Heart
              </p>
              <p className="font-body text-text-secondary text-sm tracking-wide mb-10 max-w-sm mx-auto">
                An invitation from Arjun & Meera
              </p>
              <Button
                onClick={handleBegin}
                size="lg"
                className="font-body tracking-[0.2em] uppercase text-xs"
              >
                Begin the Experience
              </Button>
              <p className="font-body text-text-muted text-xs mt-6">
                Soft piano · Ambient strings
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasStarted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-warm-white/80 backdrop-blur-sm border border-sand/60 shadow-sm hover:bg-champagne transition-colors"
          aria-label={muted ? "Unmute music" : "Mute music"}
        >
          {muted ? (
            <VolumeX className="w-4 h-4 text-text-secondary" />
          ) : (
            <Volume2 className="w-4 h-4 text-gold" />
          )}
        </motion.button>
      )}
    </>
  );
}
