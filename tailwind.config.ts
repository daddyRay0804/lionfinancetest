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
        lion: {
          gold: "#c9a227",
          dark: "#1a1a2e",
          navy: "#16213e",
          cream: "#f5f0e8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-hint": "bounceHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceHint: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(22, 33, 62, 0.08)",
        "card-hover": "0 4px 12px rgba(22, 33, 62, 0.12)",
        button: "0 2px 8px rgba(201, 162, 39, 0.35)",
      },
      borderRadius: {
        financial: "10px",
        "financial-lg": "14px",
      },
    },
  },
  plugins: [],
};

export default config;
