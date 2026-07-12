import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scenes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/experience/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        champagne: "#F5EDE3",
        "warm-white": "#FFFEF9",
        sage: "#B8C4B0",
        "sage-muted": "#D4DDD0",
        gold: "#C4A962",
        "gold-muted": "#D4C4A0",
        sand: "#E8DFD0",
        "floral-blue": "#8FAFC9",
        "floral-blue-light": "#B8CFE0",
        "floral-blush": "#E8D4D0",
        "floral-pink": "#D4A5A5",
        "paper-cream": "#F7F3EE",
        "night-sky": "#1A2433",
        "text-primary": "#2C2825",
        "text-secondary": "#6B6560",
        "text-muted": "#9A948C",
        "kerala-green": "#7A8B72",
        void: "#0A0908",
        "brown-warm": "#5C4F47",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        subheading: ["var(--font-playfair)", "Georgia", "serif"],
        accent: ["var(--font-great-vibes)", "cursive"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(44, 40, 37, 0.06)",
        lifted: "0 8px 32px rgba(44, 40, 37, 0.10)",
        envelope: "0 20px 60px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "petal-fall": "petalFall 15s linear infinite",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "blur-reveal": "blurReveal 1.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurReveal: {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      backgroundImage: {
        "geometric-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A962' fill-opacity='0.04'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
