"use client";

import { motion } from "framer-motion";

type BorderBeamProps = {
  roundedClass?: string;
  /** `neon`: fio mais intenso (#0229C4) para vitrines premium */
  variant?: "subtle" | "neon";
};

const beamBackground = {
  subtle:
    "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 248deg, rgb(2 41 196 / 0.65) 292deg, rgb(2 41 196 / 0.2) 312deg, transparent 328deg)",
  neon:
    "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 228deg, rgb(2 41 196 / 0.95) 274deg, rgb(2 41 196 / 0.45) 296deg, rgb(2 41 196 / 0.12) 308deg, transparent 322deg)",
} as const;

export function BorderBeam({ roundedClass = "rounded-[inherit]", variant = "subtle" }: BorderBeamProps) {
  return (
    <span className={`pointer-events-none absolute inset-0 overflow-hidden ${roundedClass}`} aria-hidden>
      <motion.span
        className="absolute left-1/2 top-1/2 block aspect-square w-[220%] min-h-[140%] min-w-[140%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: beamBackground[variant],
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: variant === "neon" ? 4.5 : 3.2, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}
