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
    extend: {
      // that is animation class
      animation: {
        fadein: "fadeIn 0.5s ease-out forwards",
        shine: "shine 1s",
        infinite_shine: "infinite_shine 3s infinite",
      },
      colors: {
        primary: "#923293",
        secondary: "",
        "gradient-from": "#923293",
        "gradient-to": "#483b97",
      },
      backgroundImage: {
        square:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255, 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
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
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        shine: {
          "100%": { left: "125%" },
        },
        infinite_shine: {
          "40%, 100%": {
            opacity: "0",
            left: "125%",
          },
          "0%": {
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
