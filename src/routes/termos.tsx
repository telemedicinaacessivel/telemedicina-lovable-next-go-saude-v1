import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Telemedicina Acessível" },
      { name: "description", content: "Termos de Uso do site telemedicinaacessivel.com.br, operado pela Akvo Serviços Administrativos LTDA, franqueada Next Go Saúde." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Termos de Uso — Telemedicina Acessível" },
      { property: "og:description", content: "Regulamentação da operação comercial e intermediação de vendas." },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>

        <header className="mb-10 border-b border-border pb-8">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">Akvo Serviços Administrativos LTDA</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">Termos de Uso</h1>
          <p className="mt-3 text-sm text-muted-foreground">Regulamentação da operação comercial e intermediação de vendas · Atualizado em 19 de junho de 2026</p>
        </header>

        <article className="prose prose-neutral max-w-none text-foreground space-y-8 leading-relaxed">
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do site <strong>telemedicinaacessivel.com.br</strong>, de propriedade e operação da <strong>AKVO SERVIÇOS ADMINISTRATIVOS LTDA</strong>, inscrita no CNPJ sob o nº <strong>50.452.066/0001-90</strong>, com sede em Belo Horizonte/MG, doravante denominada simplesmente como <strong>FRANQUEADA</strong> ou <strong>UNIDADE AUTÔNOMA</strong>.
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1.1. Natureza da Operação e Independência Jurídica</h2>
            <p>
              A <strong>AKVO SERVIÇOS ADMINISTRATIVOS LTDA</strong> atua exclusivamente como uma unidade franqueada autônoma da marca <strong>Next Go Saúde</strong>. A atividade desempenhada através deste website limita-se estritamente à <strong>intermediação comercial, divulgação publicitária e venda de planos de benefícios</strong>. A <strong>FRANQUEADA</strong> é uma entidade jurídica independente e não possui ingerência técnica, operacional ou clínica sobre a plataforma de telemedicina.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1.2. Limitação de Responsabilidade e Objeto do Site</h2>
            <p>
              O usuário declara ciência de que este website é um portal de vendas e captação de clientes. A <strong>FRANQUEADA</strong> não presta serviços médicos, não realiza teleconsultas, não emite prescrições e não é responsável pela gestão da rede credenciada. Toda a prestação do serviço de saúde, bem como a disponibilidade do aplicativo e da plataforma tecnológica, é de responsabilidade integral e exclusiva da <strong>FRANQUEADORA (Next Go Saúde)</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1.3. Processo de Compra e Ativação</h2>
            <p>
              Ao adquirir um plano através deste site, o usuário está contratando o direito de acesso à plataforma de terceiros. A responsabilidade da <strong>FRANQUEADA</strong> encerra-se com a conclusão da venda e o envio dos dados necessários para a ativação do acesso junto à <strong>FRANQUEADORA</strong>. Eventuais falhas técnicas no aplicativo, indisponibilidade de sistema ou insatisfação com o atendimento médico devem ser tratadas diretamente nos canais de suporte da plataforma oficial da <strong>Next Go Saúde</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1.4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, logotipos, design e imagens, é protegido por direitos de propriedade intelectual. O uso da marca <strong>Telemedicina Acessível</strong> e <strong>Next Go Saúde</strong> ocorre sob licença de franquia, sendo vedada qualquer reprodução não autorizada pelo usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">1.5. Foro de Eleição</h2>
            <p>
              Para dirimir quaisquer controvérsias oriundas destes Termos de Uso, as partes elegem o Foro da Comarca de Belo Horizonte/MG, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <hr className="border-border my-10" />

          <footer className="text-sm text-muted-foreground">
            <p>Belo Horizonte/MG, 19 de junho de 2026</p>
            <p className="mt-2">AKVO SERVIÇOS ADMINISTRATIVOS LTDA · CNPJ: 50.452.066/0001-90</p>
            <p className="mt-2">
              Veja também a{" "}
              <Link to="/privacidade" className="text-primary hover:underline font-medium">Política de Privacidade</Link>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
