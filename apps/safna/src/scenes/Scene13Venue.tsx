"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Car, Landmark } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { SCENE_ASSETS } from "@/lib/assets";
import { ScrollScene, FadeReveal } from "@/components/motion/FadeReveal";
import { Button } from "@/components/ui/button";

export default function Scene13Venue() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <ScrollScene id="venue" sceneNumber={13} title="Venue">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <FadeReveal>
          <div className="premium-card overflow-hidden p-0">
            <motion.div style={{ y }} className="relative h-64 md:h-80 w-full">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f29da48271?w=1200&q=80"
                alt={WEDDING.venue.name}
                fill
                className="object-cover"
                sizes="896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-2xl text-warm-white">{WEDDING.venue.name}</h3>
                <p className="font-body text-warm-white/80 text-sm">{WEDDING.venue.fullAddress}</p>
              </div>
            </motion.div>

            <div className="p-8 md:p-10 space-y-6">
              <FadeReveal>
                <div className="flex items-center gap-3 py-4 border-y border-sand/40">
                  <span className="font-body text-sm text-text-muted">You</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex-1 h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20 origin-left"
                  />
                  <span className="font-body text-sm text-gold">Venue</span>
                </div>
              </FadeReveal>

              <div className="grid gap-4 text-sm">
                <div className="flex gap-3">
                  <Car className="w-5 h-5 text-gold shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-text-primary">Parking</p>
                    <p className="text-text-secondary">{WEDDING.venue.parking}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Landmark className="w-5 h-5 text-gold shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-text-primary">Landmarks</p>
                    <p className="text-text-secondary">{WEDDING.venue.landmarks}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild className="flex-1">
                  <a href={WEDDING.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" /> Google Maps
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href={WEDDING.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" /> Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeReveal>
      </div>
    </ScrollScene>
  );
}
