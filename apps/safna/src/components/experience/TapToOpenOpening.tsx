"use client";

import { FEATURES } from "@/lib/features";
import { CardUnfoldOpening } from "./CardUnfoldOpening";
import { VideoOpening } from "./VideoOpening";
import { TapToOpenOpeningLegacy } from "./TapToOpenOpening.legacy";

interface TapToOpenOpeningProps {
  onOpenComplete: () => void;
}

export function TapToOpenOpening(props: TapToOpenOpeningProps) {
  if (FEATURES.useLegacyOpening) {
    return <TapToOpenOpeningLegacy {...props} />;
  }
  if (FEATURES.useVideoOpening) {
    return <VideoOpening {...props} />;
  }
  return <CardUnfoldOpening {...props} />;
}
