"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export function ParentsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".parents-card", {
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" },
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="parents"
      className="relative flex flex-col items-center justify-center px-6 py-16 md:py-20"
      style={{ background: "linear-gradient(180deg, #F5EDE3 0%, #FAF8F5 100%)" }}
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3">{t.parents.label}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-text-primary text-center mb-8">
        {t.parents.title}
      </h2>

      <div className="floral-divider w-full max-w-md">
        <span className="text-floral-blush text-xl" aria-hidden>
          ✿
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center max-w-4xl w-full mt-2">
        <div className="parents-card glass-card text-center p-6 md:p-8">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-floral-blue mb-4">{t.parents.brideFamily}</p>
          <p className="font-heading text-2xl text-text-primary">{WEDDING.brideFamily.father}</p>
          <p className="font-heading text-2xl text-text-primary mt-2">{WEDDING.brideFamily.mother}</p>
          <p className="font-body text-sm text-text-muted mt-6">{WEDDING.brideFamily.house}</p>
          <p className="font-body text-sm text-text-muted">{WEDDING.brideFamily.address.join(", ")}</p>
        </div>

        <div className="parents-card flex justify-center">
          <span className="text-3xl text-floral-pink" aria-label="United in love">
            ❤️
          </span>
        </div>

        <div className="parents-card glass-card text-center p-6 md:p-8">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-floral-blue mb-4">{t.parents.groomFamily}</p>
          <p className="font-heading text-2xl text-text-primary">{WEDDING.groomFamily.father}</p>
          <p className="font-heading text-2xl text-text-primary mt-2">{WEDDING.groomFamily.mother}</p>
          <p className="font-body text-sm text-text-muted mt-6">{WEDDING.groomFamily.house}</p>
          <p className="font-body text-sm text-text-muted">{WEDDING.groomFamily.address.join(", ")}</p>
        </div>
      </div>
    </section>
  );
}
