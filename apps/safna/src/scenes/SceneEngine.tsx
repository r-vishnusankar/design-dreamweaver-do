"use client";

import { useEffect, useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSceneStore } from "@/store/sceneStore";
import { SCENE_REGISTRY, SCROLL_SCENE_IDS } from "@/lib/scenes";
import type { SceneId } from "@/types/scene";
import { SmoothScroll, useLenis } from "@/components/layout/SmoothScroll";
import { CursorPetals } from "@/components/cinematic/CursorPetals";
import { ScrollVideoCinematic } from "@/components/cinematic/ScrollVideoCinematic";
import { VideoExperienceGate } from "@/components/cinematic/VideoExperienceGate";
import { useAudio } from "@/hooks/useAudio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Scene09LoveJourney = dynamic(() => import("@/scenes/Scene09LoveJourney"));
const Scene10Families = dynamic(() => import("@/scenes/Scene10Families"));
const Scene11Reception = dynamic(() => import("@/scenes/Scene11Reception"));
const Scene12Countdown = dynamic(() => import("@/scenes/Scene12Countdown"));
const Scene13Venue = dynamic(() => import("@/scenes/Scene13Venue"));
const Scene14Gallery = dynamic(() => import("@/scenes/Scene14Gallery"));
const Scene15Blessings = dynamic(() => import("@/scenes/Scene15Blessings"));
const Scene16Keepsake = dynamic(() => import("@/scenes/Scene16Keepsake"));
const Scene17Final = dynamic(() => import("@/scenes/Scene17Final"));

function getScrollAnchor(id: SceneId): string {
  const anchors: Partial<Record<SceneId, string>> = {
    9: "journey",
    10: "families",
    11: "reception",
    12: "countdown",
    13: "venue",
    14: "gallery",
    15: "blessings",
    16: "keepsake",
    17: "final",
  };
  return anchors[id] ?? "journey";
}

function SceneNav() {
  const lenis = useLenis();

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: SceneId) => {
    event.preventDefault();
    const target = `#${getScrollAnchor(id)}`;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.05, offset: 0 });
      return;
    }
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Scene progress"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
    >
      {SCROLL_SCENE_IDS.map((id) => (
        <a
          key={id}
          href={`#${getScrollAnchor(id)}`}
          onClick={(event) => handleAnchorClick(event, id)}
          className="w-2 h-2 rounded-full bg-sand hover:bg-gold transition-colors"
          aria-label={SCENE_REGISTRY[id].label}
        />
      ))}
    </nav>
  );
}

function SkipToAnchor({ anchor }: { anchor: string | null }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!anchor) return;
    const target = `#${anchor}`;
    const scrollToTarget = () => {
      if (lenis) {
        lenis.scrollTo(target, { duration: 0.8, offset: 0 });
        return;
      }
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    };

    const timer = window.setTimeout(scrollToTarget, 150);
    return () => window.clearTimeout(timer);
  }, [anchor, lenis]);

  return null;
}

function AudioToggle() {
  const { audioEnabled, audioMuted, toggleMute } = useSceneStore();
  const { syncMute } = useAudio();

  useEffect(() => {
    syncMute();
  }, [audioMuted, syncMute]);

  if (!audioEnabled) return null;

  return (
    <button
      type="button"
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-warm-white/90 backdrop-blur border border-sand/60 shadow-soft hover:shadow-lifted transition-all"
      aria-label={audioMuted ? "Unmute music" : "Mute music"}
    >
      {audioMuted ? <VolumeX className="w-4 h-4 text-text-secondary" /> : <Volume2 className="w-4 h-4 text-gold" />}
    </button>
  );
}

export function SceneEngine() {
  const { scrollUnlocked, introCompleted, unlockScroll, enableAudio, _hasHydrated } = useSceneStore();
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [skipAnchor, setSkipAnchor] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!_hasHydrated) return;
    if (introCompleted && !scrollUnlocked) {
      unlockScroll();
    }
  }, [_hasHydrated, introCompleted, scrollUnlocked, unlockScroll]);

  useEffect(() => {
    if (reducedMotion && !scrollUnlocked) {
      unlockScroll();
    }
  }, [reducedMotion, scrollUnlocked, unlockScroll]);

  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams(window.location.search);
    const scene = params.get("scene");
    if (scene) {
      const id = parseInt(scene, 10) as SceneId;
      if (id >= 9 && id <= 17) {
        unlockScroll();
        setSkipAnchor(getScrollAnchor(id));
      }
    }
  }, [mounted, unlockScroll]);

  const handleBegin = () => {
    enableAudio();
    unlockScroll();
  };

  const handleSkip = () => {
    setSkipAnchor("journey");
    unlockScroll();
  };

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    const body = document.body;

    if (!scrollUnlocked) {
      html.classList.add("directed-act");
      body.style.overflow = "hidden";
    } else {
      html.classList.remove("directed-act");
      body.style.overflow = "";
    }

    return () => {
      html.classList.remove("directed-act");
      body.style.overflow = "";
    };
  }, [mounted, scrollUnlocked]);

  const showGate = mounted && _hasHydrated && !scrollUnlocked;
  const showScroll = mounted && _hasHydrated && scrollUnlocked;

  if (!mounted || !_hasHydrated) {
    return <div className="min-h-screen bg-ivory" aria-hidden />;
  }

  return (
    <>
      <AnimatePresence>
        {showGate && <VideoExperienceGate key="gate" onBegin={handleBegin} onSkip={handleSkip} />}
      </AnimatePresence>

      {showScroll && (
        <SmoothScroll>
          <SkipToAnchor anchor={skipAnchor} />
          <CursorPetals />
          <SceneNav />
          <AudioToggle />
          <main>
            <ScrollVideoCinematic />
            <Scene09LoveJourney />
            <Scene10Families />
            <Scene11Reception />
            <Scene12Countdown />
            <Scene13Venue />
            <Scene14Gallery />
            <Scene15Blessings />
            <Scene16Keepsake />
            <Scene17Final />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
