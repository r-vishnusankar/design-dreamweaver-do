"use client";

import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;

function detectDesktop() {
  if (typeof window === "undefined") return false;
  const wide = window.innerWidth >= DESKTOP_BREAKPOINT;
  const noTouch = !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
  return wide && noTouch;
}

/**
 * Returns `null` until the first client measurement so callers can avoid
 * flashing the mobile experience on desktop.
 */
export function useIsDesktop(): boolean | null {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(detectDesktop());
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}
