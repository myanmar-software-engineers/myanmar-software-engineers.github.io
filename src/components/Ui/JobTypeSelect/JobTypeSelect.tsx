"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";

const JOB_TYPE_KEYS = [
  "fullTime",
  "partTime",
  "remote",
  "contract",
  "freelance",
  "internship",
] as const;

interface JobTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function JobTypeSelect({
  value,
  onChange,
  placeholder,
  className,
}: JobTypeSelectProps) {
  const t = useTranslations("jobs");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const options = JOB_TYPE_KEYS.map((key) => ({
    key,
    label: t(`tagOptions.${key}`),
  }));

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(value.toLowerCase()),
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (label: string) => {
    onChange(label);
    setOpen(false);
  };

  const handleInputChange = (newValue: string) => {
    onChange(newValue);
    setOpen(true);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm",
          "bg-white/[0.04] border border-white/[0.08]",
          "hover:border-white/[0.12] transition-all duration-200",
          "focus-within:outline-none focus-within:border-prism-cyan/40 focus-within:ring-1 focus-within:ring-prism-cyan/20",
          open && "border-prism-cyan/40 ring-1 ring-prism-cyan/20",
        )}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder={placeholder || t("formTagPlaceholder")}
          className="flex-1 bg-transparent text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="p-0.5 rounded-md hover:bg-white/[0.08] text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-zinc-600 transition-transform duration-200 shrink-0",
            open && "transform rotate-180",
          )}
        />
      </div>

      <AnimatePresence>
        {open && filteredOptions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute top-full left-0 right-0 z-50 mt-2",
              "rounded-2xl overflow-hidden",
              "bg-surface/95 backdrop-blur-2xl",
              "border border-white/[0.08]",
              "shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.05)]",
              "py-2",
            )}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-prism-cyan/30 to-transparent mb-2" />
            <div className="max-h-64 overflow-y-auto px-1">
              {filteredOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelect(option.label)}
                  className={cn(
                    "w-full px-3 py-2.5 text-sm text-left transition-colors duration-150 rounded-lg",
                    value === option.label
                      ? "bg-prism-cyan/20 text-prism-cyan font-medium"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-zinc-100",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
