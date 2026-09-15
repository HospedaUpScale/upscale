import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocLayout, LegalSection } from "@/components/LegalDocLayout";

export const metadata: Metadata = {
  title: "Termos de Uso e de Vendas | Upscale",
  description:
    "Termos de Uso e de Vendas da Upscale LTDA para os serviços de assessoria em WhatsApp Marketing: condições de contratação, pagamento, cancelamento e responsabilidades.",
};

const sections = [
  { id: "aceitacao", label: "1. Aceitação dos termos" },
  { id: "definicoes", label: "2. Definições" },
  { id: "sobre", label: "3. Sobre a Upscale e os serviços" },
  { id: "contratacao", label: "4. Contratação e propostas comerciais" },
  { id: "pagamento", label: "5. Preços, pagamento e faturamento" },
  { id: "vigencia", label: "6. Vigência, renovação e cancelamento" },
  { id: "reembolso", label: "7. Política de reembolso" },
  { id: "obrigacoes-cliente", label: "8. Obrigações do cliente" },
  { id: "obrigacoes-upscale", label: "9. Obrigações da Upscale" },
  { id: "whatsapp-conformidade", label: "10. Uso do WhatsApp Business e conformidade" },
  { id: "propriedade-intelectual", label: "11. Propriedade intelectual" },
  { id: "confidencialidade", label: "12. Confidencialidade" },
  { id: "resultados", label: "13. Resultados e ausência de garantias" },
  { id: "responsabilidade", label: "14. Limitação de responsabilidade" },
  { id: "rescisao", label: "15. Rescisão do contrato" },
  { id: "dados-pessoais", label: "16. Proteção de dados pessoais" },
  { id: "alteracoes", label: "17. Alterações destes termos" },
  { id: "contato", label: "18. Contato" },
  { id: "foro", label: "19. Legislação aplicável e foro" },
] as const;

