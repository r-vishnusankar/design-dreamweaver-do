"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useExperienceStore } from "@/store/experienceStore";
import { FloatingPetals } from "./FloatingPetals";
import { GlowingParticles } from "./GlowingParticles";

type Phase = "bismillah" | "idle" | "opening" | "open" | "exit";

interface CardUnfoldOpeningProps {
  onOpenComplete: () => void;
}

const DOOR_FACE =
  "linear-gradient(165deg, #F8F4EC 0%, #F0E9DA 30%, #E8DFCF 60%, #E2D7C4 100%)";

const DOOR_EDGE =
  "linear-gradient(160deg, #EAE0CE 0%, #DDD3BF 100%)";

/** Rich multi-layered botanical emboss pattern */
const EMBOSS_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='380' viewBox='0 0 260 380' fill='none'%3E%3Cdefs%3E%3ClinearGradient id='stem' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23D4C9B0' stop-opacity='0.6'/%3E%3Cstop offset='100%25' stop-color='%23C9BCA2' stop-opacity='0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M130 370 C 115 320 145 280 125 220 C 108 170 140 130 130 60 C 125 30 130 10 130 5' stroke='url(%23stem)' stroke-width='2.5' fill='none'/%3E%3Cpath d='M130 310 C 100 300 80 270 85 235' stroke='%23D4C9B0' stroke-width='1.8' fill='none' opacity='0.7'/%3E%3Cpath d='M130 260 C 160 250 180 220 175 185' stroke='%23D4C9B0' stroke-width='1.8' fill='none' opacity='0.7'/%3E%3Cpath d='M130 200 C 100 192 82 165 86 130' stroke='%23D4C9B0' stroke-width='1.8' fill='none' opacity='0.7'/%3E%3Cpath d='M130 145 C 158 137 175 112 170 80' stroke='%23D4C9B0' stroke-width='1.8' fill='none' opacity='0.7'/%3E%3Cpath d='M130 90 C 108 82 95 60 98 38' stroke='%23D4C9B0' stroke-width='1.8' fill='none' opacity='0.6'/%3E%3Cpath d='M85 235 q -18 -20 -6 -38 q 20 6 6 38' fill='%23E8E0CF' stroke='%23D4C9B0' stroke-width='1' opacity='0.8'/%3E%3Cpath d='M175 185 q 18 -20 6 -38 q -20 6 -6 38' fill='%23E8E0CF' stroke='%23D4C9B0' stroke-width='1' opacity='0.8'/%3E%3Cpath d='M86 130 q -16 -18 -5 -34 q 18 5 5 34' fill='%23E8E0CF' stroke='%23D4C9B0' stroke-width='1' opacity='0.8'/%3E%3Cpath d='M170 80 q 16 -18 5 -34 q -18 5 -5 34' fill='%23E8E0CF' stroke='%23D4C9B0' stroke-width='1' opacity='0.8'/%3E%3Cpath d='M98 38 q -14 -15 -4 -28 q 16 4 4 28' fill='%23E8E0CF' stroke='%23D4C9B0' stroke-width='1' opacity='0.7'/%3E%3Ccircle cx='130' cy='220' r='4' fill='%23DDD3BF' opacity='0.6'/%3E%3Ccircle cx='85' cy='235' r='3' fill='%23D4C9B0' opacity='0.5'/%3E%3Ccircle cx='175' cy='185' r='3' fill='%23D4C9B0' opacity='0.5'/%3E%3Ccircle cx='86' cy='130' r='2.5' fill='%23D4C9B0' opacity='0.5'/%3E%3Ccircle cx='170' cy='80' r='2.5' fill='%23D4C9B0' opacity='0.5'/%3E%3Ccircle cx='130' cy='60' r='3.5' fill='%23DDD3BF' opacity='0.5'/%3E%3Cpath d='M85 235 C 70 245 55 235 60 220' stroke='%23D4C9B0' stroke-width='1' fill='none' opacity='0.4'/%3E%3Cpath d='M175 185 C 190 195 205 185 200 170' stroke='%23D4C9B0' stroke-width='1' fill='none' opacity='0.4'/%3E%3C/svg%3E")`;

