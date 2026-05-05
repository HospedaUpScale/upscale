"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExpertCtaLink } from "@/components/ExpertCtaLink";
import { Reveal } from "@/components/Reveal";

function HeroShieldStarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.35 13.05 11l2.95.43-2.14 2.08.51 2.96L12 15.74l-2.37 1.25.5-2.96-2.13-2.08L11 11z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const headlineLineTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

const orbTransition = {
  duration: 20,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function Hero() {
  const [messages, setMessages] = useState(213489789);
  const [companies, setCompanies] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const increment = Math.floor(Math.random() * 24) + 12;
      setMessages((prev) => prev + increment);
      const nextDelay = Math.floor(Math.random() * 250) + 150;
      timeoutId = setTimeout(tick, nextDelay);
    };

    timeoutId = setTimeout(tick, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let current = 0;
    const target = 500;
    const step = Math.ceil(target / 60);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCompanies(target);
        clearInterval(timer);
      } else {
        setCompanies(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-surface-light relative overflow-hidden pt-28 sm:pt-32">
      {/* TODO: Inserir a URL da imagem de 1920x1080 aqui — troque `none` por url('https://...'). */}
      <div
        id="hero-bg-image"
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "none" }}
      />

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute -left-[18%] top-[5%] h-[min(100vw,580px)] w-[min(100vw,580px)] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, rgba(30, 58, 138, 0.02) 45%, transparent 70%)",
          }}
          animate={{ x: [0, 32, -18, 24, 0], y: [0, -28, 22, -14, 0] }}
          transition={orbTransition}
        />
        <motion.div
          className="absolute -right-[12%] top-[22%] h-[min(95vw,540px)] w-[min(95vw,540px)] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 72%)",
          }}
          animate={{ x: [0, -26, 20, -34, 0], y: [0, 24, -20, 16, 0] }}
          transition={{ ...orbTransition, duration: 21 }}
        />
        <motion.div
          className="absolute left-[12%] bottom-[-20%] h-[min(110vw,620px)] w-[min(110vw,620px)] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 48%, transparent 70%)",
          }}
          animate={{ x: [0, -22, 38, -16, 0], y: [0, 18, -32, 12, 0] }}
          transition={{ ...orbTransition, duration: 22 }}
        />
        <motion.div
          className="absolute right-[8%] bottom-[8%] h-[min(75vw,420px)] w-[min(75vw,420px)] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(30, 64, 175, 0.055) 0%, transparent 65%)",
          }}
          animate={{ x: [0, 20, -28, 14, 0], y: [0, -24, 20, -10, 0] }}
          transition={{ ...orbTransition, duration: 19 }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_115%_95%_at_50%_42%,transparent_0%,transparent_52%,rgb(241_245_249/0.35)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[min(48vh,380px)] bg-gradient-to-b from-white/30 via-white/[0.06] to-transparent"
        aria-hidden
      />
      {/* Fade do grid para o fundo sólido da seção seguinte (#F8FAFC) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(32vh,280px)] bg-gradient-to-b from-transparent via-[#F8FAFC]/75 to-[#F8FAFC]"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 text-center sm:px-6 sm:pb-20">
        <div className="hero-pill-banner inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-slate-900/10 p-1.5 pl-1.5 pr-4 backdrop-blur-xl sm:gap-3">
          <span className="relative inline-flex overflow-hidden rounded-full shadow-[0_2px_12px_-4px_rgba(30,58,138,0.45)]">
            <span className="hero-pill-badge-shine" aria-hidden />
            <span className="relative z-10 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              UPSCALE
            </span>
          </span>
          <HeroShieldStarIcon className="h-4 w-4 shrink-0 text-[#0229C4]" />
          <span className="hero-pill-tagline-shine text-left text-xs font-medium sm:text-sm">
            Assessoria especializada em WhatsApp Marketing
          </span>
        </div>

        <h1 className="mt-8 w-full max-w-4xl text-4xl leading-[1.15] sm:text-6xl sm:leading-[1.1]">
          <motion.span
            className="hero-headline-shimmer inline-block font-bold tracking-tighter"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ ...headlineLineTransition, delay: 0.06 }}
          >
            Sua marca conversando
            <br />
            com o cliente de forma
            <br />
            eficiente{" no WhatsApp"}
          </motion.span>
        </h1>

        <Reveal delay={0.08} className="mt-6 w-full max-w-2xl">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Vendas, ativação de base e recuperação no WhatsApp, conduzidas por um time especializado.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-8 w-full sm:mt-10">
          <div id="cta" className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ExpertCtaLink
              href="https://wa.me/5500000000000"
              className="inline-flex items-center gap-2 rounded-full bg-[#0229C4] px-6 py-3 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-brand-hover sm:text-base"
            />
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/65 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition-colors hover:text-brand-primary sm:text-base"
            >
              Conhecer nossos serviços
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex w-full max-w-5xl flex-col items-stretch gap-5 sm:mt-24 sm:flex-row sm:justify-center sm:gap-6">
          <div className="luxury-edge-light w-full rounded-2xl p-px shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:w-[45%] sm:max-w-md">
            <article className="rounded-[15px] border border-slate-100 bg-white px-5 py-4 text-left sm:px-6 sm:py-5">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-slate-600">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#22c55e]" />
                MENSAGENS ENTREGUES EM TEMPO REAL
              </div>
              <p className="mb-1 mt-3 text-5xl font-extrabold tabular-nums tracking-tight text-[#0229C4]">
                {messages.toLocaleString("pt-BR")}
              </p>
              <p className="text-[11px] leading-relaxed text-slate-500">+200 milhões processadas pela nossa operação</p>
            </article>
          </div>

          <div className="luxury-edge-light w-full rounded-2xl p-px shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:w-[45%] sm:max-w-md">
            <article className="rounded-[15px] border border-slate-100 bg-white px-5 py-4 text-left sm:px-6 sm:py-5">
              <div className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-600">EMPRESAS ATENDIDAS</div>
              <p className="mb-1 mt-3 text-5xl font-extrabold tabular-nums tracking-tight text-[#0229C4]">+{companies}</p>
              <p className="text-[11px] leading-relaxed text-slate-500">em todo o Brasil</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
