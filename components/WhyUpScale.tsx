"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Time especializado em WhatsApp Marketing",
  "Operação completa pela API oficial",
  "Estratégia, copy e execução por nós",
  "Account Manager dedicado",
  "Atribuição de receita por campanha",
  "Capacidade massiva de envios",
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyUpScale() {
  return (
    <section className="section-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary">POR QUE UPSCALE</p>
            <h2 className="mb-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-[44px]">
              Mais que ferramenta: um time cuidando da sua receita
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-500">
              Empresas escolhem a UpScale porque querem resultado, não mais um software para administrar. Nossos
              especialistas operam o WhatsApp da sua marca como uma extensão do seu time de marketing.
            </p>

            <motion.div
              className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((item) => (
                <motion.div key={item} variants={cellVariants} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100/50">
                    <Check className="h-5 w-5 shrink-0 text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="luxury-edge-light card-hover-brand-glow relative rounded-3xl p-px shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="relative rounded-[23px] border border-slate-100 bg-white p-8 shadow-xl md:p-12">
              <div className="mb-8 w-max rounded-full bg-[#0229C4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                CLIENTE UPSCALE
              </div>
              <p className="mb-10 text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
                "Contratamos a UpScale como nossa assessoria de WhatsApp e o resultado apareceu nas primeiras semanas. O
                time deles cuida de tudo: estratégia, redação, disparo e relatório. Aumentamos em 32% a receita
                recuperada e triplicamos o engajamento das nossas campanhas."
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0229C4] text-lg font-bold text-white">
                  RS
                </div>
                <div>
                  <p className="font-bold text-slate-900">Renato Santoro</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    DIRETOR DE MARKETING - VERTEX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
