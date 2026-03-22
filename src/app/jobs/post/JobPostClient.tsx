"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/utils";
import { motion } from "motion/react";
import {
  Calendar,
  ArrowLeft,
  Tag,
  Briefcase,
  FileText,
  Mail,
  CalendarClock,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";
import MseLink from "@/components/Ui/MseLink/MseLink";
import { ContentRenderer } from "@/components/ContentEditor";
import { getJobPostBySlug } from "@/lib/firebase/firestore-jobs";
import type { JobPost } from "@/lib/firebase/types";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

type SharePlatform = "facebook" | "twitter" | "linkedin" | "telegram";

function ShareActions({
  shareLabel,
  onShare,
}: {
  shareLabel: string;
  onShare: (platform: SharePlatform) => void;
}) {
  const platforms: Array<{
    platform: SharePlatform;
    label: string;
    icon: IconType;
  }> = [
    { platform: "facebook", label: "Facebook", icon: FaFacebookF },
    { platform: "twitter", label: "Twitter/X", icon: FaXTwitter },
    { platform: "linkedin", label: "LinkedIn", icon: FaLinkedinIn },
    { platform: "telegram", label: "Telegram", icon: FaTelegram },
  ];

  const buttonClassName =
    "w-8 h-8 sm:w-auto sm:h-auto sm:px-2.5 sm:py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-200 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-200 flex items-center justify-center";

  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-zinc-600 mr-1.5">{shareLabel}</span>
      {platforms.map(({ platform, label, icon: Icon }) => (
        <button
          key={platform}
          type="button"
          onClick={() => onShare(platform)}
          className={buttonClassName}
          aria-label={`Share this job on ${label}`}
          title={`Share this job on ${label}`}
        >
          <span aria-hidden="true" className="sm:hidden text-[12px]">
            <Icon />
          </span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}

function JobPostInner() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const t = useTranslations("jobs");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";
  const [post, setPost] = useState<JobPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const data = await getJobPostBySlug(slug);
        if (cancelled) return;
        if (data) {
          setPost(data);
        } else {
          setNotFound(true);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{ borderTopColor: "#22d3ee", borderRightColor: "#a78bfa" }}
          />
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div
            className="mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/[0.06]"
            style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08))" }}
          >
            <FileText className="w-7 h-7 text-zinc-500" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            {t("noJobFound")}
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            This job post may have been removed or is no longer available.
          </p>
          <MseLink
            href="/jobs"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 overflow-hidden"
          >
            <span
              className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                padding: "1.5px",
                background: "linear-gradient(135deg, #22d3ee, #a78bfa, #fb7185)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(167,139,250,0.06), rgba(251,113,133,0.06))" }}
            />
            <ArrowLeft className="relative z-10 w-4 h-4" />
            <span className="relative z-10">Back to Jobs</span>
          </MseLink>
        </motion.div>
      </div>
    );
  }

  const formattedDate = post.publishedAt
    ? post.publishedAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : post.createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

  const getShareLinks = () => {
    const url = window.location.href;
    const text = `Check out this job: ${post.position}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    };
  };

  const openShare = (platform: SharePlatform) => {
    const links = getShareLinks();
    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-20 px-5 relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.05] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, #22d3ee 0%, #a78bfa 40%, transparent 70%)",
          }}
        />
      </div>

      <article className="max-w-3xl mx-auto relative z-10">
        {/* Top bar: back + share */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-10"
        >
          <MseLink
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-wider">{t("allJobs")}</span>
          </MseLink>

          <ShareActions shareLabel={t("share")} onShare={openShare} />
        </motion.div>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-10 rounded-2xl overflow-hidden bg-white/[0.015] border border-white/[0.05] p-6 md:p-8"
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, #22d3ee50, #a78bfa40, #fb718530, transparent 80%)" }}
          />

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {/* Tag badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-prism-cyan/10 text-prism-cyan border border-prism-cyan/20">
              <Briefcase className="w-3 h-3" />
              {post.tag}
            </span>

            <span className="w-0.5 h-0.5 rounded-full bg-zinc-700" />

            {/* Date */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <Calendar className="w-3 h-3 text-prism-cyan" />
              {formattedDate}
            </span>
          </div>

          {/* Position as h1 */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {post.position}
          </h1>

          {/* Skills chips */}
          {post.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.skills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono",
                    "bg-white/[0.03] border border-white/[0.06] text-zinc-500"
                  )}
                >
                  <Tag className="w-2.5 h-2.5 text-prism-cyan/60" />
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Office email + Expiration */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href={`mailto:${post.officeEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-prism-cyan/10 text-prism-cyan border border-prism-cyan/20 hover:bg-prism-cyan/20 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              {post.officeEmail}
            </a>

            {post.expiredAt && (() => {
              const isExpired = post.expiredAt.getTime() < Date.now();
              return (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-mono border",
                    isExpired
                      ? "bg-prism-rose/10 text-prism-rose border-prism-rose/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  )}
                >
                  {isExpired ? <AlertTriangle className="w-3.5 h-3.5" /> : <CalendarClock className="w-3.5 h-3.5" />}
                  {isExpired ? t("expired") : t("expires")}{" "}
                  {post.expiredAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              );
            })()}
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-transparent mb-5" />

          {/* Author row */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full p-[1.5px] shrink-0"
              style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa, #fb7185)" }}
            >
              <span className="block w-full h-full rounded-full overflow-hidden bg-obsidian">
                {post.authorPhotoURL ? (
                  <img
                    src={post.authorPhotoURL}
                    alt={post.authorName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="w-full h-full flex items-center justify-center bg-prism-cyan/15 text-sm font-bold text-prism-cyan uppercase">
                    {(post.authorName ?? "U").charAt(0)}
                  </span>
                )}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">{post.authorName}</p>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{t("postedBy")}</p>
            </div>
          </div>
        </motion.div>

        {/* Spam warning notice */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 rounded-2xl overflow-hidden"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1), rgba(251,191,36,0.15))",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1), rgba(251,191,36,0.15))",
                  "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.2), rgba(245,158,11,0.1))",
                  "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(245,158,11,0.1), rgba(251,191,36,0.15))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative bg-amber-500/[0.04] backdrop-blur-sm border border-amber-500/[0.12] rounded-2xl px-5 py-4">
            {/* Top shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden rounded-t-2xl">
              <motion.div
                className="h-full w-[200%]"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.3) 25%, rgba(245,158,11,0.5) 50%, rgba(251,191,36,0.3) 75%, transparent 100%)",
                }}
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="flex items-start gap-3.5">
              {/* Animated icon container */}
              <motion.div
                className="relative shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(245,158,11,0.08))",
                  border: "1px solid rgba(251,191,36,0.15)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(251,191,36,0)",
                    "0 0 16px rgba(251,191,36,0.1)",
                    "0 0 0px rgba(251,191,36,0)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ rotate: [0, -6, 6, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                </motion.div>

                {/* Orbiting dot */}
                <motion.div
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "rgba(251,191,36,0.6)",
                      boxShadow: "0 0 4px rgba(251,191,36,0.4)",
                      top: -2,
                      left: "50%",
                      marginLeft: -2,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <p className={`text-[12.5px] leading-relaxed text-amber-200/70 ${mmFont}`}>
                  <span className="font-semibold text-amber-300">{t("disclaimerLabel")}</span>{" "}
                  {t("disclaimerText")}
                </p>
              </div>
            </div>

            {/* Bottom decorative gradient line */}
            <motion.div
              className="mt-3 h-[1px] mx-auto max-w-[60%]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.2), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Description content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={khitHaungg.className}
        >
          <ContentRenderer value={post.description} />
        </motion.div>

        {/* Bottom nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/[0.04]"
        >
          <div className="flex items-center justify-between">
            <MseLink
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">{t("allJobs")}</span>
            </MseLink>

            <ShareActions shareLabel={t("share")} onShare={openShare} />
          </div>
        </motion.div>
      </article>
    </div>
  );
}

export default function JobPostClient() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full border-2 border-white/[0.06]" />
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
              style={{ borderTopColor: "#22d3ee", borderRightColor: "#a78bfa" }}
            />
          </div>
        </div>
      }
    >
      <JobPostInner />
    </Suspense>
  );
}
