import { createFileRoute, Link } from "@tanstack/react-router";
import { LogIn, Building2, HeartPulse, ArrowRight, ShieldCheck, Clock, Stethoscope } from "lucide-react";
import logo from "@/assets/nextgo-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Go Saúde | Telemedicina 24h para você, sua família e sua empresa" },
      { name: "description", content: "Escolha sua jornada: acesse a plataforma, conheça os planos para empresas ou contrate telemedicina 24h para sua família." },
      { property: "og:title", content: "Next Go Saúde | Telemedicina 24h para você, sua família e sua empresa" },
      { property: "og:description", content: "Escolha sua jornada: acesse a plataforma, conheça os planos para empresas ou contrate telemedicina 24h para sua família." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://telemedicinaacessivel.com.br/" },
      { property: "og:image", content: "https://telemedicinaacessivel.com.br/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Next Go Saúde | Telemedicina 24h para você, sua família e sua empresa" },
      { name: "twitter:description", content: "Escolha sua jornada: acesse a plataforma, conheça os planos para empresas ou contrate telemedicina 24h para sua família." },
      { name: "twitter:image", content: "https://telemedicinaacessivel.com.br/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://telemedicinaacessivel.com.br/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Next Go Saúde",
          alternateName: "Akvo Serviços Administrativos",
          url: "https://telemedicinaacessivel.com.br/",
          logo: "https://telemedicinaacessivel.com.br/og-image.jpg",
          description: "Telemedicina 24h com médicos online imediatos para pessoas, famílias e empresas.",
        }),
      },
    ],
  }),
  component: HubHome,
});

type Choice = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  cta: string;
  external?: boolean;
  highlight?: boolean;
};

const choices: Choice[] = [
  {
    id: "individual",
    title: "Individual / Família",
    description: "Telemedicina 24h, clube de descontos em farmácias e exames com até 80% off para você e sua família.",
    icon: <HeartPulse className="size-7" aria-hidden />,
    href: "/individual-familiar",
    cta: "Ver planos para família",
    highlight: true,
  },
  {
    id: "empresa",
    title: "Empresa",
    description: "Benefício de saúde de baixo custo para sua equipe. Reduza absenteísmo e cumpra a NR-01.",
    icon: <Building2 className="size-7" aria-hidden />,
    href: "/telemedicina-empresarial",
    cta: "Solicitar proposta",
  },
  {
    id: "login",
    title: "Já sou cliente",
    description: "Acesse sua conta na plataforma Next Go Saúde para iniciar uma consulta ou gerenciar seu plano.",
    icon: <LogIn className="size-7" aria-hidden />,
    href: "https://app.nextgosaude.com.br/",
    cta: "Entrar na plataforma",
    external: true,
  },
];

function ChoiceCard({ choice }: { choice: Choice }) {
  const inner = (
    <article
      className={[
        "group relative h-full flex flex-col rounded-3xl p-7 sm:p-8 bg-card border transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
        choice.highlight
          ? "border-[color:var(--primary)]/40 ring-1 ring-[color:var(--primary)]/20"
          : "border-border hover:border-[color:var(--primary)]/40",
      ].join(" ")}
    >
      {choice.highlight && (
        <span className="absolute -top-3 left-7 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}>
          Mais popular
        </span>
      )}
      <span
        className="inline-flex items-center justify-center size-14 rounded-2xl text-primary-foreground mb-5 transition-transform duration-300 group-hover:scale-105"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      >
        {choice.icon}
      </span>
      <h2 className="font-display text-2xl font-bold text-foreground">{choice.title}</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">{choice.description}</p>
      <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[color:var(--primary-deep)] group-hover:gap-3 transition-all">
        {choice.cta}
        <ArrowRight className="size-4" aria-hidden />
      </span>
    </article>
  );

  if (choice.external) {
    return (
      <a
        href={choice.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={choice.cta}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] rounded-3xl"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link
      to={choice.href}
      aria-label={choice.cta}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] rounded-3xl"
    >
      {inner}
    </Link>
  );
}

function HubHome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-hero)" }}>
      <header className="glass fixed top-0 inset-x-0 z-50">
        <nav className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Next Go Saúde">
            <img src={logo} alt="Next Go Saúde" width={140} height={44} className="h-9 w-auto" />
          </a>
          <a
            href="https://app.nextgosaude.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary-deep)] hover:text-[color:var(--primary)] transition"
          >
            <LogIn className="size-4" aria-hidden /> Entrar
          </a>
        </nav>
      </header>

      <main className="flex-1 pt-28 pb-16 px-5">
        <section className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
              <ShieldCheck className="size-3.5" aria-hidden /> Telemedicina 24h • Sem carência
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Como podemos cuidar de você <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>hoje</span>?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Escolha por onde começar. Em poucos cliques você fala com um médico, contrata um plano para sua família ou leva o benefício para sua empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {choices.map((c) => (
              <ChoiceCard key={c.id} choice={c} />
            ))}
          </div>

          <ul className="mt-14 grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <li className="flex items-center justify-center gap-2"><Clock className="size-4 text-[color:var(--primary)]" aria-hidden /> Atendimento em até 8 minutos</li>
            <li className="flex items-center justify-center gap-2"><Stethoscope className="size-4 text-[color:var(--primary)]" aria-hidden /> 30+ especialidades médicas</li>
            <li className="flex items-center justify-center gap-2"><ShieldCheck className="size-4 text-[color:var(--primary)]" aria-hidden /> Validade legal CFM</li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Next Go Saúde. Todos os direitos reservados.</p>
          <nav className="flex items-center gap-5">
            <a href="/termos" className="hover:underline hover:text-foreground transition">Termos de Uso</a>
            <a href="/privacidade" className="hover:underline hover:text-foreground transition">Política de Privacidade</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
