"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;
const UNITS_ML = ["ദിവസം", "മണിക്കൂർ", "മിനിറ്റ്", "സെക്കൻഡ്"] as const;

export function CountdownSection() {
  const { t, locale } = useTranslation();
  const { days, hours, minutes, seconds } = useCountdown();
  const sectionRef = useRef<HTMLElement>(null);
  const values = [days, hours, minutes, seconds];
  const units = locale === "ml" ? UNITS_ML : UNITS;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".countdown-unit", {
        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none reverse" },
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="countdown"
      className="relative flex flex-col items-center justify-center px-6 py-16 md:py-20 paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF8F5 0%, #F5EDE3 100%)" }}
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3">{t.countdown.label}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-text-primary text-center mb-8">
        {t.countdown.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl w-full">
        {values.map((value, i) => (
          <div key={units[i]} className="countdown-unit text-center">
            <div className="glass-card py-5 px-3 md:py-6 md:px-4">
              <p className="font-heading text-5xl md:text-6xl font-light text-text-primary tabular-nums">{value}</p>
              <p className="mt-3 font-body text-xs uppercase tracking-[0.25em] text-text-muted">{units[i]}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 font-body text-sm text-text-secondary text-center">
        {WEDDING.event.date} · {WEDDING.event.islamicDate}
      </p>
    </section>
  );
}
