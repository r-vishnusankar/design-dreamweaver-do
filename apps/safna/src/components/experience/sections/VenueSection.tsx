"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(WEDDING.venue.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function VenueSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".venue-reveal", {
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" },
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const mapsUrl =
    (WEDDING.venue.mapsUrl as string) !== "#"
      ? WEDDING.venue.mapsUrl
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.venue.fullAddress)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(WEDDING.venue.fullAddress)}`;

  return (
    <section
      ref={sectionRef}
      id="venue"
      className="relative flex flex-col items-center justify-center px-6 py-16 md:py-20 paper-texture"
      style={{ background: "linear-gradient(180deg, #EDE4DA 0%, #FAF8F5 100%)" }}
    >
      <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3">{t.venue.label}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-text-primary text-center mb-8">
        {t.venue.title}
      </h2>

      <div className="venue-reveal w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-lifted mb-6">
        <iframe
          title="Venue location map"
          src={MAP_EMBED}
          className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="venue-reveal glass-card max-w-2xl w-full p-6 md:p-8 text-center mb-6">
        <MapPin className="h-6 w-6 text-floral-blue mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-heading text-2xl text-text-primary">{WEDDING.venue.name}</h3>
        <p className="font-body text-text-secondary mt-3">{WEDDING.venue.fullAddress}</p>
        <p className="font-body text-sm text-text-muted mt-4">{WEDDING.venue.parking}</p>
      </div>

      <div className="venue-reveal flex flex-wrap gap-4 justify-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 glass-card font-body text-sm uppercase tracking-widest text-text-primary hover:shadow-lifted transition-all"
        >
          {t.venue.openMaps} <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-warm-white font-body text-sm uppercase tracking-widest rounded-lg hover:bg-gold/90 transition-all"
        >
          {t.venue.directions} <Navigation className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
