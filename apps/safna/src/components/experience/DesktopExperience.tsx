"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { FEATURES } from "@/lib/features";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { FloatingPetals } from "./FloatingPetals";
import { CountdownSection } from "./sections/CountdownSection";
import { LanternWishesSection } from "./sections/LanternWishesSection";
import { DuaSection } from "./sections/DuaSection";
import { FinalBlessingSection } from "./sections/FinalBlessingSection";

gsap.registerPlugin(ScrollTrigger);

function HeroDesktop() {
  const { t } = useTranslation();
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden paper-texture"
      style={{ background: "linear-gradient(170deg, #FAF7F0 0%, #F4EEE2 60%, #EFE7D8 100%)" }}
    >
      <FloatingPetals />
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-20 grid grid-cols-2 gap-16 items-center">
        {/* Left side — Names & date */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Wedding Invitation
          </p>
          <h1 className="font-accent text-6xl xl:text-7xl text-text-primary leading-tight">
            {WEDDING.bride.firstName}
          </h1>
          <p className="font-heading text-3xl text-gold my-3">&amp;</p>
          <h1 className="font-accent text-6xl xl:text-7xl text-text-primary leading-tight">
            {WEDDING.groom.firstName}
          </h1>
          <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
            <span className="h-px w-10 bg-gold/40" />
            <p className="font-body text-sm uppercase tracking-[0.25em] text-text-secondary">
              {WEDDING.event.dateShort}
            </p>
            <span className="h-px w-10 bg-gold/40" />
          </div>
        </motion.div>

        {/* Right side — Ornamental card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-card p-10 text-center shadow-lifted">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-6">
              {t.parents.label}
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-heading text-xl text-text-primary">{WEDDING.brideFamily.father}</p>
                <p className="font-heading text-xl text-text-primary">{WEDDING.brideFamily.mother}</p>
                <p className="font-body text-sm text-text-muted mt-1">{WEDDING.brideFamily.house}</p>
              </div>
              <Heart className="h-5 w-5 text-floral-pink mx-auto" strokeWidth={1.5} />
              <div>
                <p className="font-heading text-xl text-text-primary">{WEDDING.groomFamily.father}</p>
                <p className="font-heading text-xl text-text-primary">{WEDDING.groomFamily.mother}</p>
                <p className="font-body text-sm text-text-muted mt-1">{WEDDING.groomFamily.house}</p>
              </div>
            </div>
            <div className="floral-divider mt-8">
              <span className="text-floral-blush" aria-hidden>✿</span>
            </div>
            <p className="mt-4 font-body text-sm text-text-secondary italic">
              {t.final.title}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailsDesktop() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".desktop-detail", {
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" },
        y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-8 paper-texture"
      style={{ background: "linear-gradient(180deg, #FAF8F5 0%, #EDE4DA 100%)" }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3 text-center">{t.details.label}</p>
        <h2 className="font-heading text-4xl font-light text-text-primary text-center mb-12">{t.details.title}</h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="desktop-detail glass-card p-8 text-center hover:shadow-lifted transition-shadow">
            <Calendar className="h-6 w-6 text-gold mx-auto mb-4" strokeWidth={1.5} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mb-2">{t.details.date}</p>
            <p className="font-heading text-xl text-text-primary">{WEDDING.event.date}</p>
          </div>
          <div className="desktop-detail glass-card p-8 text-center hover:shadow-lifted transition-shadow">
            <Clock className="h-6 w-6 text-gold mx-auto mb-4" strokeWidth={1.5} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mb-2">{t.details.time}</p>
            <p className="font-heading text-xl text-text-primary">{WEDDING.event.time}</p>
          </div>
          <div className="desktop-detail glass-card p-8 text-center hover:shadow-lifted transition-shadow">
            <MapPin className="h-6 w-6 text-gold mx-auto mb-4" strokeWidth={1.5} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mb-2">{t.details.venue}</p>
            <p className="font-heading text-xl text-text-primary">{WEDDING.venue.name}</p>
            <p className="font-body text-sm text-text-secondary mt-1">{WEDDING.venue.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueDesktop() {
  const { t } = useTranslation();
  const mapsUrl = (WEDDING.venue.mapsUrl as string) !== "#"
    ? WEDDING.venue.mapsUrl
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.venue.fullAddress)}`;

  return (
    <section
      className="relative py-24 px-8 paper-texture"
      style={{ background: "linear-gradient(180deg, #EDE4DA 0%, #FAF8F5 100%)" }}
    >
      <div className="mx-auto max-w-5xl grid grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lifted">
          <iframe
            title="Venue location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(WEDDING.venue.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-3">{t.venue.label}</p>
          <h2 className="font-heading text-3xl font-light text-text-primary mb-4">{t.venue.title}</h2>
          <div className="glass-card p-8 inline-block">
            <MapPin className="h-6 w-6 text-gold mx-auto mb-3" strokeWidth={1.5} />
            <h3 className="font-heading text-2xl text-text-primary">{WEDDING.venue.name}</h3>
            <p className="font-body text-text-secondary mt-2">{WEDDING.venue.address}</p>
          </div>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold text-warm-white font-body text-sm uppercase tracking-widest rounded-lg hover:bg-gold/90 transition-colors"
            >
              {t.venue.openMaps}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DesktopExperience() {
  return (
    <main>
      <HeroDesktop />
      <CountdownSection />
      <DetailsDesktop />
      <LanternWishesSection />
      <VenueDesktop />
      {FEATURES.enableDuaSection && <DuaSection />}
      <FinalBlessingSection />
    </main>
  );
}
