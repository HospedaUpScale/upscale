"use client";

import { motion } from "framer-motion";
import { BarChart3, HeartHandshake, Lightbulb, PenTool, Send, Workflow } from "lucide-react";
import { CardBorderBeam } from "@/components/CardBorderBeam";

const deliverables = [
  {
    title: "Estratégia comercial",
    description:
      "Especialistas planejam o calendário de campanhas alinhado ao seu funil e datas-chave do seu negócio.",
    icon: Lightbulb,
  },
  {
    title: "Copy e criação",
    description: "Nossa equipe escreve as mensagens, produz mídia e prepara cada campanha para conversão.",
    icon: PenTool,
  },
  {
    title: "Execução dos envios",
    description: "Operamos cada disparo pela API oficial, com monitoramento de entregabilidade em tempo real.",
    icon: Send,
  },
  {
    title: "Automações sob medida",
    description: "Réguas de recuperação, boas-vindas e pós-venda configuradas pelo nosso time para a sua operação.",
    icon: Workflow,
  },
  {
    title: "Relatórios consultivos",
    description: "Você recebe os números fechados, com leitura clara da receita gerada e recomendações.",
    icon: BarChart3,
  },
  {
    title: "Account Manager dedicado",
    description: "Um ponto focal da UpScale acompanhando seu projeto, com reuniões periódicas de resultado.",
    icon: HeartHandshake,
  },
];

const cardShadow =
  "0 24px 48px -20px rgba(0,0,0,0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)";

export default function Deliverables() {
  return (
    <section id="deliverables" className="section-deep-slate relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto mb-16 max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-sky-400">O QUE ENTREGAMOS</p>
        <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[44px]">
          Um time inteiro à disposição da sua operação
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          Da estratégia ao relatório final, tudo conduzido por especialistas da UpScale, para que sua equipe foque no
          que faz a empresa crescer.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl transition-[box-shadow]"
                style={{ boxShadow: cardShadow }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              >
                <CardBorderBeam
                  outerRounded="rounded-3xl"
                  innerRounded="rounded-[calc(1.5rem-2px)]"
                  className="flex h-full flex-col border border-white/10 bg-[#0F172A] p-8 transition-[border-color] group-hover:border-white/[0.14]"
                >
                  <div className="relative z-[1] mb-6 flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    style={{
                      boxShadow:
                        "inset 0 3px 10px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className="service-icon-beam-halo" aria-hidden />
                    <Icon className="relative z-[1] h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </CardBorderBeam>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
