"use client";

import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils";
import { LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/hooks/useLanguage";
import { khitHaungg } from "@/fonts/fonts";

export default function SignInButton({ className }: { className?: string }) {
  const { signInWithGoogle } = useAuth();
  const t = useTranslations("auth");
  const { isMyanmar } = useLanguage();
  const mmFont = isMyanmar ? khitHaungg.className : "";

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className={cn(
        "group relative inline-flex min-w-[7.5rem] items-center justify-center gap-1.5 whitespace-nowrap px-3.5 py-1.75 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden",
        "text-zinc-300 hover:text-white transition-all duration-300",
        className
      )}
    >
      {/* Gradient border */}
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
      {/* Hover fill */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(167,139,250,0.06), rgba(251,113,133,0.06))" }}
      />
      <LogIn className="relative z-10 w-3.5 h-3.5" />
      <span className={cn("relative z-10", mmFont)}>{t("signIn")}</span>
    </button>
  );
}
