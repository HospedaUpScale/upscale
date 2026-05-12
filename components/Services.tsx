"use client";

import { motion } from "framer-motion";
import { Check, Megaphone, RefreshCcw, Server, Users } from "lucide-react";
import { CardBorderBeam } from "@/components/CardBorderBeam";
import { ExpertCtaLink } from "@/components/ExpertCtaLink";

const serviceItemListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.065, delayChildren: 0.12 },
  },
};

const serviceItemRowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const serviceCards = [
  {
    id: "recuperacao",
    title: "Recuperação de vendas",
    subtitle: "Nosso time recupera o que sua operação está deixando na mesa",
    icon: RefreshCcw,
    items: [
      {
        title: "Estratégia de régua",
        description: "Desenhamos sequências de mensagens em D+0, D+1 e D+3 sob medida para o seu funil",
      },
      {
        title: "Redação por especialistas",
        description: "Copy e ofertas escritas pelo nosso time, validadas para o seu segmento",
      },
      {
        title: "Execução completa",
        description: "Cuidamos de cada envio, monitorando entrega e resposta",
      },
      {
        title: "Atribuição de receita",
        description: "Reportamos quanto sua empresa recuperou em cada campanha",
      },
    ],
    footer: "Em média, +18% de receita recuperada nos primeiros 30 dias",
  },
  {
    id: "ativacao",
    title: "Ativação de base",
    subtitle: "Reativamos sua base inativa com estratégia e execução",
    icon: Users,
    items: [
      {
        title: "Diagnóstico da base",
        description: "Analisamos seu CRM e segmentamos contatos por potencial de compra",
      },
      {
        title: "Campanhas planejadas",
        description: "Calendário editorial mensal de reengajamento alinhado ao seu negócio",
      },
      {
        title: "Upsell e cross-sell",
        description: "Ofertas relevantes baseadas no histórico real de cada cliente",
      },
      {
        title: "Acompanhamento próximo",
        description: "Reuniões periódicas para revisar resultados e próximas ações",
      },
    ],
    footer: "Bases inteiras reativadas com mensagens contextuais, feitas pelo nosso time",
  },
  {
    id: "vendas",
    title: "Campanhas personalizadas",
    subtitle: "Marketing direto pensado, escrito e disparado por nós",
    icon: Megaphone,
    items: [
      {
        title: "Briefing estratégico",
        description: "Entendemos seu objetivo, público e oferta antes de qualquer envio",
      },
      {
        title: "Templates Meta",
        description: "Cuidamos da aprovação dos templates oficiais junto à Meta para você",
      },
      {
        title: "Mídia e copy",
        description: "Produzimos imagens, vídeos e textos prontos para conversão",
      },
      {
        title: "Testes A/B",
        description: "Otimizamos cada campanha com base nos números reais",
      },
    ],
    footer: "Campanhas que falam com cada cliente como se fossem únicos",
  },
  {
    id: "capacidade",
    title: "Capacidade massiva",
    subtitle: "Operamos volumes que poucas empresas no Brasil suportam",
    icon: Server,
    items: [
      {
        title: "Operação 24/7",
        description: "Time monitorando entregabilidade e performance em tempo real",
      },
      {
        title: "Roteamento inteligente",
        description: "Distribuição de carga para máxima taxa de entrega",
      },
      {
        title: "Throughput corporativo",
        description: "Capacidade preparada para grandes campanhas e datas críticas",
      },
      {
        title: "Relatórios fechados por nós",
        description: "Você recebe os números prontos, com leitura e recomendações",
      },
    ],
    footer: "Mais de 200 milhões de mensagens entregues, e crescendo a cada minuto",
  },
];

type Card = (typeof serviceCards)[number];

function ServiceSpotlightCard({ card }: { card: Card }) {
  const Icon = card.icon;

  return (
    <motion.article
      id={card.id}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] shadow-[0_28px_56px_-22px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-[box-shadow] duration-300 ease-out hover:shadow-[0_36px_72px_-28px_rgba(0,0,0,0.52),0_28px_56px_-20px_rgba(2,41,196,0.14),inset_0_1px_0_0_rgba(255,255,255,0.09)]"
      style={{ scrollMarginTop: "7rem" }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 460, damping: 32 }}
    >
      <CardBorderBeam
        outerRounded="rounded-[2rem]"
        innerRounded="rounded-[calc(2rem-2px)]"
        className="service-card-depth flex min-h-0 flex-1 flex-col p-8 md:p-10"
      >
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div
            className="relative z-[1] mb-6 flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md"
            style={{
              boxShadow:
                "inset 0 3px 10px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <span className="service-icon-beam-halo" aria-hidden />
            <Icon
              className="relative z-[1] h-5 w-5 text-white [filter:drop-shadow(0_0_5px_rgba(255,255,255,0.55))_drop-shadow(0_0_14px_rgba(147,197,253,0.22))]"
              strokeWidth={2}
              aria-hidden
            />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white transition-[background,background-clip,color] duration-300 ease-out group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent">
            {card.title}
          </h3>
          <p className="mb-8 text-sm text-slate-400">{card.subtitle}</p>

          <motion.ul
            className="flex flex-col gap-5"
            variants={serviceItemListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
          >
            {card.items.map((item) => (
              <motion.li key={item.title} variants={serviceItemRowVariants} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#0229C4] [filter:drop-shadow(0_0_4px_rgba(2,41,196,0.55))]"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-bold text-white">{item.title}</span>
                  <span className="mt-1 block text-sm text-slate-400">{item.description}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-auto pt-8">
            <div
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-slate-300 backdrop-blur-lg [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_48px_-20px_rgba(0,0,0,0.5)]"
            >
              {card.footer}
            </div>
          </div>
        </div>
      </CardBorderBeam>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="section-deep-slate relative overflow-hidden py-24 md:py-32">
      <div
        className="comparison-grid-bg pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto mb-16 max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-sky-400">NOSSOS SERVIÇOS</p>
        <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[44px]">
          Uma assessoria completa de WhatsApp Marketing
        </h2>
        <p className="text-lg text-slate-400">
          Quatro frentes de trabalho que nosso time executa para gerar receita previsível através do canal de maior
          engajamento do seu cliente.
        </p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {serviceCards.map((card) => (
          <ServiceSpotlightCard key={card.title} card={card} />
        ))}
      </div>

      <div className="relative z-10 mt-16 flex justify-center">
        <ExpertCtaLink
          href="https://wa.me/5500000000000"
          className="flex items-center gap-3 rounded-full bg-[#0229C4] px-8 py-4 font-semibold text-white shadow-cta transition-colors hover:bg-brand-hover"
          iconClassName="h-4 w-4"
        />
      </div>
    </section>
  );
}
