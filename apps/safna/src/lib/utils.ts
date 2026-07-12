import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCountdownValue(value: number): string {
  return value.toString().padStart(2, "0");
}

export function isAfterSunset(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 18 || hour < 6;
}
