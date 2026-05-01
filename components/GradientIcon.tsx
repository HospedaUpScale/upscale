"use client";

import { useId } from "react";
import type { LucideIcon } from "lucide-react";

type GradientIconProps = {
  icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
  /** `muted`: cinzas suaves (ex.: coluna “plataforma”). */
  tone?: "light" | "dark" | "muted";
};

export function GradientIcon({ icon: Icon, className, strokeWidth = 2, tone = "light" }: GradientIconProps) {
  const gid = useId().replace(/:/g, "");
  const gradId = `grad-${gid}`;
  const isDark = tone === "dark";
  const isMuted = tone === "muted";

  return (
    <span className={`relative inline-flex shrink-0 ${isDark ? "icon-glow-dark" : ""}`}>
      <svg width={0} height={0} className="absolute" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            {isMuted ? (
              <>
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </>
            ) : isDark ? (
              <>
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#d8b4fe" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="var(--color-brand-primary)" />
                <stop offset="100%" stopColor="#7c3aed" />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>
      <Icon className={className} stroke={`url(#${gradId})`} strokeWidth={strokeWidth} />
    </span>
  );
}
