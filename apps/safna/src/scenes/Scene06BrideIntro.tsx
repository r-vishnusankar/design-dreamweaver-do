"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { SCENE_ASSETS } from "@/lib/assets";
import { LetterReveal } from "@/components/motion/FadeReveal";
import { Button } from "@/components/ui/button";
import { useSceneStore } from "@/store/sceneStore";

export default function Scene06BrideIntro() {
  const advanceScene = useSceneStore((s) => s.advanceScene);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-champagne/40 via-ivory to-ivory overflow-y-auto">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-8"
        >
          ٱلسَّلَامُ عَلَيْكُمْ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gold/30 shadow-xl mb-10"
        >
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
            alt="Meera Malhotra"
            fill
            className="object-cover"
            priority
            sizes="224px"
          />
        </motion.div>

        <h1 className="font-accent text-5xl md:text-7xl text-gold mb-2">
          <LetterReveal text={WEDDING.bride.firstName} delay={0.8} />
        </h1>
        <p className="font-heading text-xl md:text-2xl text-text-primary mb-8">Latheef</p>

        <div className="w-16 h-px bg-gold/50 mx-auto mb-6" />
        <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mb-2">Daughter of</p>
        <p className="font-heading text-lg text-text-primary">{WEDDING.brideFamily.father}</p>
        <p className="font-heading text-lg text-text-primary mb-8">{WEDDING.brideFamily.mother}</p>

        <p className="font-body text-text-secondary font-light leading-relaxed max-w-lg mb-10">
          Cordially invites your esteemed presence and blessings with family on the auspicious
          occasion of her wedding reception.
        </p>

        <div className="mb-10">
          <p className="font-body text-xs uppercase tracking-widest text-gold">{WEDDING.event.day}</p>
          <p className="font-heading text-5xl font-light">{WEDDING.event.dayNumber}</p>
          <p className="font-heading text-xl text-text-secondary">
            {WEDDING.event.month} · {WEDDING.event.year}
          </p>
          <p className="font-body text-sm text-text-muted mt-2">{WEDDING.event.islamicDate}</p>
        </div>

        <Button onClick={advanceScene} variant="outline" className="mb-8">
          Continue
        </Button>

        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-gold/50 mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
