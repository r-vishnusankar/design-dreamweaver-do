"use client";

import { useEffect, useCallback } from "react";

export function CursorPetals() {
  const createPetal = useCallback((x: number, y: number) => {
    const petal = document.createElement("div");
    petal.className = "cursor-petal";
    petal.style.left = `${x}px`;
    petal.style.top = `${y}px`;
    document.body.appendChild(petal);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 0.5 + Math.random() * 1;
    let opacity = 0.5;
    let posX = x;
    let posY = y;
    let frame = 0;

    function animate() {
      frame++;
      posX += Math.cos(angle) * velocity;
      posY += Math.sin(angle) * velocity + 0.3;
      opacity -= 0.015;

      petal.style.left = `${posX}px`;
      petal.style.top = `${posY}px`;
      petal.style.opacity = `${Math.max(0, opacity)}`;

      if (opacity > 0 && frame < 60) {
        requestAnimationFrame(animate);
      } else {
        petal.remove();
      }
    }

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isDesktop || prefersReducedMotion) return;

    let lastTime = 0;
    const throttle = 80;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;
      if (Math.random() > 0.6) createPetal(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [createPetal]);

  return null;
}
