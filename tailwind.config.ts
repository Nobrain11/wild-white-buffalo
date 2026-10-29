import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#05070f",
        "near-black": "#0a0c14",
        ice: "#e8f4ff",
        silver: "#a8b8c8",
        cyan: {
          DEFAULT: "#00e5ff",
          electric: "#00f0ff",
          deep: "#00b8d4",
        },
        violet: {
          DEFAULT: "#7c3aed",
          deep: "#4c1d95",
          glow: "#a78bfa",
        },
        charcoal: "#1a1d2e",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "energy-flow": "energy-flow 12s ease-in-out infinite",
        "particle-float": "particle-float 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "energy-flow": {
          "0%, 100%": { transform: "translateX(-5%) translateY(0)" },
          "50%": { transform: "translateX(5%) translateY(-2%)" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0.4" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-100vh) rotate(360deg)", opacity: "0.2" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
