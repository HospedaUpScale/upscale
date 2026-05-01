"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ExpertCtaLinkProps = {
  href: string;
  className?: string;
  iconClassName?: string;
  /** Reflexo diagonal contínuo (ex.: CTA final em destaque) */
  withShine?: boolean;
};

export function ExpertCtaLink({
  href,
  className,
  iconClassName = "h-3.5 w-3.5",
  withShine = false,
}: ExpertCtaLinkProps) {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href={href}
      className={`relative inline-flex items-center gap-2 overflow-hidden ${className ?? ""}`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {withShine ? (
        <motion.span
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
        >
          <motion.span
            className="absolute top-[-35%] h-[170%] w-[42%] -skew-x-[16deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.14) 52%, transparent 100%)",
            }}
            initial={{ left: "-50%" }}
            animate={{ left: ["-50%", "145%"] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
          />
        </motion.span>
      ) : null}

      <span className="relative z-10 inline-flex items-center gap-2">
        Falar com especialista
        <motion.span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-primary"
          animate={hover ? { scale: [1, 1.06, 1, 1.04, 1] } : { scale: 1 }}
          transition={
            hover
              ? {
                  duration: 0.38,
                  times: [0, 0.2, 0.45, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 1.35,
                  ease: "easeInOut",
                }
              : { duration: 0.2 }
          }
        >
          <motion.span
            animate={hover ? { x: 3, y: -3 } : { x: 0, y: 0 }}
            transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowRight className={`block ${iconClassName}`} />
          </motion.span>
        </motion.span>
      </span>
    </motion.a>
  );
}
