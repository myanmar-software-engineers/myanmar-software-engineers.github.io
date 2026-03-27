import Navbar from "@/components/Common/Navbar/Navbar";
import {
  displayFont,
  bodyFontBase,
  monoFont,
  khitHaungg,
  orbFont,
} from "@/fonts/fonts";
import { cn } from "@/utils";
import styles from "@/styles/styles";
import type { Metadata } from "next";
import APP_CONFIG from "@/config/config";
import Favicons from "@/components/Favicons/Favicons";
// Styles
import "@/styles/globals.scss";
import Footer from "@/components/Common/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";

const SITE_URL = "https://mmswe.com";
const OG_IMAGE = {
  url: `${SITE_URL}/images/mmswe-seo.png`,
  width: 1536,
  height: 1024,
  alt: APP_CONFIG.title,
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: APP_CONFIG.title,
  description: APP_CONFIG.description,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: APP_CONFIG.title,
    description: APP_CONFIG.description,
    siteName: APP_CONFIG.title,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.title,
    description: APP_CONFIG.description,
    images: [OG_IMAGE],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  const cls = cn(
    displayFont.variable,
    bodyFontBase.variable,
    monoFont.variable,
    khitHaungg.variable,
    orbFont.variable,
    styles.gradient,
    "font-body min-h-screen text-zinc-200 scroll-smooth overflow-x-hidden",
  );
  return (
    <html lang={locale} data-theme="obsidian" className="overflow-x-hidden">
      <head>
        <Favicons />
      </head>
      <body className={cls}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <AuthProvider>
              <div className="noise-overlay" />
              <Navbar />
              <main className="min-h-[calc(100vh-142px)] pt-16">
                {children}
              </main>
              <Footer />
            </AuthProvider>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
