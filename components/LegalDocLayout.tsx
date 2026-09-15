import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export type LegalSectionLink = {
  id: string;
  label: string;
};

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-b border-slate-100 py-10 first:pt-0 last:border-b-0">
      <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900 md:text-xl">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">{children}</div>
    </section>
  );
}

function SidebarNav({
  sections,
  className = "",
}: {
  sections: readonly LegalSectionLink[];
  className?: string;
}) {
  return (
    <nav className={`flex flex-col gap-1 ${className}`}>
      {sections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="rounded-lg px-2 py-2 text-sm text-white/55 transition-colors hover:bg-white/5 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function LegalDocLayout({
  title,
  subtitle,
  sections,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  sections: readonly LegalSectionLink[];
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row">
        <aside className="shrink-0 bg-zinc-900 md:sticky md:top-0 md:h-screen md:w-80 md:overflow-y-auto">
          <div className="px-6 py-8 md:px-8 md:py-10">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-upscale.svg"
                alt="UpScale Logo"
                width={150}
                height={40}
                className="h-7 w-auto object-contain object-left brightness-0 invert"
              />
            </Link>
            <h1 className="mt-6 text-lg font-bold leading-snug text-white">{title}</h1>
            <p className="mt-1 text-xs font-medium text-white/40">{subtitle}</p>
            <div className="mt-6 h-px bg-white/10" />
          </div>

          <details className="border-t border-white/10 px-6 py-4 md:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-white/80">Ver índice do documento</summary>
            <SidebarNav sections={sections} className="mt-4 pb-2" />
          </details>

          <SidebarNav sections={sections} className="hidden px-6 pb-10 md:flex md:px-8" />
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-3xl px-4 py-14 md:px-12 md:py-20">
            <p className="mb-10 text-xs font-medium text-slate-400">Última atualização: {lastUpdated}</p>

            {children}

            <div className="mt-4 flex justify-center pt-6">
              <Link href="/" className="text-sm font-semibold text-[#0229C4] hover:underline">
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
