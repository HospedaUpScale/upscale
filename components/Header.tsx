"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll();

  const paddingY = useSpring(useTransform(scrollY, [0, 100], [24, 12]), {
    stiffness: 280,
    damping: 32,
    mass: 0.45,
  });

  const bgAlpha = useSpring(useTransform(scrollY, [0, 100], [0.08, 0.8]), {
    stiffness: 280,
    damping: 32,
    mass: 0.45,
  });
  const backgroundColor = useMotionTemplate`rgba(255, 255, 255, ${bgAlpha})`;

  const blurPx = useSpring(useTransform(scrollY, [0, 100], [6, 16]), {
    stiffness: 280,
    damping: 32,
    mass: 0.45,
  });
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  const borderAlpha = useSpring(useTransform(scrollY, [0, 100], [0, 0.5]), {
    stiffness: 280,
    damping: 32,
    mass: 0.45,
  });
  const borderBottom = useMotionTemplate`1px solid rgba(226, 232, 240, ${borderAlpha})`;

  const shadowStrength = useSpring(useTransform(scrollY, [0, 100], [0, 1]), {
    stiffness: 280,
    damping: 32,
    mass: 0.45,
  });
  const boxShadow = useTransform(shadowStrength, (v) =>
    v <= 0.02
      ? "none"
      : `0 1px 2px -1px rgb(15 23 42 / ${0.04 + v * 0.06}), 0 1px 3px 0 rgb(15 23 42 / ${0.03 * v})`,
  );

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottom,
        boxShadow,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Image
            src="/logo-upscale.svg"
            alt="UpScale Logo"
            width={160}
            height={32}
            priority
            className="max-h-7 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {["Serviços", "Método", "Entregas", "Clientes", "FAQ"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-[var(--color-brand-primary)]"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center rounded-full bg-[#0229C4] px-4 py-2 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-brand-hover sm:px-5"
        >
          Falar com especialista
        </a>
      </div>
    </motion.header>
  );
}