/** Deep crimson wax seal with ornate gold initials */
function WaxSeal() {
  return (
    <div className="h-[76px] w-[76px] md:h-[92px] md:w-[92px] relative">
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="wax-base" cx="42%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#9E2B2B" />
            <stop offset="40%" stopColor="#7A1F1F" />
            <stop offset="75%" stopColor="#5C1515" />
            <stop offset="100%" stopColor="#3D0E0E" />
          </radialGradient>
          <radialGradient id="wax-highlight" cx="32%" cy="28%" r="35%">
            <stop offset="0%" stopColor="#C94545" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7A1F1F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wax-rim" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="100%" stopColor="#2A0808" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="gold-letter" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5E6A3" />
            <stop offset="30%" stopColor="#D4A843" />
            <stop offset="60%" stopColor="#B8882A" />
            <stop offset="100%" stopColor="#F5E088" />
          </linearGradient>
          <filter id="seal-drop">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1A0505" floodOpacity="0.5" />
          </filter>
          <filter id="emboss-letter">
            <feDropShadow dx="0.5" dy="1" stdDeviation="0.3" floodColor="#3D0E0E" floodOpacity="0.6" />
          </filter>
        </defs>
        {/* Irregular wax drip blobs */}
        <ellipse cx="58" cy="12" rx="11" ry="9" fill="url(#wax-base)" />
        <ellipse cx="98" cy="28" rx="10" ry="12" fill="url(#wax-base)" />
        <ellipse cx="108" cy="62" rx="9" ry="11" fill="url(#wax-base)" />
        <ellipse cx="96" cy="98" rx="12" ry="10" fill="url(#wax-base)" />
        <ellipse cx="58" cy="110" rx="11" ry="9" fill="url(#wax-base)" />
        <ellipse cx="20" cy="96" rx="10" ry="11" fill="url(#wax-base)" />
        <ellipse cx="11" cy="58" rx="9" ry="12" fill="url(#wax-base)" />
        <ellipse cx="22" cy="24" rx="11" ry="10" fill="url(#wax-base)" />
        {/* Extra drip details for organic feel */}
        <circle cx="80" cy="14" r="6" fill="url(#wax-base)" />
        <circle cx="110" cy="46" r="5" fill="url(#wax-base)" />
        <circle cx="36" cy="108" r="6" fill="url(#wax-base)" />
        <circle cx="10" cy="78" r="5" fill="url(#wax-base)" />
        {/* Main wax body */}
        <circle cx="60" cy="60" r="48" fill="url(#wax-base)" filter="url(#seal-drop)" />
        {/* Highlight shimmer */}
        <circle cx="60" cy="60" r="48" fill="url(#wax-highlight)" />
        {/* Rim darkening */}
        <circle cx="60" cy="60" r="48" fill="url(#wax-rim)" />
        {/* Ornate outer ring */}
        <circle cx="60" cy="60" r="38" fill="none" stroke="url(#gold-letter)" strokeWidth="1.2" strokeOpacity="0.7" />
        {/* Inner decorative ring */}
        <circle cx="60" cy="60" r="34" fill="none" stroke="url(#gold-letter)" strokeWidth="0.6" strokeOpacity="0.4" />
        {/* Small dots around the ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const r = 36;
          const cx = 60 + r * Math.cos((angle * Math.PI) / 180);
          const cy = 60 + r * Math.sin((angle * Math.PI) / 180);
          return <circle key={angle} cx={cx} cy={cy} r="1.2" fill="url(#gold-letter)" opacity="0.6" />;
        })}
        {/* Ornate "J" initial - left side */}
        <text
          x="43"
          y="72"
          textAnchor="middle"
          fontSize="28"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fill="url(#gold-letter)"
          filter="url(#emboss-letter)"
        >
          J
        </text>
        {/* Ornate "S" initial - right side */}
        <text
          x="77"
          y="72"
          textAnchor="middle"
          fontSize="28"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fill="url(#gold-letter)"
          filter="url(#emboss-letter)"
        >
          S
        </text>
        {/* Small decorative ampersand */}
        <text x="60" y="66" textAnchor="middle" fontSize="10" fontFamily="Georgia, serif" fill="url(#gold-letter)" opacity="0.6">
          &amp;
        </text>
      </svg>
    </div>
  );
}

