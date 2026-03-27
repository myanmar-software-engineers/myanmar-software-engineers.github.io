"use client";

import { khitHaungg } from "@/fonts/fonts";
import { useLanguage } from "@/hooks/useLanguage";
import { LucideIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import { CSSProperties, useRef } from "react";

type FloatingIconConfig = {
  Icon: LucideIcon;
  className: string;
  style: CSSProperties;
  delay: number;
  sizeClass: string;
};

type SectionHeroProps = {
  label: string;
  title: string;
  subtitle: string;
  labelIcon: LucideIcon;
  labelIconClassName: string;
  labelChipBackground: string;
  labelChipBorder: string;
  shimmerBackground: string;
  myanmarTitleColorClass: string;
  floatingIcons: FloatingIconConfig[];
};

const SectionHero = ({
  label,
  title,
  subtitle,
  labelIcon: LabelIcon,
  labelIconClassName,
  labelChipBackground,
  labelChipBorder,
  shimmerBackground,
  myanmarTitleColorClass,
  floatingIcons,
}: SectionHeroProps) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.3, once: true });
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";

  return (
    <div ref={heroRef} className="relative pt-8 pb-4 md:pt-12 md:pb-6">
      {floatingIcons.map(({ Icon, className, style, delay, sizeClass }, index) => (
        <motion.div
          key={`${Icon.displayName ?? "icon"}-${index}`}
          className={`absolute pointer-events-none ${className}`}
          initial={{ opacity: 0, y: 8 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6, delay }}
          style={style}
        >
          <Icon className={sizeClass} />
        </motion.div>
      ))}

      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{
            background: labelChipBackground,
            border: labelChipBorder,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <LabelIcon className={`w-4 h-4 ${labelIconClassName}`} />
        </motion.div>
        <span
          className={`font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] ${mmFont}`}
        >
          {label}
        </span>
      </motion.div>

      <motion.div
        className={`relative mb-4 ${mmFont ? "" : "overflow-hidden"}`}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: shimmerBackground }}
          initial={{ x: "-100%" }}
          animate={heroInView ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.h1
          className={`font-bold text-4xl sm:text-5xl md:text-6xl ${
            mmFont
              ? `${mmFont} leading-[1.6] py-2 ${myanmarTitleColorClass}`
              : "font-display leading-[1.15] bg-gradient-to-r from-prism-cyan via-prism-violet to-prism-rose bg-clip-text text-transparent"
          }`}
          initial={{ y: 50, opacity: 0, filter: "blur(6px)" }}
          animate={
            heroInView
              ? { y: 0, opacity: 1, filter: "blur(0px)" }
              : { y: 50, opacity: 0, filter: "blur(6px)" }
          }
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {title}
        </motion.h1>
      </motion.div>

      <motion.p
        className={`font-body text-base text-zinc-500 max-w-lg leading-relaxed ${mmFont}`}
        initial={{ opacity: 0, y: 15 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="mt-8 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, #22d3ee15, #a78bfa25, #fb718515, transparent 80%)",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={heroInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionHero;
