"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blessingSchema, type BlessingFormValues } from "@/lib/validations";
import type { Blessing } from "@/types/scene";
import { ScrollScene, FadeReveal } from "@/components/motion/FadeReveal";
import { BloomFlower } from "@/components/motion/BloomFlower";
import { Button } from "@/components/ui/button";

export default function Scene15Blessings() {
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [blooming, setBlooming] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlessingFormValues>({ resolver: zodResolver(blessingSchema) });

  const onSubmit = async (data: BlessingFormValues) => {
    try {
      const res = await fetch("/api/blessings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const blessing: Blessing = res.ok
        ? await res.json()
        : { id: Date.now().toString(), ...data, createdAt: new Date().toISOString() };
      setBlessings((b) => [blessing, ...b]);
    } catch {
      setBlessings((b) => [
        { id: Date.now().toString(), ...data, createdAt: new Date().toISOString() },
        ...b,
      ]);
    }
    setSubmitted(true);
    setBlooming(true);
    reset();
    setTimeout(() => setBlooming(false), 2500);
  };

  return (
    <ScrollScene id="blessings" sceneNumber={15} title="Guest Blessings">
      <p className="font-body text-text-secondary text-center max-w-xl mx-auto mb-12 font-light">
        Leave your wishes and prayers for the newlyweds
      </p>

      <div className="max-w-xl mx-auto w-full">
        <FadeReveal>
          <form onSubmit={handleSubmit(onSubmit)} className="premium-card space-y-6">
            <div>
              <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-text-muted">
                Your Name
              </label>
              <input
                id="name"
                {...register("name")}
                className="w-full mt-2 px-4 py-3 bg-ivory border border-sand/60 rounded-sm font-body focus:outline-none focus:border-gold/50 transition-colors"
              />
              {errors.name && <p className="text-sm text-red-600/80 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="font-body text-xs uppercase tracking-widest text-text-muted">
                Your Blessing
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="w-full mt-2 px-4 py-3 bg-ivory border border-sand/60 rounded-sm font-body resize-none focus:outline-none focus:border-gold/50 transition-colors"
              />
              {errors.message && <p className="text-sm text-red-600/80 mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Blessings"}
            </Button>
          </form>
        </FadeReveal>

        {submitted && (
          <div className="mt-8 text-center">
            <BloomFlower active={blooming} />
            <p className="font-heading text-lg text-gold">Jazakum Allahu Khairan for your blessings.</p>
          </div>
        )}

        {blessings.length > 0 && (
          <div className="mt-10 space-y-4">
            {blessings.map((b, i) => (
              <FadeReveal key={b.id} delay={i * 0.08}>
                <div className="premium-card">
                  <p className="font-heading text-lg text-text-primary">{b.name}</p>
                  <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed">{b.message}</p>
                </div>
              </FadeReveal>
            ))}
          </div>
        )}
      </div>
    </ScrollScene>
  );
}
