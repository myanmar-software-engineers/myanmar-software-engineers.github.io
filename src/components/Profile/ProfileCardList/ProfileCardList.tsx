"use client";

import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import Tag from "@/components/Common/Tag/Tag";

import ProfileCardItem from "@/components/Profile/ProfileCardItem/ProfileCardItem";
import { opacityAnimation } from "@/data/animationVariants";
import useProfileHook from "@/hooks/profile/useProfileHook";
import { cn } from "@/utils/index";
import type { Profile } from "content-collections";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { useSearchParams } from "next/navigation";
import { Search, Users, SlidersHorizontal, X, Sparkles, Code2 } from "lucide-react";
import { useRef, useCallback, useState } from "react";
import { useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";

type TPropsProfileCardList = {
  profiles: Profile[];
};

/* ── Hero section header ── */
const HeroSection = ({ totalCount }: { totalCount: number }) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.3, once: true });
  const t = useTranslations("profileHero");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";

  return (
    <div ref={heroRef} className="relative pt-8 pb-4 md:pt-12 md:pb-6">
      {/* Section label */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #22d3ee12, #a78bfa08)",
            border: "1px solid rgba(34,211,238,0.15)",
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Code2 className="w-4 h-4 text-prism-cyan" />
        </motion.div>
        <span className={`font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] ${mmFont}`}>
          {t("label")}
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        className={`relative mb-4 ${mmFont ? "" : "overflow-hidden"}`}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.1) 50%, transparent 100%)",
          }}
          initial={{ x: "-100%" }}
          animate={heroInView ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.h1
          className={`font-bold text-4xl sm:text-5xl md:text-6xl ${mmFont ? `${mmFont} leading-[1.6] py-2 text-prism-cyan` : "font-display leading-[1.15] bg-gradient-to-r from-prism-cyan via-prism-violet to-prism-rose bg-clip-text text-transparent"}`}
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
          {t("title")}
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className={`font-body text-base text-zinc-500 max-w-lg leading-relaxed ${mmFont}`}
        initial={{ opacity: 0, y: 15 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      >
        {t("subtitle", { count: totalCount })}
      </motion.p>

      {/* Decorative divider */}
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

/* ── Prismatic divider line ── */
const PrismDivider = () => (
  <div className="relative h-[1px] my-6">
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #22d3ee20 20%, #a78bfa30 50%, #fb718520 80%, transparent 100%)",
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    />
  </div>
);

/* ── Search bar with cursor-tracking inner glow ── */
const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const glowOpacity = useMotionValue(0);
  const springOpacity = useSpring(glowOpacity, {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={ref}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => glowOpacity.set(1)}
      onMouseLeave={() => glowOpacity.set(0)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Cursor-following glow behind input */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-2xl"
        style={{
          x: useTransform(springX, (v) => v - 80),
          y: useTransform(springY, (v) => v - 40),
          width: 160,
          height: 80,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          opacity: springOpacity,
        }}
      />

      {/* Search icon with breathing animation */}
      <motion.div
        className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10"
        animate={{
          opacity: value ? [1, 1, 1] : [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Search className="w-4 h-4 text-prism-violet" />
      </motion.div>

      <input
        placeholder="Search by name..."
        className={cn(
          "relative z-[1] w-full rounded-xl outline-none py-2.5 pl-10 pr-4 text-zinc-200 text-sm md:min-w-[320px]",
          "bg-surface/80 backdrop-blur-sm border border-white/[0.06]",
          "focus:border-prism-violet/30 focus:bg-surface transition-all duration-300",
          "placeholder:text-zinc-600 font-display"
        )}
        value={value}
        onChange={onChange}
      />

      {/* Bottom accent line on focus */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-[1px] z-[2]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #a78bfa40, transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: value ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

/* ── Profile count badge with animated number ── */
const ProfileCountBadge = ({ count }: { count: number }) => (
  <motion.div
    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/[0.06] bg-surface/50 backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <motion.div
      className="flex items-center justify-center w-6 h-6 rounded-lg"
      style={{
        background: "linear-gradient(135deg, #22d3ee12, #a78bfa12)",
        border: "1px solid rgba(167,139,250,0.15)",
      }}
    >
      <Users className="w-3 h-3 text-prism-cyan" />
    </motion.div>
    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
      Profiles
    </span>
    <motion.span
      key={count}
      className="font-mono text-sm text-prism-violet font-semibold"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {count}
    </motion.span>
  </motion.div>
);

/* ── Active filter pill ── */
const ActiveFilterPill = ({
  tag,
  searchTag,
  bgColor,
  onClick,
}: {
  tag: string;
  searchTag: string;
  bgColor: string;
  onClick: (tag: string) => void;
}) => (
  <Tag
    tag={tag}
    searchTag={searchTag}
    bgColor={bgColor}
    onClick={onClick}
  />
);

/* ── Tag cloud section with collapsible panel ── */
const TagCloud = ({
  uniqueTags,
  uniqueTagColors,
  searchTag,
  handleSearchTag,
}: {
  uniqueTags: string[];
  uniqueTagColors: string[] | undefined;
  searchTag: string;
  handleSearchTag: (tag: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className="relative pt-10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="flex items-center justify-center w-7 h-7 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #fb718512, #a78bfa08)",
            border: "1px solid rgba(251,113,133,0.12)",
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-prism-rose" />
        </motion.div>

        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          Filter by Technology
        </span>

        <motion.button
          className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-zinc-600 hover:text-zinc-400 transition-colors duration-200 border border-transparent hover:border-white/[0.06]"
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.95 }}
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span className="font-mono text-[10px] uppercase tracking-wider">
            {isExpanded ? "Collapse" : "Expand"}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 0 : -90 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <X className="w-3 h-3" />
          </motion.span>
        </motion.button>
      </div>

      {/* Tag cloud with animated collapse */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative p-4 rounded-2xl border border-white/[0.04] bg-surface/30 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.008 }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, #a78bfa, transparent 60%)",
                }}
              />

              <div className="relative">
                {uniqueTagColors?.length &&
                  uniqueTags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      variants={opacityAnimation}
                      className="inline-block"
                    >
                      <Tag
                        tag={tag}
                        searchTag={searchTag}
                        bgColor={uniqueTagColors[i]}
                        onClick={handleSearchTag}
                      />
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProfileCardList = ({ profiles }: TPropsProfileCardList) => {
  const searchParams = useSearchParams();
  const initSearchTag = searchParams.get("tag") ?? "";
  const {
    searchTag,
    uniqueTagColors,
    uniqueTags,
    searchedTags,
    filteredProfiles,
    searchByName,
    handleSearchByName,
    handleSearchTag,
  } = useProfileHook(profiles, initSearchTag);

  return (
    <>
      {/* Hero header */}
      <HeroSection totalCount={profiles.length} />

      {/* Tag cloud section */}
      <TagCloud
        uniqueTags={uniqueTags}
        uniqueTagColors={uniqueTagColors}
        searchTag={searchTag}
        handleSearchTag={handleSearchTag}
      />

      <PrismDivider />

      {/* Search & filter toolbar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <SearchInput value={searchByName} onChange={handleSearchByName} />

        <div className="flex flex-wrap items-center gap-2">
          <ProfileCountBadge count={filteredProfiles.length} />

          {/* Active filter pills */}
          {uniqueTagColors?.length
            ? searchedTags.map((tag, i) => (
                <ActiveFilterPill
                  key={`distincted_${tag}`}
                  tag={tag}
                  searchTag={searchTag}
                  bgColor={uniqueTagColors[i]}
                  onClick={handleSearchTag}
                />
              ))
            : null}
        </div>
      </div>

      <SpacingDivider size="lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {filteredProfiles.map((profile) => (
          <ProfileCardItem
            key={profile._id}
            _id={profile._id}
            name={profile.name}
            image={profile.image}
            slugAsParams={profile.slugAsParams}
            description={profile.description}
            tags={profile.tags}
            searchTag={searchTag}
            handleSearchTag={handleSearchTag}
          />
        ))}
      </div>
    </>
  );
};
export default ProfileCardList;
