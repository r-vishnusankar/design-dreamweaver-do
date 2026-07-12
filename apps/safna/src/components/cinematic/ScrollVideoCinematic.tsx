"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useLenis } from "@/components/layout/SmoothScroll";
import { CANVA_VIDEO } from "@/lib/constants";
import { useSceneStore } from "@/store/sceneStore";

const SCROLL_HEIGHT_VH = 380;

export function ScrollVideoCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioEnabled = useSceneStore((s) => s.audioEnabled);
  const audioMuted = useSceneStore((s) => s.audioMuted);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.2], [1, 1, 0]);

  const scrubVideo = useCallback((value: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    const clamped = Math.min(1, Math.max(0, value));
    setProgress(clamped);

    const targetTime = clamped * video.duration;
    if (Math.abs(video.currentTime - targetTime) > 0.03) {
      video.currentTime = targetTime;
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", scrubVideo);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video || !Number.isFinite(video.duration)) return;

      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
      scrubVideo(scrolled / scrollable);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ready, scrubVideo]);

  useEffect(() => {
    if (!lenis) return;
    const unsub = lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });
    return unsub;
  }, [lenis]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !audioEnabled || audioMuted;
  }, [audioEnabled, audioMuted]);

  return (
    <section
      ref={containerRef}
      id="cinematic"
      aria-label="Invitation cinematic"
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ivory">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            ref={videoRef}
            src={CANVA_VIDEO.src}
            className="h-full w-full max-w-[min(100%,28rem)] object-contain md:max-w-md"
            playsInline
            preload="auto"
            muted
            onLoadedData={() => {
              setReady(true);
              scrubVideo(0);
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory/30 via-transparent to-ivory/50" />

        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-4 px-6"
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-text-secondary/80">
            Scroll to open the invitation
          </p>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-gold/50"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1 bg-sand/40">
          <div
            className="h-full bg-gold/80 transition-[width] duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
