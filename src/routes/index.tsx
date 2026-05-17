import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope, Clock, ShieldCheck, Pill, BadgeCheck, Building2,
  Check, Menu, X, MessageCircle, Lock, HeartPulse, Users, Sparkles,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroDoctor from "@/assets/hero-doctor.jpg";
import logo from "@/assets/nextgo-logo.png";
import partnerRaia from "@/assets/partners/droga-raia.png";
import partnerDrogasil from "@/assets/partners/drogasil.png";
import partnerPagueMenos from "@/assets/partners/pague-menos.png";
import partnerSaoMarcos from "@/assets/partners/sao-marcos.png";
import partnerHermesPardini from "@/assets/partners/hermes-pardini.png";
import partnerCmn from "@/assets/partners/cmn-guanabara.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Go — Telemedicina 24h | Saúde na palma da mão" },
      { name: "description", content: "Telemedicina 24h com médicos online imediatos, conformidade NR-01 e clube de descontos em farmácia. Assine a Next Go e tenha saúde na palma da mão." },
      { property: "og:title", content: "Next Go — Telemedicina 24h" },
      { property: "og:description", content: "Médico online em até 20 minutos, sem carência. Planos para você, sua família e sua empresa." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5511999999999?text=Quero%20conhecer%20a%20Next%20Go%20Telemedicina";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#planos", label: "Planos" },
    { href: "#empresas", label: "Empresas" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="glass fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Next Go Saúde">
          <img src={logo} alt="Next Go Saúde" width={140} height={44} className="h-9 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-foreground transition" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition shadow-soft">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-white/90 backdrop-blur px-5 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium">{l.label}</a>
          ))}
          <a href={WHATSAPP} className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-4 py-2 rounded-full text-sm font-semibold">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const quick = [
    { icon: Sparkles, label: "Sem carência" },
    { icon: Clock, label: "Atendimento em 20min" },
    { icon: BadgeCheck, label: "Receitas digitais válidas" },
  ];
  return (
    <section className="relative pt-28 md:pt-36 pb-20 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-accent/60 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> CFM 2026 · LGPD · SSL
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Telemedicina 24h <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              cuidado quando você precisar.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Médico online imediato, receitas digitais e clube de descontos em farmácia.
            A Next Go coloca a sua saúde na palma da mão — para você, sua família e sua empresa.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {quick.map(q => (
              <li key={q.label} className="flex items-center gap-2 bg-card border border-border px-3 py-2 rounded-full text-sm font-medium shadow-card">
                <q.icon className="w-4 h-4 text-primary" /> {q.label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planos" className="pulse-cta gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-soft hover:scale-[1.02] transition">
              Assinar Agora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-border bg-card px-6 py-4 rounded-full font-semibold hover:bg-accent transition">
              <MessageCircle className="w-4 h-4" /> Falar com a equipe
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary to-secondary" />)}
            </div>
            <span><strong className="text-foreground">+50 mil</strong> brasileiros já cuidam da saúde com a Next Go</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 gradient-primary opacity-20 blur-3xl rounded-full" />
          <img
            src={heroDoctor}
            alt="Médico atendendo paciente por telemedicina no smartphone"
            width={1280} height={1280}
            className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
          />
          <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-4 shadow-card flex items-center gap-3 max-w-[240px]">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-primary/10 text-primary">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tempo médio</p>
              <p className="font-bold text-sm">Consulta em 4 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PARTNERS = [
  { src: partnerRaia, name: "Droga Raia" },
  { src: partnerDrogasil, name: "Drogasil" },
  { src: partnerPagueMenos, name: "Pague Menos" },
  { src: partnerHermesPardini, name: "Hermes Pardini" },
  { src: partnerSaoMarcos, name: "São Marcos" },
  { src: partnerCmn, name: "Centro de Medicina Nuclear da Guanabara" },
];

function Benefits() {
  const items = [
    { icon: ShieldCheck, title: "Conformidade NR-01", desc: "Atendemos integralmente a NR-01 com gestão de riscos psicossociais e relatórios para o seu PGR." },
    { icon: Pill, title: "Clube de Descontos em Farmácia", desc: "Rede credenciada com até 70% de desconto em medicamentos de marca, genéricos e similares." },
    { icon: Stethoscope, title: "Médico 24h, todos os dias", desc: "Acesso ilimitado a clínicos gerais, pediatras e especialistas, sem carência e sem limite de consultas." },
  ];
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Diferenciais</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Saúde na palma da mão, com benefícios reais</h2>
          <p className="mt-4 text-muted-foreground text-lg">Mais que telemedicina: um ecossistema de cuidado pensado para acolher pessoas e proteger empresas.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <article key={i.title} className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition">
              <div className="w-12 h-12 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                <i.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-muted-foreground">{i.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 shadow-card">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Clube de Descontos</span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">Parceiros que cuidam do seu bolso</h3>
              <p className="mt-2 text-muted-foreground max-w-xl">Até 70% de desconto em medicamentos, exames e mais — nas maiores redes do Brasil.</p>
            </div>
            <span className="text-xs text-muted-foreground">e outros parceiros</span>
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map(p => (
              <li key={p.name} className="h-20 rounded-2xl border border-border bg-background grid place-items-center px-4 transition hover:shadow-card hover:-translate-y-0.5">
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-12 max-w-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const PLANS = {
  individual: [
    { name: "Essencial", price: 29.9, suffix: "/mês", desc: "Ideal para você começar a cuidar da saúde digitalmente.", features: ["Médico 24h por vídeo", "Receitas e atestados digitais", "Clube de descontos em farmácia", "Sem carência"], highlight: false },
    { name: "Familiar", price: 49.9, suffix: "/mês", desc: "Cuide de até 4 pessoas no mesmo plano.", features: ["Tudo do Essencial", "Até 4 dependentes", "Pediatria 24h", "Psicólogo online"], highlight: true, badge: "Mais popular" },
    { name: "Família+", price: 89.9, suffix: "/mês", desc: "Cobertura completa com especialistas.", features: ["Tudo do Familiar", "Especialistas online", "Check-up anual", "Suporte prioritário"], highlight: false },
  ],
  empresa: [
    { name: "Starter", price: 19.9, suffix: "/colaborador", desc: "Para times até 50 pessoas. Conformidade NR-01 inclusa.", features: ["Médico 24h para colaboradores", "Relatórios NR-01", "Painel de gestão", "Onboarding em 48h"], highlight: false },
    { name: "Business", price: 14.9, suffix: "/colaborador", desc: "Para empresas com 50+ colaboradores. Melhor custo-benefício.", features: ["Tudo do Starter", "Riscos psicossociais", "Saúde mental dedicada", "Gestor de conta"], highlight: true, badge: "Mais popular" },
    { name: "Enterprise", price: 9.9, suffix: "/colaborador", desc: "Soluções sob medida para grandes operações.", features: ["Tudo do Business", "API e SSO", "SLA dedicado", "Programas customizados"], highlight: false },
  ],
};

function Pricing() {
  const [tab, setTab] = useState<"individual" | "empresa">("individual");
  const plans = PLANS[tab];
  return (
    <section id="planos" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Escolha o cuidado certo para você</h2>
          <p className="mt-4 text-muted-foreground text-lg">Sem carência. Cancele quando quiser. Pagamento via cartão ou PIX.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex bg-card border border-border rounded-full p-1 shadow-card">
            {(["individual","empresa"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition ${
                  tab === t ? "gradient-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "individual" ? <><Users className="inline w-4 h-4 mr-1.5" />Individual</> : <><Building2 className="inline w-4 h-4 mr-1.5" />Empresa</>}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <article
              key={p.name}
              className={`relative p-7 rounded-3xl border bg-card transition ${
                p.highlight ? "border-primary shadow-soft md:-translate-y-3" : "border-border shadow-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 min-h-[3rem]">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-muted-foreground">R$</span>
                <span className="font-display text-5xl font-extrabold">
                  {p.price.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-sm text-muted-foreground">{p.suffix}</span>
              </div>
              <a
                href={WHATSAPP}
                target="_blank" rel="noopener"
                className={`mt-6 block text-center px-5 py-3 rounded-full font-semibold transition ${
                  p.highlight ? "gradient-primary text-primary-foreground shadow-soft hover:scale-[1.02]" : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {tab === "empresa" ? "Falar com vendas" : "Assinar agora"}
              </a>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function B2B() {
  const points = [
    "Conformidade total com a NR-01 e gestão de riscos psicossociais",
    "Painel de gestão com indicadores de uso e saúde do time",
    "Onboarding em 48h e suporte dedicado",
    "Redução comprovada de absenteísmo e turnover",
  ];
  return (
    <section id="empresas" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square rounded-3xl gradient-primary p-10 text-primary-foreground shadow-soft">
            <Building2 className="w-12 h-12" />
            <p className="mt-6 font-display text-3xl font-bold leading-tight">
              Sua empresa em conformidade com a NR-01, sem dor de cabeça.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["98%","satisfação"],
                ["-32%","absenteísmo"],
                ["48h","implantação"],
                ["+200","empresas"],
              ].map(([n,l]) => (
                <div key={l} className="bg-white/10 rounded-xl p-4 backdrop-blur">
                  <p className="text-2xl font-extrabold">{n}</p>
                  <p className="text-xs opacity-80">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Para empresas</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Benefícios NR-01 que cuidam de gente</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Atenda à legislação trabalhista e ofereça saúde de verdade para o seu time. A Next Go entrega telemedicina 24h, saúde mental e relatórios prontos para auditoria.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map(p => (
              <li key={p} className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-soft">
            <MessageCircle className="w-4 h-4" /> Solicitar proposta
          </a>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const seals = [
    { icon: BadgeCheck, label: "CFM 2026" },
    { icon: Lock, label: "SSL 256-bit" },
    { icon: ShieldCheck, label: "LGPD" },
    { icon: HeartPulse, label: "ANS conforme" },
  ];
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {seals.map(s => (
          <div key={s.label} className="flex items-center gap-2 text-muted-foreground">
            <s.icon className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O que é a Telemedicina 24h da Next Go?", a: "É o atendimento médico online a qualquer hora do dia, 7 dias por semana, com clínicos gerais, pediatras e especialistas, por vídeo ou chat." },
    { q: "Existe carência para usar o plano?", a: "Não. A partir da confirmação do pagamento você já pode realizar consultas imediatamente." },
    { q: "As receitas digitais têm validade?", a: "Sim. Todas as receitas, atestados e pedidos de exame são assinados digitalmente conforme as normas do CFM." },
    { q: "Como funciona o Clube de Descontos em Farmácia?", a: "Você apresenta seu CPF nas farmácias parceiras e recebe descontos de até 70% em medicamentos." },
    { q: "A Next Go atende a NR-01 para empresas?", a: "Sim. Entregamos relatórios completos de gestão de riscos psicossociais e suporte para auditorias." },
  ];
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Dúvidas frequentes</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Tudo o que você precisa saber</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f,i) => (
            <AccordionItem key={i} value={`i${i}`} className="bg-card border border-border rounded-2xl px-5 shadow-card">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Next Go Saúde" width={160} height={50} className="h-11 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm opacity-70 max-w-sm">
            Telemedicina 24h para pessoas e empresas. Saúde na palma da mão, com tecnologia, acolhimento e segurança.
          </p>
          <p className="mt-4 text-xs opacity-60">CNPJ 00.000.000/0001-00 · Next Go Telemedicina LTDA</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Navegue</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#empresas">Empresas</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contato e legal</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href={WHATSAPP}>WhatsApp</a></li>
            <li><a href="mailto:contato@nextgo.com.br">contato@nextgo.com.br</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 mt-12 pt-6 border-t border-white/10 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Next Go Telemedicina. Todos os direitos reservados.</span>
        <span>Em conformidade com CFM 2026 e LGPD.</span>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener"
       className="fixed bottom-5 right-5 z-50 w-14 h-14 grid place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-soft pulse-cta hover:scale-105 transition"
       aria-label="Falar no WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <Benefits />
      <Pricing />
      <B2B />
      <FAQ />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
