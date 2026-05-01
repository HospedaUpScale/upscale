"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { ExpertCtaLink } from "@/components/ExpertCtaLink";
import { GradientIcon } from "@/components/GradientIcon";

export default function FinalCTA() {
  return (
    <section className="section-deep-slate relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(2,41,196,0.18),transparent_55%)]"
        aria-hidden
      />
      {/* Glow brand atrás do card — emissão de luz */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(520px,88vw)] w-[min(920px,96vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0229C4]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="luxury-edge-dark rounded-[3rem] p-px shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]">
          <div
            className="relative flex flex-col overflow-hidden rounded-[calc(3rem-1px)] border border-white/25 bg-white/80 p-12 text-center backdrop-blur-2xl md:p-20"
            style={{
              boxShadow:
                "0 28px 90px -24px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(255, 255, 255, 0.12) inset, inset 0 1px 0 0 rgba(255, 255, 255, 0.65)",
            }}
          >
            {/* Reflexo diagonal — ciclo 5s */}
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(3rem-1px)]"
              aria-hidden
            >
              <motion.div
                className="absolute top-[-35%] h-[185%] w-[50%] -skew-x-[20deg]"
                style={{
                  background:
                    "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.08) 60%, transparent 100%)",
                }}
                initial={{ left: "-55%" }}
                animate={{ left: ["-55%", "130%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] backdrop-blur-md">
                <GradientIcon icon={Handshake} className="h-6 w-6" strokeWidth={1.75} />
              </div>

              <h2 className="glass-cta-headline-shine mb-6 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl">
                Vamos cuidar do seu WhatsApp Marketing.
              </h2>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                Converse com um especialista da UpScale. Vamos entender sua operação, apresentar o método e mostrar como
                nosso time pode gerar receita previsível pelo WhatsApp da sua marca.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <ExpertCtaLink
                  href="https://wa.me/5500000000000"
                  withShine
                  className="rounded-full bg-[#0229C4] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_36px_-6px_rgba(2,41,196,0.55),0_4px_16px_-4px_rgba(2,41,196,0.35)] transition-colors hover:bg-brand-hover sm:text-base"
                />
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/50 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition-colors hover:text-[#0229C4] sm:text-base"
                >
                  Conhecer nossos serviços
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
