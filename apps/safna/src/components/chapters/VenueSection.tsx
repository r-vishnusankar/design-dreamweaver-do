"use client";

import Image from "next/image";
import { MapPin, Navigation, Car, Landmark } from "lucide-react";
import { WEDDING } from "@/lib/constants";
import { ChapterWrapper, FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

export function VenueSection() {
  return (
    <ChapterWrapper id="venue" chapterNumber={6} chapterTitle="Venue">
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn blur>
          <div className="premium-card overflow-hidden p-0">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f29da48271?w=1200&q=80"
                alt={WEDDING.venue.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-2xl md:text-3xl text-warm-white">
                  {WEDDING.venue.name}
                </h3>
                <p className="font-body text-warm-white/80 text-sm mt-1">
                  {WEDDING.venue.fullAddress}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-sm font-medium text-text-primary">Address</p>
                  <p className="font-body text-sm text-text-secondary mt-1">
                    {WEDDING.venue.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-sm font-medium text-text-primary">Parking</p>
                  <p className="font-body text-sm text-text-secondary mt-1">
                    {WEDDING.venue.parking}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Landmark className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-sm font-medium text-text-primary">
                    Nearby Landmarks
                  </p>
                  <p className="font-body text-sm text-text-secondary mt-1">
                    {WEDDING.venue.landmarks}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="flex-1">
                  <a href={WEDDING.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Google Maps
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href={WEDDING.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </ChapterWrapper>
  );
}
