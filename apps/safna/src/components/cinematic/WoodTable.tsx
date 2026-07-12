"use client";

import { cn } from "@/lib/utils";

export function WoodTable({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,240,210,0.15) 0%, transparent 60%),
          linear-gradient(165deg, #3d3229 0%, #2a221c 40%, #1f1915 100%)
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 4px
          )`,
        }}
      />
      {children}
    </div>
  );
}
