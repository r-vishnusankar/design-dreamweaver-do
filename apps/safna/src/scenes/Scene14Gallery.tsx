"use client";

import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ScrollScene } from "@/components/motion/FadeReveal";
import { PageTurn } from "@/components/motion/PageTurn";

export default function Scene14Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <ScrollScene id="gallery" sceneNumber={14} title="Gallery" className="bg-sage-muted/10">
      <p className="font-body text-text-secondary text-center max-w-xl mx-auto mb-12 font-light">
        Moments captured in light and grace — turn the pages
      </p>
      <PageTurn images={GALLERY_IMAGES} index={index} onChange={setIndex} />
    </ScrollScene>
  );
}
