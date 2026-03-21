"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";
import { motion } from "motion/react";
import { Briefcase, Save, Tag, X, Mail, CalendarClock } from "lucide-react";
import AuthGuard from "@/components/Auth/AuthGuard";
import DatePicker from "@/components/Ui/DatePicker/DatePicker";
import { ContentEditor } from "@/components/ContentEditor";
import type { SerializedEditorState } from "@/components/ContentEditor";
import { useJobEditor } from "@/hooks/jobs/useJobEditor";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";
import JobTypeSelect from "@/components/Ui/JobTypeSelect/JobTypeSelect";

const INPUT_CLASS = cn(
  "w-full px-4 py-3 rounded-xl text-sm",
  "bg-white/[0.04] border border-white/[0.08]",
  "text-zinc-200 placeholder:text-zinc-600",
  "focus:outline-none focus:border-prism-cyan/40 focus:ring-1 focus:ring-prism-cyan/20",
  "transition-all duration-200",
);

function TagInput({
  tags,
  onAdd,
  onRemove,
  placeholder = "Add skills (press Enter)",
}: {
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
  placeholder?: string;
}) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = value.trim().toLowerCase();
      if (tag && !tags.includes(tag)) {
        onAdd(tag);
      }
      setValue("");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-prism-cyan/10 text-prism-cyan border border-prism-cyan/20"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              className="hover:text-prism-rose transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
}

function JobWriteForm() {
  const router = useRouter();
  const t = useTranslations("jobs");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";
  const {
    position,
    setPosition,
    tag,
    setTag,
    skills,
    setSkills,
    officeEmail,
    setOfficeEmail,
    expiredAt,
    setExpiredAt,
    setDescription,
    saving,
    error,
    save,
  } = useJobEditor();

  const handleContentChange = useCallback(
    (state: SerializedEditorState) => {
      setDescription(state);
    },
    [setDescription],
  );

  const handleSave = async () => {
    const id = await save();
    if (id) {
      router.push(`/jobs/edit?id=${id}`);
    }
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

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-prism-cyan/20 to-prism-violet/20 border border-white/[0.08]">
              <Briefcase className="w-4.5 h-4.5 text-prism-cyan" />
            </div>
            <h1
              className={cn(
                "text-xl font-semibold font-display text-white tracking-tight",
                mmFont,
              )}
            >
              {t("postNewJob")}
            </h1>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          {/* Position */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              {t("formPosition")}
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder={t("formPositionPlaceholder")}
              className={cn(INPUT_CLASS, "text-lg font-display")}
            />
          </div>

          {/* Tag (Job Type) */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {t("formTag")}
            </label>
            <JobTypeSelect value={tag} onChange={setTag} />
          </div>

          {/* Skills */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              {t("formSkills")}
            </label>
            <TagInput
              tags={skills}
              onAdd={(skill) => setSkills([...skills, skill])}
              onRemove={(skill) => setSkills(skills.filter((s) => s !== skill))}
              placeholder={t("formSkillsPlaceholder")}
            />
          </div>

          {/* Office Email */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              <Mail className="w-3 h-3 inline mr-1" />
              {t("formEmail")}
            </label>
            <input
              type="email"
              value={officeEmail}
              onChange={(e) => setOfficeEmail(e.target.value)}
              placeholder={t("formEmailPlaceholder")}
              className={INPUT_CLASS}
            />
          </div>

          {/* Expiration Date */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              <CalendarClock className="w-3 h-3 inline mr-1" />
              {t("formExpiredAt")}
            </label>
            <DatePicker
              value={expiredAt}
              onChange={setExpiredAt}
              placeholder={t("formExpiredAtPlaceholder")}
            />
            <p
              className={cn(
                "text-[11px] text-zinc-600 mt-1.5 font-mono",
                mmFont,
              )}
            >
              {t("formExpiredAtHint")}
            </p>
          </div>

          {/* Description (Rich Text) */}
          <div>
            <label
              className={cn(
                "block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2",
                mmFont,
              )}
            >
              {t("formDescription")}
            </label>
            <ContentEditor
              value={null}
              onChange={handleContentChange}
              placeholder={t("formDescriptionPlaceholder")}
            />
          </div>

          {/* Error */}
          {error && <p className="text-sm text-prism-rose">{error}</p>}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !position.trim()}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium",
                "bg-prism-cyan text-white",
                "hover:bg-prism-cyan/90 transition-colors duration-200",
                "disabled:opacity-40 disabled:cursor-not-allowed",
              )}
            >
              <Save className="w-4 h-4" />
              <span className={mmFont}>
                {saving ? t("saving") : t("saveDraft")}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function JobWriteClient() {
  return (
    <AuthGuard>
      <JobWriteForm />
    </AuthGuard>
  );
}
