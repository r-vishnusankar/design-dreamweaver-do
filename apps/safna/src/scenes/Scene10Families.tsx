"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WEDDING } from "@/lib/constants";
import { ScrollScene } from "@/components/motion/FadeReveal";
import { FamilyCard } from "@/components/cards/FamilyCard";

export default function Scene10Families() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ScrollScene id="families" sceneNumber={10} title="Two Families">
      <p className="font-body text-text-secondary text-center max-w-xl mx-auto mb-16 font-light">
        United by love and the grace of Allah
      </p>

      <div ref={ref} className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8 relative">
        <FamilyCard
          title="Bride's Family"
          father={WEDDING.brideFamily.father}
          mother={WEDDING.brideFamily.mother}
          house={WEDDING.brideFamily.house}
          address={[...WEDDING.brideFamily.address]}
          align="left"
        />
        <FamilyCard
          title="Groom's Family"
          father={WEDDING.groomFamily.father}
          mother={WEDDING.groomFamily.mother}
          house={WEDDING.groomFamily.house}
          address={[...WEDDING.groomFamily.address]}
          align="right"
          delay={0.15}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gold/40 origin-center"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="font-heading text-xl md:text-2xl font-light italic text-center max-w-2xl mx-auto mt-16 text-text-primary"
      >
        From Nenmara to Akkikavu — two homes, one blessed union.
      </motion.p>
    </ScrollScene>
  );
}
