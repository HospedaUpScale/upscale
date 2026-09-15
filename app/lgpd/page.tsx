import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados (LGPD) | Upscale",
  description:
    "Política de Privacidade e Proteção de Dados Pessoais da Upscale LTDA, elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
};

const sections = [
  { id: "introducao", label: "1. Introdução" },
  { id: "definicoes", label: "2. Definições" },
  { id: "coleta", label: "3. Como coletamos seus dados" },
  { id: "finalidades", label: "4. Para que usamos seus dados" },
  { id: "cookies", label: "5. Cookies" },
  { id: "plataformas-terceiros", label: "6. Plataformas e serviços de terceiros" },
  { id: "compartilhamento", label: "7. Com quem compartilhamos seus dados" },
  { id: "bases-legais", label: "8. Bases legais do tratamento" },
  { id: "direitos", label: "9. Seus direitos como titular" },
  { id: "retencao", label: "10. Prazo de retenção" },
  { id: "autoridades", label: "11. Compartilhamento com autoridades públicas" },
  { id: "menores", label: "12. Uso por menores de idade" },
  { id: "mensageria", label: "13. Particularidades dos canais de mensageria" },
  { id: "ia", label: "14. Uso de inteligência artificial" },
  { id: "opt-out", label: "15. Como cancelar o recebimento de mensagens" },
  { id: "seguranca", label: "16. Segurança da informação" },
  { id: "alteracoes", label: "17. Alterações desta política" },
  { id: "contato", label: "18. Contato e encarregado de dados" },
  { id: "foro", label: "19. Legislação aplicável e foro" },
] as const;

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-b border-slate-100 py-10 first:pt-0 last:border-b-0">
      <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900 md:text-xl">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">{children}</div>
    </section>
  );
}

