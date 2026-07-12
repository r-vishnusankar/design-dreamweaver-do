"use client";

interface ScrollProgressBarProps {
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-sand/30" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-gold-muted via-gold to-gold-muted transition-[width] duration-100 ease-out"
        style={{ width: `${Math.min(100, progress * 100)}%` }}
      />
    </div>
  );
}
