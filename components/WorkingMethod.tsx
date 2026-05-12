"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { ExpertCtaLink } from "@/components/ExpertCtaLink";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const panelTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as const,
};

const stepsData = [
  {
    id: "01",
    shortTitle: "Diagnóstico",
    badge: "ETAPA 1",
    title: "Entendemos sua operação a fundo",
    description: "Reunião estratégica com nosso time para mapear sua base, objetivos e oportunidades de receita via WhatsApp.",
    items: ["Análise da base e do funil atual", "Definição de metas e KPIs", "Plano de ação personalizado"],
    visualNumber: "01",
    visualText: "DIAGNÓSTICO",
  },
  {
    id: "02",
    shortTitle: "Setup oficial",
    badge: "ETAPA 2",
    title: "Cuidamos de toda a parte técnica para você",
    description:
      "Conduzimos a verificação Meta, ativação do número oficial e aprovação dos templates, sem dor de cabeça para o seu time.",
    items: ["Verificação Meta Business", "Número oficial WhatsApp", "Templates aprovados pela Meta"],
    visualNumber: "02",
    visualText: "SETUP OFICIAL",
  },
  {
    id: "03",
    shortTitle: "Execução",
    badge: "ETAPA 3",
    title: "Nosso time executa cada campanha",
    description:
      "Estratégia, copy, mídia e disparo conduzidos pelos especialistas da UpScale, alinhados ao seu calendário comercial.",
    items: ["Calendário editorial mensal", "Copy e mídia produzidos por nós", "Disparos monitorados em tempo real"],
    visualNumber: "03",
    visualText: "EXECUÇÃO",
  },
  {
    id: "04",
    shortTitle: "Resultado",
    badge: "ETAPA 4",
    title: "Reportamos receita e próximos passos",
    description:
      "Você recebe relatórios fechados com leitura clara dos números, atribuição de receita e recomendações para o próximo ciclo.",
    items: ["Reuniões periódicas de resultado", "Atribuição de receita por campanha", "Recomendações estratégicas"],
    visualNumber: "04",
    visualText: "RESULTADO",
  },
];

export default function WorkingMethod() {
  const [activeTab, setActiveTab] = useState(0);
  const step = stepsData[activeTab];

  return (
    <section id="working-method" className="section-surface-light relative overflow-hidden pt-8 pb-24 md:pt-10 md:pb-32">
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary">NOSSO MÉTODO</p>
        <h2 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-[44px]">
          Como nosso time trabalha com você
        </h2>
        <p className="text-lg text-slate-500">
          Um processo claro, conduzido por especialistas, do diagnóstico ao primeiro relatório de receita.
        </p>
      </div>

      <div className="mb-8 flex justify-center px-4">
        <div className="flex max-w-full flex-col gap-1 rounded-full border border-slate-200 bg-slate-50/50 p-1.5 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.08)] backdrop-blur-md sm:flex-row sm:flex-wrap sm:justify-center">
          {stepsData.map((stepItem, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={stepItem.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-[opacity,box-shadow,transform] duration-200 sm:px-6 ${
                  isActive
                    ? "bg-gradient-to-r from-[#0229C4] via-[#0d4bff] to-[#155eef] font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_4px_22px_-4px_rgba(2,41,196,0.55),0_0_42px_-10px_rgba(2,41,196,0.42)]"
                    : "font-medium text-slate-600 opacity-[0.72] hover:opacity-100 active:scale-[0.98]"
                }`}
              >
                {stepItem.id} · {stepItem.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <article className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 shadow-[0_40px_80px_-28px_rgba(15,23,42,0.14),0_16px_48px_-20px_rgba(2,41,196,0.07)] backdrop-blur-2xl">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.5)_0%,transparent_38%,transparent_62%,rgba(255,255,255,0.18)_100%)]"
            aria-hidden
          />
          <div className="relative z-[1]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex min-h-[400px] flex-col items-center gap-12 p-8 md:p-12 lg:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={panelTransition}
              >
                <div className="w-full">
                  <span className="mb-6 inline-flex items-center rounded-full border border-[#0229C4]/25 bg-[#0229C4]/12 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0229C4] backdrop-blur-sm">
                    {step.badge}
                  </span>
                  <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900">{step.title}</h3>
                  <p className="mb-8 leading-relaxed text-slate-500">{step.description}</p>

                  <motion.ul
                    className="flex flex-col gap-4"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    key={`list-${activeTab}`}
                  >
                    {step.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={listItemVariants}
                        className="flex items-center gap-3 font-medium text-slate-700"
                      >
                        <Check
                          className="h-5 w-5 shrink-0 text-[#0229C4] [filter:drop-shadow(0_0_5px_#0229C4)]"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="relative flex h-[300px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-200/60 lg:w-[400px]">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(2,41,196,0.2)_0%,rgba(2,41,196,0.06)_42%,transparent_72%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-100/40 via-transparent to-slate-300/30"
                    aria-hidden
                  />
                  <span
                    className="method-step-num-shine relative z-10 font-[family-name:var(--font-geist-mono)] text-7xl font-black tabular-nums tracking-tighter md:text-8xl"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {step.visualNumber}
                  </span>
                  <span className="relative z-10 mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {step.visualText}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </article>
      </div>

      <div className="mt-16 flex justify-center">
        <ExpertCtaLink
          href="https://wa.me/5500000000000"
          className="flex items-center gap-3 rounded-full bg-[#0229C4] px-8 py-4 font-semibold text-white shadow-cta transition-colors hover:bg-brand-hover"
          iconClassName="h-4 w-4"
        />
      </div>
    </section>
  );
}
