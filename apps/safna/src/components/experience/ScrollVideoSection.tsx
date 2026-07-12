"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CANVA_VIDEO, WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const SCROLL_LENGTH = "+=280%";
/** Android Chrome seeks less reliably — coarser steps reduce freeze/stutter. */
const SEEK_EPSILON = 0.08;
const SEEK_SNAP = 0.12;
const SEEK_LERP = 0.45;

interface ScrollVideoSectionProps {
  onProgress?: (progress: number) => void;
  showHeroIntro?: boolean;
}

function markVideoReady(video: HTMLVideoElement, setReady: (v: boolean) => void) {
  if (Number.isFinite(video.duration) && video.duration > 0) {
    setReady(true);
  }
}

export function ScrollVideoSection({ onProgress, showHeroIntro = false }: ScrollVideoSectionProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [heroVisible, setHeroVisible] = useState(showHeroIntro);
  const [loadKey, setLoadKey] = useState(0);
  const introPlayed = useRef(false);

  const handleReady = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    markVideoReady(video, setReady);
    setFailed(false);
  }, []);

  const handleError = useCallback(() => {
    setFailed(true);
    setReady(false);
  }, []);

  const retryLoad = useCallback(() => {
    setFailed(false);
    setReady(false);
    introPlayed.current = false;
    setLoadKey((k) => k + 1);
  }, []);

  // Force a full buffer load on mobile (Android often stalls on preload=metadata).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.load();

    const onMeta = () => markVideoReady(video, setReady);
    const onCanPlay = () => markVideoReady(video, setReady);
    const onLoadedData = () => markVideoReady(video, setReady);
    const onError = () => handleError();

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("error", onError);

    // If metadata never arrives (bad network / missing file), surface an error.
    const timeout = window.setTimeout(() => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        handleError();
      }
    }, 12000);

    return () => {
      window.clearTimeout(timeout);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("error", onError);
    };
  }, [loadKey, handleError]);

  useEffect(() => {
    if (!showHeroIntro || introPlayed.current) return;
    const video = videoRef.current;
    if (!video || !ready) return;

    introPlayed.current = true;
    video.muted = true;
    video.loop = true;
    video.currentTime = CANVA_VIDEO.startSec;
    video.play().catch(() => {});

    const timer = setTimeout(() => {
      video.pause();
      video.loop = false;
      video.currentTime = CANVA_VIDEO.startSec;
      setHeroVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [showHeroIntro, ready]);

  // Keep pin height correct when Android Chrome shows/hides the URL bar.
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const video = videoRef.current;
    if (!container || !pin || !video || !ready) return;

    video.pause();
    video.loop = false;

    const startSec = CANVA_VIDEO.startSec;
    const scrubRange = () =>
      Number.isFinite(video.duration) ? Math.max(video.duration - startSec, 0.01) : CANVA_VIDEO.durationSec - startSec;

    // Scroll only records the target time; a separate rAF loop eases the video
    // toward it. Issuing a new seek while the previous one is still decoding
    // makes seeks pile up and the video appear frozen, so we skip while seeking.
    let targetTime = startSec;
    try {
      video.currentTime = startSec;
    } catch {
      // Some Android builds throw if seek is not yet allowed.
    }

    let rafId = 0;
    let idleTimer = 0;
    let running = true;

    const schedule = (active: boolean) => {
      if (!running) return;
      window.clearTimeout(idleTimer);
      if (active) {
        rafId = requestAnimationFrame(tick);
      } else {
        idleTimer = window.setTimeout(() => {
          rafId = requestAnimationFrame(tick);
        }, 48);
      }
    };

    const tick = () => {
      if (!running) return;

      let active = false;
      if (!video.seeking && Number.isFinite(video.duration)) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > SEEK_EPSILON) {
          const step = video.currentTime + diff * SEEK_LERP;
          const next = Math.abs(targetTime - step) < SEEK_SNAP ? targetTime : step;
          try {
            video.currentTime = next;
          } catch {
            // Ignore transient seek errors on Android.
          }
          active = true;
        }
      }
      schedule(active);
    };
    rafId = requestAnimationFrame(tick);

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: SCROLL_LENGTH,
      pin: pin,
      scrub: 0.25,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (!Number.isFinite(video.duration)) return;
        video.pause();
        targetTime = startSec + self.progress * scrubRange();
        onProgress?.(self.progress);
      },
    });

    ScrollTrigger.refresh();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.clearTimeout(idleTimer);
      trigger.kill();
    };
  }, [ready, onProgress]);

  return (
    <section ref={containerRef} id="cinematic-video" className="relative" aria-label="Invitation cinematic video">
      <div
        ref={pinRef}
        className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-ivory"
      >
        {!posterFailed && !failed && (
          <Image
            src={CANVA_VIDEO.poster}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className={`object-cover transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
            onError={() => setPosterFailed(true)}
            aria-hidden
          />
        )}

        <video
          key={loadKey}
          ref={videoRef}
          src={CANVA_VIDEO.src}
          poster={posterFailed || failed ? undefined : CANVA_VIDEO.poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          preload="auto"
          muted
          autoPlay={false}
          controls={false}
          disablePictureInPicture
          onLoadedData={handleReady}
          onCanPlay={handleReady}
          onLoadedMetadata={handleReady}
          onError={handleError}
        />

        <div className="cinematic-overlay pointer-events-none absolute inset-0" />

        {!ready && !failed && (
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <p className="rounded-full glass-card px-5 py-2 font-body text-xs text-text-secondary">
              {t.scroll.videoLoading}
            </p>
          </div>
        )}

        {failed && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="max-w-xs font-body text-sm text-text-secondary leading-relaxed">
              {t.scroll.videoError}
            </p>
            <button
              type="button"
              onClick={retryLoad}
              className="rounded-full bg-gold px-6 py-2.5 font-body text-sm text-warm-white"
            >
              {t.scroll.videoRetry}
            </button>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6">
          <div
            className={`text-center rounded-sm glass-card px-8 py-4 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-accent text-3xl md:text-5xl text-text-primary">
              {WEDDING.bride.firstName} & {WEDDING.groom.firstName}
            </p>
            <p className="mt-3 font-body text-xs uppercase tracking-[0.35em] text-gold">
              {WEDDING.event.dateShort}
            </p>
          </div>

          {!heroVisible && ready && !failed && (
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex flex-col items-center animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="rounded-full glass-card px-5 py-2 font-body text-[11px] text-text-secondary text-center leading-relaxed max-w-[220px]">
                {t.scroll.elderHint}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