export function CardUnfoldOpening({ onOpenComplete }: CardUnfoldOpeningProps) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("bismillah");

  useEffect(() => {
    if (phase !== "bismillah") return;
    const timer = setTimeout(() => setPhase("idle"), 2400);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleTap = () => {
    if (phase !== "idle") return;
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(30);
    }
    // Start music on seal tap
    useExperienceStore.getState().toggleMute();
    setPhase("opening");
    setTimeout(() => setPhase("open"), 500);
    setTimeout(() => setPhase("exit"), 3200);
    setTimeout(onOpenComplete, 4000);
  };

  const isOpen = phase === "open" || phase === "exit";

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            height: "100dvh",
            background: "linear-gradient(170deg, #FAF7F0 0%, #F4EEE2 60%, #EFE7D8 100%)",
          }}
          role="button"
          tabIndex={phase === "idle" ? 0 : -1}
          onClick={handleTap}
          onKeyDown={(e) => {
            if (phase === "idle" && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleTap();
            }
          }}
          aria-label={t.opening.tap}
        >
          {/* Soft floral corner glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-12 -left-12 h-56 w-56 rounded-full blur-2xl opacity-50"
              style={{ background: "radial-gradient(circle, rgba(233,185,182,0.5) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -top-10 -right-14 h-64 w-64 rounded-full blur-2xl opacity-50"
              style={{ background: "radial-gradient(circle, rgba(184,207,224,0.5) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, rgba(212,197,169,0.4) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-14 -right-12 h-52 w-52 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, rgba(143,175,201,0.35) 0%, transparent 70%)" }}
            />
          </div>

          <FloatingPetals />
          <GlowingParticles />

          {/* Quote above the card */}
          <motion.p
            animate={{ opacity: phase === "idle" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-2 px-6 text-center font-accent text-base md:text-xl italic text-text-primary/80 leading-relaxed max-w-sm md:max-w-md"
          >
            {t.opening.quote}
          </motion.p>

          {/* ── Premium Gate-fold Invitation ── */}
          <motion.div
            animate={phase === "idle" ? { scale: [1, 1.004, 1] } : { scale: 1 }}
            transition={{ duration: 6, repeat: phase === "idle" ? Infinity : 0, ease: "easeInOut" }}
            className="relative z-10 h-[68dvh] md:h-[72dvh] aspect-[3/4]"
            style={{ perspective: 1800 }}
          >
            {/* Paper edge thickness (visible when doors open) */}
            <div
              className="absolute inset-0 rounded-[3px]"
              style={{
                background: "linear-gradient(180deg, #DDD3BF 0%, #C9BCA2 100%)",
                boxShadow:
                  "0 30px 80px rgba(44,40,37,0.28), 0 10px 24px rgba(44,40,37,0.14), inset 0 0 0 1px rgba(196,169,98,0.15)",
              }}
            />

            {/* Inside — revealed when doors open */}
            <div
              className="absolute inset-[3px] rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(170deg, #FFFDF6 0%, #FBF2E0 55%, #F4E8CF 100%)",
              }}
            >
              <motion.div
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.7 }}
                transition={{ duration: 1.1, delay: isOpen ? 0.35 : 0 }}
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 48% at center, rgba(224,186,108,0.5) 0%, rgba(224,186,108,0.15) 50%, transparent 78%)",
                }}
              />
              <motion.div
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 18 }}
                transition={{ duration: 1, delay: isOpen ? 0.6 : 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center"
              >
                <span className="font-accent text-4xl md:text-6xl text-gold drop-shadow-sm">S &amp; J</span>
                <span className="h-px w-12 bg-gold/50" />
                <p className="font-heading text-base md:text-xl font-light text-text-primary">
                  {WEDDING.bride.name} &amp; {WEDDING.groom.name}
                </p>
                <p className="font-body text-[10px] uppercase tracking-[0.35em] text-brown-warm/70">
                  15 · 08 · 2026
                </p>
              </motion.div>
            </div>

            {/* Left door */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 origin-left z-10"
              style={{ transformStyle: "preserve-3d" }}
              initial={false}
              animate={{ rotateY: isOpen ? -108 : 0 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.12 : 0 }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0 overflow-hidden rounded-l-[3px]"
                style={{
                  background: DOOR_FACE,
                  boxShadow:
                    "inset -2px 0 0 rgba(196,169,98,0.15), inset 0 2px 6px rgba(0,0,0,0.04), 4px 0 16px rgba(44,40,37,0.08)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Paper texture noise */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
                {/* Embossed botanical */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: EMBOSS_PATTERN,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 52%",
                    backgroundSize: "85%",
                  }}
                />
                {/* Inner gold frame with double border */}
                <div className="absolute inset-[10px] border border-gold/30 rounded-sm pointer-events-none" />
                <div className="absolute inset-[13px] border border-gold/15 rounded-sm pointer-events-none" />
                {/* Edge shadow along seam */}
                <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/[0.06] to-transparent" />
              </div>
              {/* Back face */}
              <div
                className="absolute inset-0 rounded-l-[3px]"
                style={{ background: DOOR_EDGE, transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              />
            </motion.div>

            {/* Right door */}
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 origin-right z-10"
              style={{ transformStyle: "preserve-3d" }}
              initial={false}
              animate={{ rotateY: isOpen ? 108 : 0 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.12 : 0 }}
            >
              <div
                className="absolute inset-0 overflow-hidden rounded-r-[3px]"
                style={{
                  background: DOOR_FACE,
                  boxShadow:
                    "inset 2px 0 0 rgba(196,169,98,0.15), inset 0 2px 6px rgba(0,0,0,0.04), -4px 0 16px rgba(44,40,37,0.08)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: EMBOSS_PATTERN,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 52%",
                    backgroundSize: "85%",
                    transform: "scaleX(-1)",
                  }}
                />
                <div className="absolute inset-[10px] border border-gold/30 rounded-sm pointer-events-none" />
                <div className="absolute inset-[13px] border border-gold/15 rounded-sm pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/[0.06] to-transparent" />
              </div>
              <div
                className="absolute inset-0 rounded-r-[3px]"
                style={{ background: DOOR_EDGE, transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              />
            </motion.div>

            {/* Wax seal — hidden once doors are open */}
            {!isOpen && (
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ scale: phase === "opening" ? 1.3 : 1, opacity: phase === "opening" ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <WaxSeal />
                </motion.div>
              </div>
            )}

            {/* Crimson burst on seal break */}
            {phase === "opening" && (
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.85 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="h-24 w-24 rounded-full blur-lg"
                  style={{ background: "radial-gradient(circle, rgba(158,43,43,0.7) 0%, rgba(122,31,31,0.3) 100%)" }}
                />
                <motion.div
                  initial={{ scale: 0.6, opacity: 0.6 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="absolute h-16 w-16 rounded-full blur-md"
                  style={{ background: "radial-gradient(circle, rgba(212,168,67,0.5) 0%, transparent 70%)" }}
                />
              </div>
            )}
          </motion.div>

          {/* Tap hint */}
          {phase === "idle" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 mt-2 font-body text-[11px] uppercase tracking-[0.3em] text-gold"
            >
              {t.opening.tap}
            </motion.p>
          )}

          {/* Bismillah overlay */}
          <AnimatePresence>
            {phase === "bismillah" && (
              <motion.div
                key="bismillah"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(180deg, #20304A 0%, #31465F 100%)" }}
              >
                <p className="font-heading text-2xl md:text-3xl text-gold/90 mb-3" dir="rtl">
                  {t.opening.bismillah}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-muted/70">
                  {t.opening.bismillahTrans}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
