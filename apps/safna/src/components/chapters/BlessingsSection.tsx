"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

interface Blessing {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export function BlessingsSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [blooming, setBlooming] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/blessings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      if (res.ok) {
        const blessing = await res.json();
        setBlessings((prev) => [blessing, ...prev]);
        setSubmitted(true);
        setBlooming(true);
        setName("");
        setMessage("");
        setTimeout(() => setBlooming(false), 2000);
      }
    } catch {
      const localBlessing: Blessing = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };
      setBlessings((prev) => [localBlessing, ...prev]);
      setSubmitted(true);
      setBlooming(true);
      setName("");
      setMessage("");
      setTimeout(() => setBlooming(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChapterWrapper id="blessings" chapterNumber={10} chapterTitle="Blessings">
      <p className="chapter-subtitle text-center mx-auto mb-12">
        Leave your wishes and prayers for the newlyweds
      </p>

      <div className="max-w-xl mx-auto w-full">
        <FadeIn>
          <form onSubmit={handleSubmit} className="premium-card space-y-6">
            <div>
              <label htmlFor="blessing-name" className="font-body text-xs uppercase tracking-widest text-text-muted">
                Your Name
              </label>
              <input
                id="blessing-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 px-4 py-3 bg-ivory border border-sand/60 rounded-sm font-body text-text-primary focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="blessing-message" className="font-body text-xs uppercase tracking-widest text-text-muted">
                Your Blessing
              </label>
              <textarea
                id="blessing-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full mt-2 px-4 py-3 bg-ivory border border-sand/60 rounded-sm font-body text-text-primary focus:outline-none focus:border-gold/50 transition-colors resize-none"
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Blessings"}
            </Button>
          </form>
        </FadeIn>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-center relative"
            >
              {blooming && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  className="mx-auto w-16 h-16 mb-4 relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <motion.div
                        key={deg}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: deg / 1000 }}
                        className="absolute w-4 h-6 bg-sage/50 rounded-full"
                        style={{
                          transform: `rotate(${deg}deg) translateY(-20px)`,
                          transformOrigin: "center 28px",
                        }}
                      />
                    ))}
                    <div className="w-4 h-4 rounded-full bg-gold/60" />
                  </div>
                </motion.div>
              )}
              <p className="font-heading text-lg text-gold">
                Jazakum Allahu Khairan for your blessings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {blessings.length > 0 && (
          <div className="mt-12 space-y-4">
            {blessings.map((b, i) => (
              <FadeIn key={b.id} delay={i * 0.1}>
                <div className="premium-card">
                  <p className="font-heading text-lg text-text-primary">{b.name}</p>
                  <p className="font-body text-text-secondary text-sm mt-2 leading-relaxed">
                    {b.message}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </ChapterWrapper>
  );
}
