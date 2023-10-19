import Navbar from "@/components/Common/Navbar/Navbar";
import { bodyFont } from "@/fonts/fonts";
import { cn } from "@/utils";
import styles from "@/styles/styles";
import type { Metadata } from "next";
import APP_CONFIG from "@/config/config";
import Favicons from "@/components/Favicons/Favicons";
// Styles
import "./globals.css";
import Footer from "@/components/Common/Footer/Footer";

export const metadata: Metadata = {
  title: APP_CONFIG.title,
  description:
    "Explore our Job Board, access insightful Tech Articles, showcase your Portfolio, and join a Community that thrives on mutual growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cls = cn(
    styles.gradient,
    bodyFont.className,
    "min-h-screen text-white scroll-smooth"
  );
  return (
    <html lang="en">
      <head>
        <Favicons />
      </head>
      <body className={cls}>
        <Navbar />
        <main className="min-h-[calc(100vh-142px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