export default function TermosDeUsoPage() {
  return (
    <LegalDocLayout
      title="Termos de Uso e de Vendas"
      subtitle="Condições Gerais de Contratação"
      sections={sections}
      lastUpdated="15 de setembro de 2026"
    >
      <LegalSection id="aceitacao" title="1. Aceitação dos termos">
        <p>
          Estes Termos de Uso e de Vendas (&quot;Termos&quot;) regem o acesso e o uso do site da{" "}
          <strong className="text-slate-900">Upscale LTDA</strong>, inscrita no CNPJ sob o nº 63.864.519/0001-38,
          com sede na Avenida C4, nº 931, Quadra 49, Lote 01/14, Condomínio Terra Office, Andar 26, Sala 01-B,
          Bairro Jardim América, Goiânia/GO, CEP 74265-040 (&quot;Upscale&quot;, &quot;nós&quot; ou &quot;nossa
          empresa&quot;), bem como a contratação de nossos serviços de assessoria em WhatsApp Marketing.
        </p>
        <p>
          Ao navegar em nosso site, preencher um formulário, iniciar uma conversa com nosso time ou assinar uma
          proposta comercial, você (&quot;cliente&quot; ou &quot;você&quot;) declara ter lido, compreendido e
          aceitado integralmente estes Termos. Caso não concorde com alguma condição aqui prevista, recomendamos
          que não utilize nosso site nem contrate nossos serviços.
        </p>
      </LegalSection>

      <LegalSection id="definicoes" title="2. Definições">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-900">Serviços:</strong> a assessoria em WhatsApp Marketing prestada pela
            Upscale, incluindo estratégia, redação, execução e relatórios de campanhas de vendas, ativação de base
            e recuperação de vendas.
          </li>
          <li>
            <strong className="text-slate-900">Cliente:</strong> a pessoa física ou jurídica que contrata os
            Serviços junto à Upscale.
          </li>
          <li>
            <strong className="text-slate-900">Proposta comercial:</strong> documento que detalha escopo, prazo,
            preço e condições específicas de cada contratação, prevalecendo sobre estes Termos em caso de conflito
            direto quanto a essas condições.
          </li>
          <li>
            <strong className="text-slate-900">Base de contatos:</strong> lista de leads, clientes ou usuários
            fornecida pelo cliente para o envio de campanhas via WhatsApp.
          </li>
          <li>
            <strong className="text-slate-900">Plataforma:</strong> a API oficial do WhatsApp Business (Meta) e as
            demais ferramentas de automação e mensageria utilizadas pela Upscale na execução dos Serviços.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="sobre" title="3. Sobre a Upscale e os serviços">
        <p>
          A Upscale é uma empresa de assessoria especializada em WhatsApp Marketing, atuando com estratégia,
          execução e relatórios conduzidos por nosso time. Nossos serviços se organizam, em regra, em três frentes:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-900">Vendas:</strong> campanhas de prospecção e conversão via WhatsApp;
          </li>
          <li>
            <strong className="text-slate-900">Ativação:</strong> reativação de bases inativas do cliente;
          </li>
          <li>
            <strong className="text-slate-900">Recuperação:</strong> réguas de recuperação de vendas e carrinhos
            abandonados.
          </li>
        </ul>
        <p>
          O escopo exato de cada contratação — incluindo entregáveis, prazos, metas e indicadores acompanhados — é
          definido na proposta comercial aceita pelo cliente.
        </p>
      </LegalSection>

      <LegalSection id="contratacao" title="4. Contratação e propostas comerciais">
        <p>
          A contratação dos Serviços se formaliza mediante aceite de proposta comercial específica, por assinatura
          eletrônica, troca de e-mails ou outro meio equivalente que comprove a manifestação de vontade do cliente.
          A proposta comercial descreve o escopo, o prazo de execução, o investimento e as condições particulares
          daquele projeto, e integra estes Termos como parte do contrato.
        </p>
        <p>
          Reservamo-nos o direito de recusar ou descontinuar a prestação de Serviços a qualquer pessoa física ou
          jurídica cuja atividade, base de contatos ou finalidade de uso viole a legislação aplicável, as políticas
          da Meta/WhatsApp Business ou estes Termos.
        </p>
      </LegalSection>

      <LegalSection id="pagamento" title="5. Preços, pagamento e faturamento">
        <p>
          Os valores, a periodicidade (por exemplo, mensalidade fixa, percentual sobre resultado ou modelo híbrido)
          e as formas de pagamento aceitas são definidos individualmente em cada proposta comercial, podendo
          variar conforme o escopo contratado.
        </p>
        <p>
          O atraso no pagamento pode acarretar a suspensão temporária dos Serviços até a regularização, sem
          prejuízo da cobrança de encargos moratórios (juros, multa e correção monetária) previstos na proposta
          comercial ou, na ausência de previsão específica, nos limites da legislação aplicável.
        </p>
      </LegalSection>

      <LegalSection id="vigencia" title="6. Vigência, renovação e cancelamento">
        <p>
          O prazo de vigência de cada contratação é o indicado na respectiva proposta comercial. Contratos com
          renovação automática continuam vigentes por períodos sucessivos equivalentes, salvo manifestação de não
          renovação por qualquer das partes com a antecedência mínima estabelecida na proposta.
        </p>
        <p>
          O cliente pode solicitar o cancelamento dos Serviços a qualquer momento, mediante comunicação ao canal
          indicado na Seção 18, observados o aviso prévio e as eventuais condições de fidelidade ou multa
          contratual previstos na proposta comercial aceita.
        </p>
      </LegalSection>

      <LegalSection id="reembolso" title="7. Política de reembolso">
        <p>
          Valores pagos referentes a serviços já executados ou em execução não são, em regra, reembolsáveis, tendo
          em vista a natureza da prestação (alocação de equipe, estratégia e execução de campanhas). Condições
          específicas de reembolso, quando aplicáveis, serão expressamente previstas na proposta comercial aceita
          pelo cliente.
        </p>
        <p>
          Eventuais cobranças feitas em duplicidade ou por erro comprovadamente atribuível à Upscale serão
          corrigidas ou estornadas integralmente, mediante contato pelo canal indicado na Seção 18.
        </p>
      </LegalSection>

      <LegalSection id="obrigacoes-cliente" title="8. Obrigações do cliente">
        <ul className="list-disc space-y-2 pl-5">
          <li>Fornecer informações verdadeiras, completas e atualizadas para a execução dos Serviços;</li>
          <li>
            Garantir que possui base legal e, quando aplicável, consentimento válido para o tratamento e
            compartilhamento com a Upscale de qualquer base de contatos utilizada nas campanhas;
          </li>
          <li>Efetuar os pagamentos nas datas e condições acordadas na proposta comercial;</li>
          <li>
            Validar, dentro dos prazos combinados, os materiais, réguas e conteúdos submetidos à sua aprovação;
          </li>
          <li>
            Não utilizar os Serviços para fins ilícitos, para envio de spam ou de conteúdo que viole direitos de
            terceiros ou a legislação aplicável.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="obrigacoes-upscale" title="9. Obrigações da Upscale">
        <ul className="list-disc space-y-2 pl-5">
          <li>Executar os Serviços com zelo profissional, dentro do escopo definido na proposta comercial;</li>
          <li>Manter o cliente informado sobre o andamento das campanhas por meio de relatórios periódicos;</li>
          <li>
            Adotar medidas razoáveis de segurança da informação no tratamento de dados e materiais fornecidos pelo
            cliente;
          </li>
          <li>
            Observar as políticas de uso da API oficial do WhatsApp Business (Meta) na execução das campanhas.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="whatsapp-conformidade" title="10. Uso do WhatsApp Business e conformidade">
        <p>
          Os Serviços são executados por meio da API oficial do WhatsApp Business (Meta) e de ferramentas de
          automação correlatas, sujeitas às políticas comerciais e de qualidade da própria Meta, que podem mudar a
          qualquer tempo e fora do nosso controle. A Upscale não garante disponibilidade ininterrupta da
          Plataforma, nem se responsabiliza por bloqueios, suspensões, limitações de qualidade (rating) ou
          alterações de política aplicadas pela Meta a números ou contas do cliente, ainda que decorrentes de
          campanhas por nós executadas — nesses casos, atuaremos em conjunto com o cliente para mitigar impactos e
          buscar regularização, dentro das possibilidades técnicas disponíveis.
        </p>
        <p>
          É vedado o uso dos Serviços para envio de mensagens não solicitadas fora dos parâmetros permitidos pela
          Meta, para práticas de phishing, fraude ou qualquer atividade que viole as políticas do WhatsApp Business
          ou a legislação brasileira aplicável.
        </p>
      </LegalSection>

      <LegalSection id="propriedade-intelectual" title="11. Propriedade intelectual">
        <p>
          Metodologias, réguas de mensagens, materiais de treinamento, relatórios-modelo e demais ativos
          desenvolvidos pela Upscale de forma independente, antes ou fora da relação com o cliente, permanecem de
          propriedade da Upscale. Peças de campanha desenvolvidas especificamente para um cliente, mediante
          pagamento integral dos valores devidos, podem ser utilizadas por esse cliente para os fins previstos na
          proposta comercial.
        </p>
        <p>
          O site, sua marca, layout, textos e elementos visuais são de propriedade da Upscale ou de seus
          licenciantes, sendo vedada a reprodução, distribuição ou uso não autorizado sem consentimento prévio e
          por escrito.
        </p>
      </LegalSection>

      <LegalSection id="confidencialidade" title="12. Confidencialidade">
        <p>
          As partes se comprometem a manter sigilo sobre informações confidenciais trocadas em razão da prestação
          dos Serviços — incluindo bases de contatos, dados comerciais, estratégias e resultados de campanhas —
          utilizando-as exclusivamente para os fins da contratação, e a não divulgá-las a terceiros sem autorização
          prévia, exceto quando exigido por lei ou por ordem de autoridade competente.
        </p>
      </LegalSection>

      <LegalSection id="resultados" title="13. Resultados e ausência de garantias">
        <p>
          Indicadores de referência eventualmente comunicados em nosso site ou em materiais comerciais (como
          percentuais médios de receita recuperada) refletem médias históricas observadas em outras operações e
          têm caráter ilustrativo, não constituindo promessa de resultado. O desempenho de cada campanha depende de
          fatores fora do nosso controle, como qualidade da base de contatos, sazonalidade, comportamento do
          mercado e políticas da Meta/WhatsApp, entre outros.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" title="14. Limitação de responsabilidade">
        <p>
          Na máxima extensão permitida pela legislação aplicável, a responsabilidade da Upscale por eventuais
          danos diretos comprovadamente decorrentes da prestação dos Serviços fica limitada ao valor efetivamente
          pago pelo cliente nos 3 (três) meses anteriores ao evento que deu causa ao dano. A Upscale não se
          responsabiliza por danos indiretos, lucros cessantes ou perda de oportunidade, nem por indisponibilidades
          ou falhas de plataformas de terceiros (como Meta/WhatsApp, provedores de hospedagem e de pagamento) que
          estejam fora de sua esfera de controle.
        </p>
      </LegalSection>

      <LegalSection id="rescisao" title="15. Rescisão do contrato">
        <p>
          Qualquer das partes pode rescindir o contrato em caso de descumprimento de obrigação essencial pela outra
          parte, não sanado no prazo informado em notificação por escrito. Em caso de rescisão, serão devidos os
          valores proporcionais aos Serviços já executados até a data de encerramento, sem prejuízo de eventuais
          multas ou condições específicas previstas na proposta comercial aceita.
        </p>
      </LegalSection>

      <LegalSection id="dados-pessoais" title="16. Proteção de dados pessoais">
        <p>
          O tratamento de dados pessoais realizado pela Upscale, seja como controladora dos dados coletados em
          seus próprios canais, seja como operadora das bases de contatos fornecidas por clientes contratantes,
          segue o disposto em nossa{" "}
          <Link href="/lgpd" className="font-semibold text-[#0229C4] hover:underline">
            Política de Privacidade e Proteção de Dados (LGPD)
          </Link>
          , que integra estes Termos e deve ser lida em conjunto com eles.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="17. Alterações destes termos">
        <p>
          Estes Termos podem ser atualizados periodicamente para refletir mudanças em nossos Serviços, em nossas
          práticas comerciais ou na legislação aplicável. A data da última atualização está indicada no topo desta
          página. Alterações relevantes que afetem contratos em vigor serão comunicadas aos clientes ativos pelos
          canais habituais de contato.
        </p>
      </LegalSection>

      <LegalSection id="contato" title="18. Contato">
        <p>Para dúvidas sobre estes Termos ou sobre uma contratação em andamento, entre em contato conosco:</p>
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
            <strong className="text-slate-900">Endereço:</strong> Avenida C4, nº 931, Quadra 49, Lote 01/14, Cond.
            Terra Office, Andar 26, Sala 01-B, Bairro Jardim América, Goiânia/GO, CEP 74265-040
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="foro" title="19. Legislação aplicável e foro">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de
          Goiânia, Estado de Goiás, para dirimir quaisquer controvérsias decorrentes deste documento, com renúncia
          a qualquer outro, por mais privilegiado que seja, ressalvado o foro do domicílio do consumidor quando
          aplicável o Código de Defesa do Consumidor.
        </p>
      </LegalSection>
    </LegalDocLayout>
  );
}
