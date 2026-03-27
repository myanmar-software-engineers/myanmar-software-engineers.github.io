import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/profile/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{ts, tsx}",
    "./src/utils/**/*.{ts, tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        myanmar: [
          "var(--font-myanmar)",
          "Padauk",
          "Noto Sans Myanmar",
          "sans-serif",
        ],
        orb: ["var(--font-orb)", "sans-serif"],
      },
      colors: {
        // Obsidian Prism palette
        obsidian: "#09090b",
        surface: {
          DEFAULT: "#1a1a22",
          light: "#232330",
        },
        prism: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          rose: "#fb7185",
        },
        accent: {
          gold: "#fbbf24",
        },
        // Legacy compat
        primary: "#a78bfa",
        "gradient-from": "#a78bfa",
        "gradient-to": "#22d3ee",
      },
      animation: {
        fadein: "fadeIn 0.5s ease-out forwards",
        shine: "shine 1s",
        infinite_shine: "infinite_shine 3s infinite",
      },
      backgroundImage: {
        "prism-gradient":
          "linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #fb7185 100%)",
        square:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255, 0.06)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shine: {
          "100%": { left: "125%" },
        },
        infinite_shine: {
          "40%, 100%": { opacity: "0", left: "125%" },
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        obsidian: {
          primary: "#a78bfa",
          secondary: "#22d3ee",
          accent: "#fb7185",
          neutral: "#1a1a22",
          "base-100": "#09090b",
          info: "#22d3ee",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#fb7185",
        },
      },
    ],
  },
};
export default config;
