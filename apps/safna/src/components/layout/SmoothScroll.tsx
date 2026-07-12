"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { LenisContext } from "@/lib/lenisContext";

export { useLenis } from "@/lib/lenisContext";

interface SmoothScrollProps {
  children: React.ReactNode;
  /** Lenis only on desktop — native scroll is smoother on touch devices. */
  enabled?: boolean;
}

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) {
      lenisRef.current = null;
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1,
      // Touch is handled by native scroll when enabled=false; keep this off as a safeguard.
      syncTouch: false,
    });

    lenisRef.current = instance;
    setLenis(instance);

    return () => {
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, [enabled]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
