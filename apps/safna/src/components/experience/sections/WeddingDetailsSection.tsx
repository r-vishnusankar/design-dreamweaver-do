"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export function WeddingDetailsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const DETAILS = [
    { icon: Calendar, label: t.details.date, value: WEDDING.event.date, sub: WEDDING.event.islamicDate },
    { icon: Clock, label: t.details.time, value: WEDDING.event.time, sub: WEDDING.event.timezone },
    { icon: MapPin, label: t.details.venue, value: WEDDING.venue.name, sub: WEDDING.venue.address },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".detail-card", {
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" },
        y: 60,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="details"
      className="relative flex flex-col items-center justify-center px-6 py-16 md:py-20 paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF8F5 0%, #EDE4DA 100%)" }}
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3">{t.details.label}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-text-primary text-center mb-8">
        {t.details.title}
      </h2>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl w-full">
        {DETAILS.map(({ icon: Icon, label, value, sub }) => (
          <div key={label} className="detail-card glass-card p-5 md:p-6 hover:shadow-lifted transition-shadow duration-500">
            <Icon className="h-5 w-5 text-floral-blue mb-4" strokeWidth={1.5} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mb-2">{label}</p>
            <p className="font-heading text-xl text-text-primary">{value}</p>
            <p className="font-body text-sm text-text-secondary mt-2">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
