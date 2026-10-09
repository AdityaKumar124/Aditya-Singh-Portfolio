import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#02040a",
          dark: "#050814",
          surface: "#090d21",
          card: "rgba(10, 16, 37, 0.75)",
          border: "rgba(56, 189, 248, 0.15)",
          borderActive: "rgba(59, 130, 246, 0.45)",
          blue: "#0066ff",
          blueGlow: "#3b82f6",
          cyan: "#00f0ff",
          cyanGlow: "#06b6d4",
          violet: "#8b5cf6",
          violetGlow: "#a855f7",
          text: "#f1f5f9",
          muted: "#94a3b8",
          subtle: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
        "neural-glow":
          "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.15), rgba(139, 92, 246, 0.08) 50%, transparent 80%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "radar-sweep": "radarSweep 4s linear infinite",
        filament: "filamentPulse 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(0, 102, 255, 0.3))" },
          "100%": { opacity: "0.9", filter: "drop-shadow(0 0 25px rgba(0, 240, 255, 0.6))" },
        },
        radarSweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        filamentPulse: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "0.8" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
