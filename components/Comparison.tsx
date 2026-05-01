import { Check, X } from "lucide-react";

const comparisonData = [
  {
    item: "Modelo",
    platform: "Você operando uma ferramenta sozinho",
    upscale: "Time da UpScale operando para você",
  },
  {
    item: "Estratégia",
    platform: "Por sua conta",
    upscale: "Conduzida por especialistas",
  },
  {
    item: "Redação das mensagens",
    platform: "Seu time precisa escrever",
    upscale: "Nossa equipe escreve",
  },
  {
    item: "Setup Meta e templates",
    platform: "Você resolve sozinho",
    upscale: "Cuidamos de ponta a ponta",
  },
  {
    item: "Execução das campanhas",
    platform: "Manual e dependente do seu time",
    upscale: "Operamos cada envio",
  },
  {
    item: "Relatórios",
    platform: "Você precisa interpretar",
    upscale: "Entregamos com leitura e recomendações",
  },
  {
    item: "Capacidade",
    platform: "Limitada à sua estrutura",
    upscale: "Volumes massivos diários",
  },
  {
    item: "Resultado",
    platform: "Depende da sua disponibilidade",
    upscale: "Previsível, com Account Manager",
  },
];

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28 md:py-36">
      <div className="relative z-10 mx-auto mb-20 max-w-3xl px-4 text-center md:mb-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#0229C4]">COMPARATIVO</p>
        <h2 className="mb-6 flex flex-col gap-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[44px]">
          <span>Plataforma sozinha vs.</span>
          <span>Assessoria UpScale</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white">
          A diferença entre comprar uma ferramenta e contratar um time especializado para gerar receita pelo WhatsApp.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.55)]">
          <div className="comparison-beam-ring-mask rounded-[2rem]" aria-hidden>
            <div className="comparison-beam-rotor" />
          </div>

          <div className="relative z-10 m-[2px] rounded-[calc(2rem-2px)] border border-white/10 bg-slate-900/40 backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] table-fixed">
                <colgroup>
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "35%" }} />
                  <col style={{ width: "40%" }} />
                </colgroup>
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-8 py-6 text-left text-xs font-bold uppercase tracking-widest text-white">
                      ITEM
                    </th>
                    <th className="px-8 py-6 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      PLATAFORMA SOZINHA
                    </th>
                    <th className="px-8 py-6 text-left">
                      <span className="text-xs font-medium uppercase tracking-wider text-white">
                        ASSESSORIA UPSCALE
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr
                      key={row.item}
                      className="group border-b border-white/10 transition-colors last:border-0 hover:bg-white/[0.04]"
                    >
                      <td className="px-8 py-6 align-top text-sm font-semibold text-white md:text-base">{row.item}</td>
                      <td className="px-8 py-6 align-top">
                        <div className="flex items-start gap-3">
                          <span className="flex w-8 shrink-0 justify-start pt-0.5">
                            <X className="h-4 w-4 shrink-0 text-slate-500" strokeWidth={2} aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1 text-left text-sm leading-snug text-slate-400 md:text-base">
                            {row.platform}
                          </span>
                        </div>
                      </td>
                      <td className="border-l-2 border-transparent px-8 py-6 align-top transition-colors group-hover:border-[#0229C4]/80">
                        <div className="flex items-start gap-3">
                          <span className="flex w-8 shrink-0 justify-start pt-0.5">
                            <Check
                              className="h-4 w-4 shrink-0 text-[#0229C4] [filter:drop-shadow(0_0_5px_#0229C4)]"
                              strokeWidth={2}
                              aria-hidden
                            />
                          </span>
                          <span className="min-w-0 flex-1 text-left text-sm font-medium leading-snug text-white md:text-base">
                            {row.upscale}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
