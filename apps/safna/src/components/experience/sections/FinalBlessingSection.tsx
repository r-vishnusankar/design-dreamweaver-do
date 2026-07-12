"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarPlus, MessageCircle, MapPin } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { FloatingPetals } from "../FloatingPetals";

gsap.registerPlugin(ScrollTrigger);

const calendarHref = (() => {
  const event = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Arjun Meera Wedding//Invitation//EN",
    "BEGIN:VEVENT",
    "UID:arjun-meera-wedding-20261025@invitation",
    "DTSTAMP:20260709T000000Z",
    "DTSTART:20261025T110000Z",
    "DTEND:20261025T173000Z",
    "SUMMARY:Arjun & Meera Wedding",
    `LOCATION:${WEDDING.venue.fullAddress}`,
    `DESCRIPTION:${WEDDING.event.time} at ${WEDDING.venue.name}. ${WEDDING.venue.mapsUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(event)}`;
})();

function GoldOrnamentDivider() {
  return (
    <div className="my-3 flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/35 sm:w-14" />
      <span className="text-[10px] text-gold/70">✦</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/35 sm:w-14" />
    </div>
  );
}

function CornerFlorals() {
  return (
    <>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 text-floral-blush/80 sm:h-28 sm:w-28"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 72C18 58 28 62 36 48C42 38 34 28 22 30C30 18 44 14 52 24C58 12 72 8 80 18"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <circle cx="22" cy="58" r="5" fill="#E8D4D0" opacity="0.7" />
        <circle cx="38" cy="44" r="4" fill="#F0E0DC" opacity="0.8" />
        <circle cx="52" cy="68" r="3.5" fill="#E8D4D0" opacity="0.65" />
        <path d="M14 78 Q22 70 30 76" stroke="#C4A962" strokeWidth="0.8" opacity="0.45" fill="none" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 scale-x-[-1] text-floral-blush/80 sm:h-28 sm:w-28"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 72C18 58 28 62 36 48C42 38 34 28 22 30C30 18 44 14 52 24C58 12 72 8 80 18"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <circle cx="22" cy="58" r="5" fill="#E8D4D0" opacity="0.7" />
        <circle cx="38" cy="44" r="4" fill="#F0E0DC" opacity="0.8" />
        <circle cx="52" cy="68" r="3.5" fill="#E8D4D0" opacity="0.65" />
        <path d="M14 78 Q22 70 30 76" stroke="#C4A962" strokeWidth="0.8" opacity="0.45" fill="none" />
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-6 opacity-40" aria-hidden>
        <span className="h-1 w-1 rounded-full bg-gold/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-text-muted/40" />
        <span className="h-1 w-1 rounded-full bg-gold/50" />
        <span className="h-1 w-1 rounded-full bg-floral-blush" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
      </div>
    </>
  );
}

export function FinalBlessingSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(t.guestActions.rsvpMessage)}`;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".final-reveal", {
        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none reverse" },
        y: 30,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.4,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final"
      className="relative h-[100dvh] min-h-[100dvh] overflow-hidden bg-[#FAF9F6] paper-texture md:px-6 md:py-6"
    >
      <FloatingPetals active />
      <CornerFlorals />

      <div className="final-reveal relative z-10 mx-auto flex h-full w-full max-w-md flex-col overflow-y-auto px-6 pt-10 text-center sm:px-7 sm:pt-12">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-gold">{t.final.label}</p>
            <h2 className="mt-2 font-heading text-base font-light italic leading-snug text-text-primary md:text-lg">
              {t.final.title}
            </h2>

            <div className="floral-divider !my-3">
              <span className="text-floral-blush text-sm" aria-hidden>
                ✿
              </span>
            </div>

            <div className="mx-auto flex flex-row items-center justify-center gap-x-3 sm:gap-x-4">
              <div className="flex flex-col items-center leading-none">
                <p className="whitespace-nowrap font-accent text-[1.85rem] text-text-primary md:text-[2.1rem]">
                  {WEDDING.bride.firstName}
                </p>
                <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.25em] text-text-muted">
                  {t.final.bride}
                </p>
              </div>
              <span className="shrink-0 -translate-y-2 font-accent text-xl leading-none text-gold md:text-2xl">
                &amp;
              </span>
              <div className="flex flex-col items-center leading-none">
                <p className="whitespace-nowrap font-accent text-[1.85rem] text-text-primary md:text-[2.1rem]">
                  {WEDDING.groom.firstName}
                </p>
                <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.25em] text-text-muted">
                  {t.final.groom}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gold/15 bg-warm-white px-5 py-4 shadow-[0_8px_32px_rgba(61,46,20,0.08)] md:px-6 md:py-5">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-gold">
              {t.guestActions.label}
            </p>
            <GoldOrnamentDivider />
            <p className="font-heading text-xl font-light text-text-primary md:text-2xl">
              {WEDDING.bride.firstName} &amp; {WEDDING.groom.firstName}
            </p>
            <div className="mt-2.5 space-y-1 font-body text-sm text-text-secondary">
              <p>{WEDDING.event.date}</p>
              <p>{WEDDING.event.time}</p>
              <p className="flex items-center justify-center gap-2 pt-0.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>{WEDDING.venue.name}, {WEDDING.venue.address}</span>
              </p>
            </div>
            <p className="mt-3 font-body text-[11px] leading-relaxed text-text-muted">
              {t.guestActions.screenshotHint}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3.5 pb-[max(4rem,env(safe-area-inset-bottom))] pt-5">
          <div className="grid w-full grid-cols-1 gap-2.5">
            <a
              href={calendarHref}
              download="safna-jithin-wedding.ics"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-body text-[11px] uppercase tracking-[0.18em] text-warm-white shadow-[0_4px_16px_rgba(196,169,98,0.35)] transition-all hover:bg-gold/90"
            >
              <CalendarPlus className="h-4 w-4 shrink-0" strokeWidth={1.7} />
              {t.guestActions.addCalendar}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold/35 bg-warm-white px-5 py-3 font-body text-[11px] uppercase tracking-[0.18em] text-text-primary shadow-sm transition-all hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} />
              {t.guestActions.whatsappRsvp}
            </a>
          </div>

          <div className="floral-divider !my-2">
            <span className="text-gold/70 text-sm" aria-hidden>
              ✿
            </span>
          </div>

          <div>
            <p className="font-body text-sm leading-relaxed text-text-secondary">{t.final.thanks}</p>
            <p className="mt-2 font-accent text-lg italic text-gold drop-shadow-sm md:text-xl">
              {t.final.sisterLine}
            </p>
            <span className="mt-2 inline-block text-xs text-floral-blush" aria-hidden>
              ♥
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
