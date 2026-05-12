"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { BorderBeam } from "@/components/BorderBeam";

const faqData = [
  {
    question: "A UpScale é uma plataforma ou um serviço?",
    answer:
      "Somos uma assessoria especializada em WhatsApp Marketing. Utilizamos uma infraestrutura tecnológica robusta para entregar nosso serviço, mas o que você contrata é o nosso time de especialistas, que cuida da estratégia, criação, execução e relatórios das suas campanhas.",
  },
  {
    question: "Quanto tempo leva para começar a operar?",
    answer:
      "Para serviço de disparo, em até 2 horas a estrutura já está no ar e pronta para enviar a primeira campanha. Para estrutura de funil completa (réguas, automações, integrações), o prazo é maior e definido caso a caso, conforme a complexidade da operação.",
  },
  {
    question: "Vocês usam a API oficial do WhatsApp?",
    answer:
      "Sim. Operamos pela API oficial do WhatsApp Business (Meta) e por estruturas dedicadas de alto volume. Nosso time conduz o processo completo de verificação e ativação dos números, você não precisa lidar com nada disso.",
  },
  {
    question: "Qual é a capacidade de envio de vocês?",
    answer:
      "Nossa operação está preparada para volumes massivos diários, com mais de 200 milhões de mensagens já entregues e mais de 500 empresas atendidas. Dimensionamos a capacidade conforme a necessidade de cada cliente, com monitoramento 24/7 do nosso time.",
  },
  {
    question: "Quem escreve as mensagens das campanhas?",
    answer:
      "Nosso time de copy e estratégia. Você participa do briefing, valida o tom e os pontos comerciais, e nós cuidamos da redação, criação de mídia, configuração dos botões e produção completa das campanhas.",
  },
  {
    question: "E sobre LGPD e segurança de dados?",
    answer:
      "Somos 100% LGPD-compliant. Dados são criptografados em repouso e em trânsito, com controle granular de acesso e logs completos de auditoria. Operamos exclusivamente com bases opt-in.",
  },
];

const blobTransition = {
  duration: 24,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-surface-light relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -right-[18%] top-[8%] h-[min(88vw,400px)] w-[min(88vw,400px)] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(2, 41, 196, 0.09) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -18, 14, 0], y: [0, 20, -14, 0] }}
          transition={{ ...blobTransition, duration: 21 }}
        />
        <motion.div
          className="absolute -left-[12%] bottom-[12%] h-[min(80vw,360px)] w-[min(80vw,360px)] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.11) 0%, transparent 68%)",
          }}
          animate={{ x: [0, 22, -16, 0], y: [0, -16, 18, 0] }}
          transition={{ ...blobTransition, duration: 27 }}
        />
      </div>

      <div className="relative z-10 mx-auto mb-12 max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#0229C4]">PERGUNTAS FREQUENTES</p>
        <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-[44px]">
          Dúvidas sobre nosso serviço?
        </h2>
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-4 px-4">
        {faqData.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.question}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={
                open
                  ? "luxury-edge-light relative cursor-pointer overflow-hidden rounded-[1.5rem] p-px shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all"
                  : "luxury-edge-light card-hover-brand-glow cursor-pointer overflow-hidden rounded-[1.5rem] p-px shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-[box-shadow]"
              }
            >
              {open ? (
                <>
                  <BorderBeam roundedClass="rounded-[1.5rem]" />
                  <div className="relative rounded-[calc(1.5rem-1px)] border border-slate-100 bg-white p-6 shadow-sm md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-lg font-bold text-slate-900 md:text-xl">{faq.question}</span>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0229C4] text-white">
                        <Minus className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-5 pr-8 text-sm leading-relaxed text-slate-500 md:text-base">{faq.answer}</div>
                  </div>
                </>
              ) : (
                <div className="rounded-[calc(1.5rem-1px)] border border-slate-100 bg-white/90 p-6 backdrop-blur-md transition-colors hover:bg-white md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-bold text-slate-900 md:text-xl">{faq.question}</span>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="relative z-10 mt-12 text-center text-sm text-slate-500 md:text-base">
        Ainda com dúvidas?{" "}
        <a href="#" className="font-semibold text-[#0229C4] hover:underline">
          Fale com nossos especialistas
        </a>
      </p>
    </section>
  );
}
