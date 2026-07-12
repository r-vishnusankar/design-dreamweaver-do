"use client";

import { useEffect } from "react";
import { isAfterSunset } from "@/lib/utils";

export function NightModeProvider() {
  useEffect(() => {
    const apply = () => {
      document.documentElement.classList.toggle("night-mode", isAfterSunset());
    };
    apply();
    const id = setInterval(apply, 60000);
    return () => clearInterval(id);
  }, []);
  return null;
}
