"use client";

import { useState, useCallback } from "react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SoundExperience } from "@/components/effects/SoundExperience";
import { OpeningExperience } from "@/components/opening/OpeningExperience";
import { JasminePetals } from "@/components/effects/JasminePetals";
import { CursorPetals } from "@/components/effects/CursorPetals";
import { NightModeProvider } from "@/components/effects/NightModeProvider";
import { HeroSection } from "@/components/chapters/HeroSection";
import { LetterFromSafna } from "@/components/chapters/LetterFromSafna";
import { HerJourney } from "@/components/chapters/HerJourney";
import { TheirStory } from "@/components/chapters/TheirStory";
import { ReceptionDetails } from "@/components/chapters/ReceptionDetails";
import { VenueSection } from "@/components/chapters/VenueSection";
import { FamilySection } from "@/components/chapters/FamilySection";
import { GallerySection } from "@/components/chapters/GallerySection";
import { CountdownSection } from "@/components/chapters/CountdownSection";
import { BlessingsSection } from "@/components/chapters/BlessingsSection";
import { ThankYouSection } from "@/components/chapters/ThankYouSection";

export function InvitationExperience() {
  const [hasStarted, setHasStarted] = useState(false);
  const [openingComplete, setOpeningComplete] = useState(false);

  const handleBegin = useCallback(() => {
    setHasStarted(true);
  }, []);

  const handleOpeningComplete = useCallback(() => {
    setOpeningComplete(true);
  }, []);

  return (
    <SmoothScroll>
      <NightModeProvider />
      <SoundExperience onBegin={handleBegin} hasStarted={hasStarted} />

      {hasStarted && !openingComplete && (
        <OpeningExperience onComplete={handleOpeningComplete} />
      )}

      {hasStarted && openingComplete && (
        <>
          <JasminePetals count={6} active />
          <CursorPetals />
          <main>
            <HeroSection />
            <LetterFromSafna />
            <HerJourney />
            <TheirStory />
            <ReceptionDetails />
            <VenueSection />
            <FamilySection />
            <GallerySection />
            <CountdownSection />
            <BlessingsSection />
            <ThankYouSection />
          </main>
        </>
      )}
    </SmoothScroll>
  );
}
