import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Orbitron,
} from "next/font/google";
import localFont from "next/font/local";

const orbFont = Orbitron({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orb",
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFontBase = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const khitHaungg = localFont({
  src: [
    { path: "./khit-haungg/Z20-KhitHaungg-Regular.otf", weight: "400" },
    { path: "./khit-haungg/Z20-KhitHaungg-Medium.otf", weight: "500" },
    { path: "./khit-haungg/Z20-KhitHaungg-SemiBold.otf", weight: "600" },
    { path: "./khit-haungg/Z20-KhitHaungg-Bold.otf", weight: "700" },
  ],
  variable: "--font-myanmar",
  display: "swap",
});

// Backward-compat aliases — existing imports must not break
export const titleFont = displayFont;
export const titleFontBold = displayFont;
export const bodyFont = bodyFontBase;

export { displayFont, bodyFontBase, monoFont, orbFont };
