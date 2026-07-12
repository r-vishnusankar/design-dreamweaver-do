"use client";

import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useExperienceStore } from "@/store/experienceStore";

const AUDIO_SRC = "/audio/ambient.mp3";

export function AudioPlayer() {
  const audioMuted = useExperienceStore((s) => s.audioMuted);
  const phase = useExperienceStore((s) => s.phase);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioMuted && (phase === "opening" || phase === "experience")) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [audioMuted, phase]);

  return null;
}

export function AudioControl() {
  const audioMuted = useExperienceStore((s) => s.audioMuted);
  const toggleMute = useExperienceStore((s) => s.toggleMute);
  const phase = useExperienceStore((s) => s.phase);

  if (phase !== "experience") return null;

  return (
    <button
      type="button"
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass-card transition-all hover:shadow-lifted"
      aria-label={audioMuted ? "Unmute ambient music" : "Mute ambient music"}
    >
      {audioMuted ? (
        <VolumeX className="h-4 w-4 text-text-secondary" />
      ) : (
        <Volume2 className="h-4 w-4 text-gold" />
      )}
    </button>
  );
}
