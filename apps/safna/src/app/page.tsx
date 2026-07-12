import { CinematicExperience } from "@/components/experience/CinematicExperience";
import { NightModeProvider } from "@/components/layout/NightModeProvider";
import { SampleWatermark } from "@/components/SampleWatermark";

export default function Page() {
  return (
    <>
      <SampleWatermark />
      <NightModeProvider />
      <CinematicExperience />
    </>
  );
}
