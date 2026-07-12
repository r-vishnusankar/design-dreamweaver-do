"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { FloatingPetals } from "./FloatingPetals";
import { GlowingParticles } from "./GlowingParticles";

type Phase = "bismillah" | "idle" | "playing" | "exit";

interface VideoOpeningProps {
  onOpenComplete: () => void;
}

const VIDEO_SRC = "/video/envelope-opening.mp4";
/** Zoom into the video so its own baked-in background is cropped away. Tune 1.0–1.6. */
const CROP_SCALE = 1.25;
/** Safety fallback if the ended event never fires (10s video + buffer). */
const MAX_PLAY_MS = 11500;

export function VideoOpening({ onOpenComplete }: VideoOpeningProps) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("bismillah");
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (phase !== "bismillah") return;
    const timer = setTimeout(() => setPhase("idle"), 2400);
    return () => clearTimeout(timer);
  }, [phase]);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setPhase("exit");
    setTimeout(onOpenComplete, 900);
  };

  useEffect(() => {
    if (phase !== "playing") return;
    const timer = setTimeout(finish, MAX_PLAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleTap = () => {
    if (phase !== "idle") return;
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(30);
    }
    setPhase("playing");
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // If playback is blocked, skip straight to the experience
        finish();
      });
    } else {
      finish();
    }
  };

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden paper-texture"
          style={{ background: "linear-gradient(170deg, #FAF7F0 0%, #F4EEE2 60%, #EFE7D8 100%)" }}
          role="button"
          tabIndex={phase === "idle" ? 0 : -1}
          onClick={handleTap}
          onKeyDown={(e) => {
            if (phase === "idle" && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleTap();
            }
          }}
          aria-label={t.opening.tap}
        >
          {/* Our background: floral corners + petals + particles */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-12 -left-12 h-56 w-56 rounded-full blur-2xl opacity-50"
              style={{ background: "radial-gradient(circle, rgba(233,185,182,0.5) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -top-10 -right-14 h-64 w-64 rounded-full blur-2xl opacity-50"
              style={{ background: "radial-gradient(circle, rgba(240,205,190,0.45) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, rgba(212,197,169,0.4) 0%, transparent 70%)" }}
            />
          </div>
          <FloatingPetals />
          <GlowingParticles />

          {/* Quote above */}
          <motion.p
            animate={{ opacity: phase === "idle" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-6 px-8 text-center font-accent text-lg md:text-xl italic text-text-primary/80 leading-relaxed max-w-md"
          >
            {t.opening.quote}
          </motion.p>

          {/* Video frame — cropped so the video's own background is cut away */}
          <motion.div
            animate={
              phase === "playing"
                ? { scale: 1.02, boxShadow: "0 30px 80px rgba(44,40,37,0.28)" }
                : { scale: 1, boxShadow: "0 26px 70px rgba(44,40,37,0.22)" }
            }
            transition={{ duration: 0.8 }}
            className="relative z-10 h-[min(64vh,560px)] max-w-[92vw] aspect-[3/4] rounded-sm overflow-hidden"
          >
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className="h-full w-full object-cover"
              style={{ transform: `scale(${CROP_SCALE})` }}
              playsInline
              muted
              preload="auto"
              onEnded={finish}
            />
            {/* Soft edge blend into our page */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 40px 18px rgba(250,247,240,0.55)",
              }}
            />
            {/* Thin gold frame to match the invitation styling */}
            <div className="pointer-events-none absolute inset-2 border border-gold/40 rounded-sm" />
          </motion.div>

          {/* Tap hint below */}
          {phase === "idle" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 mt-6 font-body text-xs uppercase tracking-[0.3em] text-gold"
            >
              {t.opening.tap}
            </motion.p>
          )}

          {/* Bismillah overlay */}
          <AnimatePresence>
            {phase === "bismillah" && (
              <motion.div
                key="bismillah"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-void/95"
              >
                <p className="font-heading text-2xl md:text-3xl text-gold/90 mb-3" dir="rtl">
                  {t.opening.bismillah}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-muted/70">
                  {t.opening.bismillahTrans}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
