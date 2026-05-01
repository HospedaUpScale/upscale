"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const blobTransition = {
  duration: 22,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function Method() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Garante o mudo via software
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Silencia o erro NotAllowed do console, pois o autoPlay do HTML5 tentará assumir
          console.log("Autoplay aguardando interação ou bloqueado pelo browser");
        });
      }
    }
  }, []);

  return (
    <section className="section-surface-light relative overflow-hidden pt-14 pb-8 md:pt-16 md:pb-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-[20%] top-[10%] h-[min(90vw,420px)] w-[min(90vw,420px)] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 68%)",
          }}
          animate={{ x: [0, 24, -16, 0], y: [0, -18, 14, 0] }}
          transition={{ ...blobTransition, duration: 23 }}
        />
        <motion.div
          className="absolute -right-[15%] bottom-[5%] h-[min(85vw,380px)] w-[min(85vw,380px)] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 65%)",
          }}
          animate={{ x: [0, -20, 22, 0], y: [0, 16, -12, 0] }}
          transition={{ ...blobTransition, duration: 26 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
              COMO SUA MENSAGEM CHEGA
            </p>
            <h2 className="mb-5 max-w-lg text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
              A mensagem certa, no formato certo, na hora certa.
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-500">
              Veja um exemplo real de campanha entregue por nós: vídeo de impacto, copy persuasiva e botões de ação
              que aceleram a conversão. Tudo planejado, produzido e disparado pelo nosso time.
            </p>

            <motion.ul
              className="flex flex-col gap-4"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.li variants={itemVariants} className="flex items-center gap-3 font-medium text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-brand-primary" />
                Vídeo, imagem ou GIF criados sob demanda
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3 font-medium text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-brand-primary" />
                Copy escrita por especialistas em conversão
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3 font-medium text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-brand-primary" />
                Botões interativos: link de checkout, WhatsApp ou ligação
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3 font-medium text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-brand-primary" />
                Personalização dinâmica com nome, produto, valor e mais
              </motion.li>
            </motion.ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="relative h-[580px] w-[280px] shrink-0 overflow-hidden rounded-[2.5rem] border-[12px] border-slate-900 bg-slate-900 shadow-2xl md:h-[650px] md:w-[320px] md:rounded-[3rem] md:border-[14px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute left-1/2 top-0 z-20 h-6 w-1/3 -translate-x-1/2 rounded-b-xl bg-slate-900" />
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                {...{ "webkit-playsinline": "true" }}
                preload="auto"
                className="object-cover w-full h-full pointer-events-none select-none"
              >
                <source src="/videos/demo-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <p className="mt-6 max-w-[280px] text-center text-xs leading-relaxed text-slate-400">
              Exemplo real de campanha entregue para a base de clientes da marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
