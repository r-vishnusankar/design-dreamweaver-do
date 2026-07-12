"use client";

import { useEffect, useCallback } from "react";

export function CursorPetals() {
  const spawn = useCallback((x: number, y: number) => {
    const el = document.createElement("div");
    el.className = "cursor-petal";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    let opacity = 0.45;
    let px = x;
    let py = y;
    let frame = 0;
    const anim = () => {
      frame++;
      px += (Math.random() - 0.5) * 2;
      py += 1.2;
      opacity -= 0.012;
      el.style.left = `${px}px`;
      el.style.top = `${py}px`;
      el.style.opacity = `${Math.max(0, opacity)}`;
      if (opacity > 0 && frame < 50) requestAnimationFrame(anim);
      else el.remove();
    };
    requestAnimationFrame(anim);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      if (Date.now() - last < 100) return;
      last = Date.now();
      if (Math.random() > 0.5) spawn(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [spawn]);

  return null;
}
