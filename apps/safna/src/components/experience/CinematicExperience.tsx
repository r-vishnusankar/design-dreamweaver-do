"use client";

import { useCallback, useEffect, useState } from "react";
import { SmoothScroll, useLenis } from "@/components/layout/SmoothScroll";
import { useGsapLenis } from "@/hooks/useGsapLenis";
import { useExperienceStore } from "@/store/experienceStore";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { FEATURES } from "@/lib/features";
import { TapToOpenOpening } from "./TapToOpenOpening";
import { ScrollVideoSection } from "./ScrollVideoSection";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { AudioControl, AudioPlayer } from "./AudioControl";
import { DesktopExperience } from "./DesktopExperience";
import { CountdownSection } from "./sections/CountdownSection";
import { ParentsSection } from "./sections/ParentsSection";
import { WeddingDetailsSection } from "./sections/WeddingDetailsSection";
import { LanternWishesSection } from "./sections/LanternWishesSection";
import { VenueSection } from "./sections/VenueSection";
import { DuaSection } from "./sections/DuaSection";
import { FinalBlessingSection } from "./sections/FinalBlessingSection";

function readScrollProgress(lenisScroll?: number) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  const scroll = lenisScroll ?? window.scrollY;
  return scroll / max;
}

function MobileExperienceContent({ showHeroIntro }: { showHeroIntro: boolean }) {
  const lenis = useLenis();
  useGsapLenis(lenis);
  const [videoProgress, setVideoProgress] = useState(0);
  const [pageProgress, setPageProgress] = useState(0);

  const handleVideoProgress = useCallback((p: number) => {
    setVideoProgress(p);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setPageProgress(readScrollProgress(lenis?.scroll));
    };

    if (lenis) {
      lenis.on("scroll", onScroll);
      onScroll();
      return () => lenis.off("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const overallProgress = videoProgress < 1 ? videoProgress * 0.35 : 0.35 + pageProgress * 0.65;

  return (
    <>
      <ScrollProgressBar progress={overallProgress} />
      <AudioControl />
      <main>
        <ScrollVideoSection onProgress={handleVideoProgress} showHeroIntro={showHeroIntro} />
        <CountdownSection />
        <ParentsSection />
        <WeddingDetailsSection />
        <LanternWishesSection />
        <VenueSection />
        {FEATURES.enableDuaSection && <DuaSection />}
        <FinalBlessingSection />
      </main>
    </>
  );
}

function DesktopExperienceContent() {
  const lenis = useLenis();
  useGsapLenis(lenis);

  return (
    <>
      <AudioControl />
      <DesktopExperience />
    </>
  );
}

export function CinematicExperience() {
  const { phase, setPhase, _hasHydrated } = useExperienceStore();
  const [mounted, setMounted] = useState(false);
  const [justOpened, setJustOpened] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (phase === "experience") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleOpenComplete = () => {
    setJustOpened(true);
    setPhase("experience");
  };

  if (!mounted || !_hasHydrated || isDesktop === null) {
    return <div className="min-h-screen bg-ivory" aria-hidden />;
  }

  return (
    <>
      <AudioPlayer />

      {phase === "opening" && <TapToOpenOpening onOpenComplete={handleOpenComplete} />}

      {phase === "experience" && (
        <SmoothScroll enabled={isDesktop}>
          {isDesktop ? (
            <DesktopExperienceContent />
          ) : (
            <MobileExperienceContent showHeroIntro={justOpened} />
          )}
        </SmoothScroll>
      )}
    </>
  );
}