function SidebarNav({ className = "" }: { className?: string }) {
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

export default function LGPDPage() {
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
            <h1 className="mt-6 text-lg font-bold leading-snug text-white">Política de Privacidade</h1>
            <p className="mt-1 text-xs font-medium text-white/40">Proteção de Dados Pessoais (LGPD)</p>
            <div className="mt-6 h-px bg-white/10" />
          </div>

          <details className="border-t border-white/10 px-6 py-4 md:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-white/80">Ver índice do documento</summary>
            <SidebarNav className="mt-4 pb-2" />
          </details>

          <SidebarNav className="hidden px-6 pb-10 md:flex md:px-8" />
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-3xl px-4 py-14 md:px-12 md:py-20">
            <p className="mb-10 text-xs font-medium text-slate-400">Última atualização: 15 de setembro de 2026</p>

            <Section id="introducao" title="1. Introdução">
              <p>
                A <strong className="text-slate-900">Upscale LTDA</strong>, inscrita no CNPJ sob o nº
                63.864.519/0001-38, com sede na Avenida C4, nº 931, Quadra 49, Lote 01/14, Condomínio Terra Office,
                Andar 26, Sala 01-B, Bairro Jardim América, Goiânia/GO, CEP 74265-040 (&quot;Upscale&quot;, &quot;nós&quot; ou
                &quot;nossa empresa&quot;), respeita a privacidade de quem visita nosso site e de quem se relaciona com
                nossos serviços de assessoria em WhatsApp Marketing.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e
                protegemos os dados pessoais de visitantes, leads, clientes e contatos das operações que
                administramos, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais —
                &quot;LGPD&quot;) e demais normas aplicáveis. Ao utilizar nosso site ou fornecer seus dados por qualquer
                canal, você declara estar ciente e de acordo com as práticas descritas neste documento.
              </p>
            </Section>

            <Section id="definicoes" title="2. Definições">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-900">Dado pessoal:</strong> qualquer informação relacionada a
                  pessoa natural identificada ou identificável, como nome, e-mail, telefone e número de WhatsApp.
                </li>
                <li>
                  <strong className="text-slate-900">Dado pessoal sensível:</strong> dado sobre origem racial ou
                  étnica, convicção religiosa, opinião política, filiação sindical, dado de saúde ou vida sexual,
                  dado genético ou biométrico. A Upscale não coleta, de forma intencional, dados sensíveis por meio
                  de seus canais.
                </li>
                <li>
                  <strong className="text-slate-900">Titular:</strong> a pessoa natural a quem se referem os dados
                  pessoais tratados.
                </li>
                <li>
                  <strong className="text-slate-900">Tratamento:</strong> toda operação realizada com dados
                  pessoais, como coleta, produção, recepção, classificação, uso, acesso, armazenamento, eliminação,
                  transmissão e compartilhamento.
                </li>
                <li>
                  <strong className="text-slate-900">Controlador:</strong> a Upscale, quando define as finalidades e
                  a forma do tratamento dos dados coletados em seus próprios canais.
                </li>
                <li>
                  <strong className="text-slate-900">Operador:</strong> a Upscale, quando trata dados pessoais por
                  conta e conforme as instruções de um cliente contratante, no âmbito da prestação do serviço de
                  assessoria em WhatsApp Marketing.
                </li>
              </ul>
            </Section>

            <Section id="coleta" title="3. Como coletamos seus dados">
              <p>Coletamos dados pessoais por meio dos seguintes canais:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Formulários de contato e de captação de leads disponíveis em nosso site;</li>
                <li>Conversas iniciadas por WhatsApp, chatbots e outros canais de atendimento;</li>
                <li>E-mail, telefone ou reuniões comerciais com nossa equipe;</li>
                <li>
                  Dados fornecidos por nossos clientes contratantes, quando atuamos como operadores no tratamento das
                  bases de contatos utilizadas nas campanhas que executamos em nome deles;
                </li>
                <li>Cookies e tecnologias semelhantes de navegação, conforme detalhado na Seção 5.</li>
              </ul>
            </Section>

            <Section id="finalidades" title="4. Para que usamos seus dados">
              <p>Utilizamos os dados pessoais coletados para as seguintes finalidades:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Responder a solicitações de contato e apresentar nossos serviços;</li>
                <li>Elaborar propostas comerciais e formalizar contratos de prestação de serviço;</li>
                <li>Executar, operar e monitorar campanhas de WhatsApp Marketing contratadas por nossos clientes;</li>
                <li>Emitir relatórios de desempenho das campanhas e operações conduzidas;</li>
                <li>Cumprir obrigações legais, regulatórias, contábeis e fiscais;</li>
                <li>Garantir a segurança de nossos sistemas e prevenir fraudes;</li>
                <li>Melhorar a experiência de navegação em nosso site e a qualidade de nossos serviços.</li>
              </ul>
            </Section>

            <Section id="cookies" title="5. Cookies">
              <p>
                Nosso site pode utilizar cookies e tecnologias semelhantes para reconhecer sua visita, lembrar suas
                preferências, viabilizar funcionalidades do site e produzir estatísticas de uso e desempenho. Você
                pode configurar seu navegador para bloquear ou alertar sobre a presença de cookies; a desativação
                pode, no entanto, afetar o funcionamento de algumas partes do site.
              </p>
            </Section>

            <Section id="plataformas-terceiros" title="6. Plataformas e serviços de terceiros">
              <p>
                A operação de nossos serviços envolve o uso de plataformas de terceiros, como a API oficial do
                WhatsApp Business (Meta), ferramentas de automação, provedores de hospedagem e infraestrutura de
                tecnologia. Essas plataformas possuem políticas de privacidade próprias, que recomendamos consultar.
                A Upscale não se responsabiliza por práticas de tratamento de dados realizadas por terceiros fora de
                nossa orientação ou controle.
              </p>
            </Section>

            <Section id="compartilhamento" title="7. Com quem compartilhamos seus dados">
              <p>Podemos compartilhar dados pessoais com:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Prestadores de serviços de tecnologia, hospedagem, automação e mensageria necessários à execução
                  das campanhas (ex.: Meta/WhatsApp Business Platform);
                </li>
                <li>Clientes contratantes, quando a Upscale atua como operadora de suas bases de contatos;</li>
                <li>Consultores, contadores e advogados, quando necessário para o exercício de nossas atividades;</li>
                <li>Autoridades públicas, mediante requisição legal ou determinação judicial.</li>
              </ul>
              <p>
                A Upscale não vende dados pessoais a terceiros e não compartilha dados para finalidades diversas das
                descritas nesta política sem base legal ou consentimento do titular.
              </p>
            </Section>

            <Section id="bases-legais" title="8. Bases legais do tratamento">
              <p>Tratamos dados pessoais com fundamento nas seguintes bases legais previstas na LGPD:</p>
              <div className="overflow-x-auto rounded-2xl border border-slate-100">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-slate-900">
                      <th className="px-4 py-3 font-bold">Finalidade</th>
                      <th className="px-4 py-3 font-bold">Base legal (LGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="px-4 py-3">Execução de contratos de prestação de serviço</td>
                      <td className="px-4 py-3">Art. 7º, V</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Envio de campanhas de WhatsApp Marketing a leads e clientes</td>
                      <td className="px-4 py-3">Art. 7º, I (consentimento) e V (execução de contrato)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Cumprimento de obrigações legais e regulatórias</td>
                      <td className="px-4 py-3">Art. 7º, II</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Legítimo interesse em segurança, prevenção a fraudes e melhoria dos serviços</td>
                      <td className="px-4 py-3">Art. 7º, IX</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Exercício regular de direitos em processos judiciais ou administrativos</td>
                      <td className="px-4 py-3">Art. 7º, VI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section id="direitos" title="9. Seus direitos como titular">
              <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Confirmação da existência de tratamento de seus dados;</li>
                <li>Acesso aos dados pessoais que tratamos sobre você;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa;</li>
                <li>Eliminação dos dados tratados com base em consentimento;</li>
                <li>Revogação do consentimento, a qualquer momento;</li>
                <li>Informação sobre as entidades públicas e privadas com as quais compartilhamos seus dados.</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo canal indicado na Seção 18. Poderemos
                solicitar informações adicionais para confirmar sua identidade antes de atender à solicitação.
              </p>
            </Section>

            <Section id="retencao" title="10. Prazo de retenção">
              <p>
                Mantemos os dados pessoais pelo tempo necessário ao cumprimento das finalidades para as quais foram
                coletados, ao cumprimento de obrigações legais, regulatórias e contratuais, e ao exercício regular de
                direitos em eventuais processos judiciais ou administrativos. Dados de navegação e cookies são
                mantidos por até 5 (cinco) anos, salvo prazo distinto exigido por lei específica. Encerradas as
                finalidades ou expirados os prazos legais aplicáveis, os dados são eliminados ou anonimizados, salvo
                hipóteses legais de conservação.
              </p>
            </Section>

            <Section id="autoridades" title="11. Compartilhamento com autoridades públicas">
              <p>
                Poderemos compartilhar dados pessoais com autoridades públicas, órgãos reguladores ou o Poder
                Judiciário quando exigido por lei, ordem judicial ou requisição de autoridade competente, observados
                os limites e garantias previstos na legislação aplicável.
              </p>
            </Section>

            <Section id="menores" title="12. Uso por menores de idade">
              <p>
                Nossos serviços e canais de contato são destinados a pessoas maiores de 18 (dezoito) anos. Não
                coletamos intencionalmente dados pessoais de crianças ou adolescentes. Caso identifiquemos dados
                pessoais de menores tratados sem o devido consentimento dos responsáveis legais, adotaremos as
                medidas cabíveis para sua eliminação.
              </p>
            </Section>

            <Section id="mensageria" title="13. Particularidades dos canais de mensageria">
              <p>
                Nossos serviços envolvem o envio de mensagens via WhatsApp (incluindo recursos como SMS, RCS e
                funcionalidades de coexistência de números, quando aplicável) por meio da API oficial do WhatsApp
                Business (Meta). O conteúdo das mensagens trocadas pode ser processado por essas plataformas de
                acordo com suas próprias políticas de privacidade e retenção. Recomendamos que você também consulte a
                política de privacidade da Meta/WhatsApp para entender como seus dados são tratados nessas
                plataformas.
              </p>
            </Section>

            <Section id="ia" title="14. Uso de inteligência artificial">
              <p>
                Em algumas operações, utilizamos agentes automatizados e ferramentas de inteligência artificial para
                apoiar o atendimento, a triagem de conversas e a produção de conteúdo das campanhas. Quando aplicável,
                buscamos informar o titular de que está interagindo com um agente automatizado, sendo sempre possível
                solicitar o direcionamento a um atendente humano.
              </p>
            </Section>

            <Section id="opt-out" title="15. Como cancelar o recebimento de mensagens">
              <p>
                Você pode, a qualquer momento, solicitar o descadastramento (opt-out) do recebimento de mensagens e
                campanhas enviadas por meio de nossos canais, respondendo diretamente na conversa com a palavra
                &quot;PARAR&quot; ou &quot;SAIR&quot;, ou entrando em contato pelo canal indicado na Seção 18. O
                cancelamento será processado em prazo razoável, observadas eventuais limitações técnicas das
                plataformas utilizadas.
              </p>
            </Section>

            <Section id="seguranca" title="16. Segurança da informação">
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais sob nossa
                responsabilidade contra acessos não autorizados e situações acidentais ou ilícitas de destruição,
                perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito, incluindo
                controle de acesso e boas práticas de armazenamento. Nenhum sistema é inteiramente livre de riscos;
                caso um incidente de segurança relevante seja identificado, adotaremos as medidas cabíveis e, quando
                exigido por lei, comunicaremos os titulares e a Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </Section>

            <Section id="alteracoes" title="17. Alterações desta política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas
                práticas de tratamento de dados ou na legislação aplicável. A data da última atualização está
                indicada no topo desta página. Recomendamos a revisão periódica deste documento.
              </p>
            </Section>

            <Section id="contato" title="18. Contato e encarregado de dados">
              <p>
                Para dúvidas, solicitações relacionadas a seus dados pessoais ou exercício dos direitos previstos na
                LGPD, entre em contato conosco:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-900">Razão social:</strong> Upscale LTDA — CNPJ 63.864.519/0001-38
                </li>
                <li>
                  <strong className="text-slate-900">E-mail:</strong>{" "}
                  <a href="mailto:contato@upscale.com.br" className="font-semibold text-[#0229C4] hover:underline">
                    contato@upscale.com.br
                  </a>
                </li>
                <li>
                  <strong className="text-slate-900">Endereço:</strong> Avenida C4, nº 931, Quadra 49, Lote 01/14,
                  Cond. Terra Office, Andar 26, Sala 01-B, Bairro Jardim América, Goiânia/GO, CEP 74265-040
                </li>
              </ul>
            </Section>

            <Section id="foro" title="19. Legislação aplicável e foro">
              <p>
                Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, em especial pela
                Lei nº 13.709/2018 (LGPD). Fica eleito o foro da Comarca de Goiânia, Estado de Goiás, para dirimir
                quaisquer controvérsias decorrentes deste documento, com renúncia a qualquer outro, por mais
                privilegiado que seja.
              </p>
            </Section>

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
