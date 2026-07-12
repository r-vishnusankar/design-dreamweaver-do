"use client";

import { useEffect } from "react";
import { isAfterSunset } from "@/lib/utils";

export function NightModeProvider() {
  useEffect(() => {
    const applyNightMode = () => {
      if (isAfterSunset()) {
        document.documentElement.classList.add("night-mode");
      } else {
        document.documentElement.classList.remove("night-mode");
      }
    };

    applyNightMode();
    const interval = setInterval(applyNightMode, 60000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
