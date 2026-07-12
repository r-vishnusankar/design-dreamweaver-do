import { useEffect, useRef, useState } from "react";

type MusicToggleProps = {
  src: string;
  className?: string;
  variant?: "hero" | "ink";
};

/** Soft music control for Signature templates. */
export function MusicToggle({ src, className = "", variant = "hero" }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.28;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className={`sig-music ${variant === "ink" ? "sig-music-ink" : ""} ${className}`}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
        {playing ? "pause" : "music_note"}
      </span>
    </button>
  );
}
