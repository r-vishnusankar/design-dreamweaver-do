"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export function LanternWishesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hasHinted, setHasHinted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".lantern", {
        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none reverse" },
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: "power2.out",
        onComplete: () => setHasHinted(true),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const wishes = t.lanterns.wishes;

  return (
    <section
      ref={sectionRef}
      id="lanterns"
      className="relative flex flex-col items-center justify-center px-6 py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #20304A 0%, #31465F 50%, #20304A 100%)" }}
    >
      {/* Bridge gradients so the night scene blends into the ivory sections around it */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#EDE4DA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#EDE4DA] to-transparent z-10" />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-warm-white"
            style={{ left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%`, opacity: 0.3 + (i % 5) * 0.1 }}
          />
        ))}
      </div>

      <p className="relative z-10 font-body text-xs uppercase tracking-[0.35em] text-gold-muted mb-3">
        {t.lanterns.label}
      </p>
      <h2 className="relative z-10 font-heading text-3xl md:text-4xl font-light text-warm-white text-center mb-3">
        {t.lanterns.title}
      </h2>
      <p className="relative z-10 font-body text-sm text-warm-white/70 text-center mb-3 max-w-md px-4">
        {t.lanterns.hint}
      </p>
      {hasHinted && activeId === null && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10 font-body text-xs text-gold-muted mb-8"
        >
          {t.lanterns.demoHint}
        </motion.p>
      )}

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full mb-8">
        {wishes.map((wish, i) => {
          const isActive = activeId === wish.id;
          const isRahna = wish.special;
          const shouldPulse = hasHinted && activeId === null && (i === 0 || isRahna);

          return (
            <button
              key={wish.id}
              type="button"
              onClick={() => setActiveId(isActive ? null : wish.id)}
              className="lantern group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg p-4"
            >
              <div
                className={`relative transition-all duration-700 ${
                  isActive
                    ? "scale-110 drop-shadow-[0_0_30px_rgba(196,169,98,0.8)]"
                    : shouldPulse
                      ? "scale-105 animate-pulse"
                      : "group-hover:scale-105"
                }`}
              >
                <svg width="52" height="68" viewBox="0 0 48 64" fill="none" aria-hidden>
                  <rect x="14" y="0" width="20" height="4" rx="1" fill="#C4A962" opacity="0.6" />
                  <path
                    d="M12 8 L24 4 L36 8 L36 52 C36 56 30 60 24 60 C18 60 12 56 12 52 Z"
                    fill={isActive ? "#F5E6B8" : isRahna ? "#E8C4A8" : "#E8D4A0"}
                    opacity={isActive ? 1 : 0.85}
                  />
                  <ellipse cx="24" cy="30" rx="8" ry="12" fill="#FFF8E7" opacity={isActive ? 0.9 : 0.35} />
                </svg>
                <span
                  className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 font-accent text-sm text-brown-warm/80 ${
                    isRahna ? "text-base font-semibold" : ""
                  }`}
                >
                  {wish.initial}
                </span>
                {isActive && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gold/70 blur-sm animate-pulse" />
                )}
              </div>
              <span className="font-body text-[10px] uppercase tracking-widest text-warm-white/40 group-hover:text-warm-white/60">
                {wish.author}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative z-10 min-h-[80px] max-w-lg text-center px-6">
        {activeId !== null && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card bg-warm-white/10 border-warm-white/20 p-8"
          >
            <p className="font-accent text-xl md:text-2xl italic text-warm-white leading-relaxed">
              {wishes.find((w) => w.id === activeId)?.message}
            </p>
            <p className="mt-4 font-body text-xs uppercase tracking-[0.25em] text-gold-muted">
              — {wishes.find((w) => w.id === activeId)?.author}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
