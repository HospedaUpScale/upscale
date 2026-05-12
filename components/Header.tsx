"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Vendas", href: "#vendas" },
  { label: "Ativação", href: "#ativacao" },
  { label: "Recuperação", href: "#recuperacao" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-10">
        <Link href="/" className="block shrink-0">
          <span className="relative block h-6 w-[90px] md:h-8 md:w-[120px]">
            <Image src="/logo-upscale.svg" alt="UpScale Logo" fill priority className="block object-contain object-left" />
          </span>
        </Link>

        <nav className="mx-3 flex flex-row items-center gap-3 md:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[10px] font-semibold tracking-tight text-slate-700 transition-colors hover:text-[#0229C4] sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="shrink-0 rounded-full bg-[#0229C4] px-3 py-2 text-[10px] font-semibold text-white shadow-cta transition-colors hover:bg-brand-hover sm:px-4 sm:text-sm"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}
