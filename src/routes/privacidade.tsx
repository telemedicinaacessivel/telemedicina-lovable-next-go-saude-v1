import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Telemedicina Acessível" },
      { name: "description", content: "Como a Akvo Serviços Administrativos LTDA coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Política de Privacidade — Telemedicina Acessível" },
      { property: "og:description", content: "Tratamento de dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018)." },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>

        <header className="mb-10 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">Akvo Serviços Administrativos LTDA</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-muted-foreground">Em conformidade com a LGPD (Lei nº 13.709/2018) · Atualizado em 19 de junho de 2026</p>
        </header>

        <article className="prose prose-neutral max-w-none text-foreground space-y-8 leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como a <strong>AKVO SERVIÇOS ADMINISTRATIVOS LTDA</strong> coleta, utiliza e protege os dados pessoais dos usuários que interagem com o domínio <strong>telemedicinaacessivel.com.br</strong>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.1. Coleta de Dados Pessoais Comuns</h2>
            <p>
              A <strong>FRANQUEADA</strong> coleta apenas dados pessoais básicos fornecidos voluntariamente pelo usuário através de formulários de contato, leads ou checkout de vendas, tais como: <strong>nome completo, número de telefone, endereço de e-mail e CPF</strong>. Estes dados são necessários para a identificação do cliente e processamento da venda.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.2. Exclusão de Dados Sensíveis de Saúde</h2>
            <p>
              A <strong>AKVO SERVIÇOS ADMINISTRATIVOS LTDA NÃO</strong> coleta, não armazena e não processa dados pessoais sensíveis de saúde (tais como prontuários, sintomas, histórico médico ou prescrições). O tratamento de dados sensíveis ocorre exclusivamente dentro do ambiente seguro da plataforma da <strong>FRANQUEADORA</strong>, após a devida ativação da conta, sob as políticas de privacidade específicas daquela entidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.3. Finalidade do Tratamento</h2>
            <p>Os dados coletados neste site possuem finalidades estritamente comerciais e de marketing, incluindo:</p>
            <ol className="list-decimal pl-6 space-y-1 mt-2">
              <li>Identificação e qualificação de potenciais clientes (leads);</li>
              <li>Atendimento pré-venda e suporte comercial via e-mail ou WhatsApp;</li>
              <li>Processamento de pagamentos e emissão de notas fiscais de intermediação;</li>
              <li>Envio de informações necessárias à <strong>FRANQUEADORA</strong> para a criação do perfil de acesso do usuário.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.4. Compartilhamento de Dados</h2>
            <p>
              Para a viabilização do serviço contratado, a <strong>FRANQUEADA</strong> compartilhará os dados cadastrais básicos do usuário com a <strong>FRANQUEADORA (Next Go Saúde)</strong>. Não há compartilhamento de dados com outros terceiros, exceto para cumprimento de obrigações legais ou processamento de pagamentos.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.5. Cookies e Ferramentas de Marketing</h2>
            <p>
              Este site utiliza cookies e tecnologias de rastreamento para melhorar a experiência do usuário e otimizar campanhas publicitárias. Utilizamos ferramentas como <strong>Google Analytics, Microsoft Clarity, Google Ads e Meta Ads</strong>. O usuário pode configurar seu navegador para recusar cookies, ciente de que isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.6. Transferência Internacional de Dados</h2>
            <p>
              Em virtude do uso de ferramentas de análise e marketing (como Google e Meta), os dados de navegação e identificação técnica podem ser processados em servidores localizados fora do território nacional. O usuário declara ciência e concordância com essa <strong>possível transferência internacional</strong>, realizada sob as garantias de segurança das referidas empresas de tecnologia.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">2.7. Direitos do Titular</h2>
            <p>
              Nos termos da LGPD, o usuário possui o direito de solicitar, a qualquer momento, a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a exclusão de seus dados da base de marketing da <strong>FRANQUEADA</strong>, através do e-mail:{" "}
              <a href="mailto:telemedicinaacessivel@gmail.com" className="text-primary hover:underline font-medium">telemedicinaacessivel@gmail.com</a>.
            </p>
          </section>

          <hr className="border-border my-10" />

          <footer className="text-sm text-muted-foreground">
            <p>Belo Horizonte/MG, 19 de junho de 2026</p>
            <p className="mt-2">AKVO SERVIÇOS ADMINISTRATIVOS LTDA · CNPJ: 50.452.066/0001-90</p>
            <p className="mt-2">
              Veja também os{" "}
              <Link to="/termos" className="text-primary hover:underline font-medium">Termos de Uso</Link>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
