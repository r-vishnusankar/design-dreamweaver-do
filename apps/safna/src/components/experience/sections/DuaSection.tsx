"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HIDDEN_DUA } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export function DuaSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".dua-reveal", {
        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none reverse" },
        y: 28,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.2,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center px-6 py-12 md:py-16 paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF8F5 0%, #F5EDE3 100%)" }}
    >
      <div className="relative z-10 max-w-2xl text-center">
        <p className="dua-reveal font-body text-xs uppercase tracking-[0.35em] text-gold mb-4">
          {t.dua.label}
        </p>
        <p className="dua-reveal font-heading text-2xl md:text-4xl font-light text-text-primary leading-snug">
          {t.dua.title}
        </p>
        <div className="dua-reveal mt-8 glass-card px-6 py-7 md:px-10 md:py-8">
          <p className="font-heading text-2xl md:text-3xl leading-loose text-gold" dir="rtl">
            {HIDDEN_DUA}
          </p>
          <p className="mt-5 font-body text-sm md:text-base text-text-secondary leading-relaxed">
            {t.dua.line}
          </p>
        </div>
      </div>
    </section>
  );
}
