import { PT_Mono, Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const titleFont = PT_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const bodyFont = Work_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const titleFontBold = localFont({
  src: "./PT Mono Bold.ttf",
  display: "swap",
});
