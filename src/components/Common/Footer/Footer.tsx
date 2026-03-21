"use client";

import { cn } from "@/utils";
import Container from "../Container/Container";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Github, Users, Heart, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";

/* ── Prismatic shimmer line along the footer top ── */
const PrismBorderTop = () => (
  <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
    <motion.div
      className="h-full w-[200%]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #22d3ee 15%, #a78bfa 35%, #fb7185 50%, #a78bfa 65%, #22d3ee 85%, transparent 100%)",
      }}
      animate={{ x: ["-50%", "0%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/* ── Floating ambient orbs ── */
const FloatingOrb = ({
  size,
  color,
  x,
  y,
  delay,
  duration,
}: {
  size: number;
  color: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(60px)",
    }}
    animate={{
      y: [0, -15, 8, -10, 0],
      x: [0, 8, -6, 10, 0],
      scale: [1, 1.1, 0.95, 1.08, 1],
      opacity: [0.15, 0.3, 0.12, 0.25, 0.15],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ── Subtle grid decoration ── */
const GridDecoration = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(167, 139, 250, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(167, 139, 250, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  </div>
);

/* ── Footer nav link ── */
const FooterLink = ({
  href,
  children,
  color = "#a78bfa",
  external = false,
  index,
  isInView,
  mmFont = "",
}: {
  href: string;
  children: React.ReactNode;
  color?: string;
  external?: boolean;
  index: number;
  isInView: boolean;
  mmFont?: string;
}) => {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const Component = external ? "a" : Link;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Component
        href={href}
        {...linkProps}
        className={cn("relative flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-200 py-1", mmFont)}
      >
        <span>{children}</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-3 h-3" style={{ color }} />
        </span>

        {/* Underline reveal on hover */}
        <span
          className="absolute -bottom-0 left-0 right-6 h-[1px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      </Component>
    </motion.div>
  );
};

/* ── Community icon link with orbital glow ── */
const SocialLink = ({
  href,
  icon: Icon,
  label,
  color,
  index,
  isInView,
  mmFont = "",
}: {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  color: string;
  index: number;
  isInView: boolean;
  mmFont?: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center gap-3 py-1.5"
    initial={{ opacity: 0, y: 15 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay: 0.5 + index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {/* Icon container */}
    <div
      className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden group-hover:brightness-125 transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${color}12, ${color}06)`,
        border: `1px solid ${color}20`,
      }}
    >
      <Icon className="w-4 h-4" style={{ color }} />
    </div>

    <span className={cn("text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300", mmFont)}>
      {label}
    </span>

    <span className="opacity-0 group-hover:opacity-70 transition-opacity duration-300">
      <ArrowUpRight className="w-3 h-3" style={{ color }} />
    </span>
  </motion.a>
);

/* ── Heartbeat pulse for the "made with" line ── */
const HeartPulse = () => (
  <motion.span
    className="inline-flex"
    animate={{
      scale: [1, 1.25, 1, 1.2, 1],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    }}
  >
    <Heart className="w-3.5 h-3.5 text-prism-rose fill-prism-rose" />
  </motion.span>
);

/* ── Main Footer ── */
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });
  const t = useTranslations("footer");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";

  return (
    <footer ref={ref} className="relative">
      {/* Animated top border */}
      <PrismBorderTop />

      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-surface/30 to-obsidian pointer-events-none" />
      <GridDecoration />

      <FloatingOrb
        size={200}
        color="#22d3ee"
        x="-8%"
        y="20%"
        delay={0}
        duration={9}
      />
      <FloatingOrb
        size={160}
        color="#a78bfa"
        x="75%"
        y="50%"
        delay={1.5}
        duration={11}
      />
      <FloatingOrb
        size={120}
        color="#fb7185"
        x="90%"
        y="10%"
        delay={3}
        duration={8}
      />

      {/* Content */}
      <Container withPadding className="relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Logo text with prism gradient */}
              <motion.span
                className="inline-block font-display font-bold text-2xl bg-prism-gradient bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                MMSWE
              </motion.span>

              {/* Tagline */}
              <motion.p
                className={cn("mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs", mmFont)}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {t("tagline.prefix")}
                <span className="text-prism-cyan">{t("tagline.innovate")}</span>,{" "}
                <span className="text-prism-violet">{t("tagline.collaborate")}</span>,{" "}
                <span className="text-prism-rose">{t("tagline.build")}</span>
                {t("tagline.suffix")}
              </motion.p>

              {/* Status indicator */}
              <motion.div
                className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-surface/40"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{
                    opacity: [1, 0.4, 1],
                    boxShadow: [
                      "0 0 4px rgba(52,211,153,0.6)",
                      "0 0 8px rgba(52,211,153,0.3)",
                      "0 0 4px rgba(52,211,153,0.6)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className={cn("font-mono text-[10px] text-zinc-500 uppercase tracking-widest", mmFont)}>
                  {t("openSource")}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <motion.h4
              className={cn("font-mono text-[10px] text-zinc-600 uppercase tracking-[0.25em] mb-4", mmFont)}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("navigate")}
            </motion.h4>
            <nav className="flex flex-col gap-1">
              <FooterLink href="/" color="#22d3ee" index={0} isInView={isInView} mmFont={mmFont}>
                {t("home")}
              </FooterLink>
              <FooterLink
                href="/profile"
                color="#a78bfa"
                index={1}
                isInView={isInView}
                mmFont={mmFont}
              >
                {t("profiles")}
              </FooterLink>
              <FooterLink
                href="/profile/editor"
                color="#22d3ee"
                index={2}
                isInView={isInView}
                mmFont={mmFont}
              >
                {t("profileEditor")}
              </FooterLink>
              <FooterLink
                href="/blog"
                color="#fb7185"
                index={3}
                isInView={isInView}
                mmFont={mmFont}
              >
                {t("blog")}
              </FooterLink>
              <FooterLink
                href="/contact-us"
                color="#fbbf24"
                index={4}
                isInView={isInView}
                mmFont={mmFont}
              >
                {t("contactUs")}
              </FooterLink>

              <FooterLink
                href="/jobs"
                color="#fbbf24"
                index={4}
                isInView={isInView}
                mmFont={mmFont}
              >
                {t("jobs")}
              </FooterLink>
            </nav>
          </div>

          {/* Community column */}
          <div className="md:col-span-4">
            <motion.h4
              className={cn("font-mono text-[10px] text-zinc-600 uppercase tracking-[0.25em] mb-4", mmFont)}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {t("community")}
            </motion.h4>
            <div className="flex flex-col gap-1">
              <SocialLink
                href="https://github.com/myanmar-software-engineers"
                icon={Github}
                label={t("github")}
                color="#22d3ee"
                index={0}
                isInView={isInView}
                mmFont={mmFont}
              />
              <SocialLink
                href="https://www.facebook.com/groups/myanmarsoftwareengineers"
                icon={Users}
                label={t("facebook")}
                color="#a78bfa"
                index={1}
                isInView={isInView}
                mmFont={mmFont}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-6 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Prismatic divider */}
          <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #22d3ee20 20%, #a78bfa30 50%, #fb718520 80%, transparent 100%)",
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={cn("text-xs text-zinc-600 font-mono", mmFont)}>
              &copy; {new Date().getFullYear()} {t("copyright")}
            </p>
            <motion.p
              className="flex items-center gap-1.5 text-xs text-zinc-600"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-mono">Built with</span>
              <HeartPulse />
              <span className="font-mono">by the community</span>
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
