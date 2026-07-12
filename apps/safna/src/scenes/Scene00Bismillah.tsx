"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneStore } from "@/store/sceneStore";
import { EASING } from "@/lib/motion";

export default function Scene00Bismillah() {
  const advanceScene = useSceneStore((s) => s.advanceScene);

  useEffect(() => {
    const t = setTimeout(advanceScene, 6000);
    return () => clearTimeout(t);
  }, [advanceScene]);

  return (
    <div className="fixed inset-0 z-50 bg-void flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="text-center px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: EASING.luxury }}
          className="font-heading text-2xl md:text-3xl text-gold/90 mb-4 leading-relaxed"
          dir="rtl"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-body text-sm text-gold-muted/70 tracking-widest uppercase"
        >
          Bismillahir Rahmani Rahim
        </motion.p>
      </div>
    </div>
  );
}
