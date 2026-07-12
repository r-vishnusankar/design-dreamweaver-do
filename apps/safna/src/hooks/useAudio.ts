"use client";

import { useCallback, useRef } from "react";
import { useSceneStore } from "@/store/sceneStore";

export function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { audioEnabled, audioMuted, enableAudio, toggleMute } = useSceneStore();

  const startMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient-piano.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }
    enableAudio();
    audioRef.current.muted = false;
    audioRef.current.play().catch(() => {});
  }, [enableAudio]);

  const playSfx = useCallback((src: string, volume = 0.3) => {
    try {
      const sfx = new Audio(src);
      sfx.volume = volume;
      sfx.play().catch(() => {});
    } catch {
      /* silent */
    }
  }, []);

  const syncMute = useCallback(() => {
    if (audioRef.current) audioRef.current.muted = audioMuted;
  }, [audioMuted]);

  return { audioEnabled, audioMuted, startMusic, playSfx, toggleMute, syncMute, audioRef };
}
