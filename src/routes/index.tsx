import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope, Clock, ShieldCheck, Pill, BadgeCheck,
  Check, Menu, X, MessageCircle, Sparkles, ShieldPlus, HandHeart,
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
      { name: "description", content: "Telemedicina 24h com médicos online imediatos e clube de descontos em farmácia. Assine a Next Go e tenha saúde na palma da mão." },
      { property: "og:title", content: "Next Go — Telemedicina 24h" },
      { property: "og:description", content: "Médico online em até 20 minutos, sem carência. Planos individuais e familiares." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const WA_BASE = "https://wa.me/5511999999999";
const WHATSAPP = `${WA_BASE}?text=Quero%20conhecer%20a%20Next%20Go%20Telemedicina`;
const WHATSAPP_SUBSCRIBE = `${WA_BASE}?text=Quero%20assinar%20a%20Next%20Go%20Telemedicina`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios-b2c", label: "Por que assinar" },
    { href: "#planos", label: "Planos" },
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
            A Next Go coloca a sua saúde na palma da mão — para você e toda a sua família.
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

        <ul className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {PARTNERS.map(p => (
            <li key={p.name} className="grid place-items-center">
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-10 md:max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyTelemedicine() {
  const cards = [
    {
      icon: ShieldPlus,
      kicker: "Já tem plano de saúde?",
      title: "Use a Next Go como complemento",
      desc: "A Next Go é o complemento inteligente que seu plano não oferece.",
      bullets: [
        "Atendimento 24h sem coparticipação — economize nas urgências",
        "Clínico geral e pediatra em minutos, sem esperar meses por agendamento",
        "Ideal para urgências não emergenciais — evite filas de pronto-socorro",
        "Atestados e receitas digitais emitidos na hora, direto no celular",
        "A partir de R$ 29,90/mês — menos que uma pizza para a família",
      ],
      cta: "Quero complementar",
    },
    {
      icon: HandHeart,
      kicker: "Não tem plano de saúde?",
      title: "Tenha médico sem depender só do SUS",
      desc: "Acesso a médicos quando você precisar, sem fila e sem burocracia.",
      bullets: [
        "Consulta médica sem horas de espera na fila do posto",
        "Acesso a mais de 30 especialidades por um preço fixo mensal",
        "Clube de Descontos com até 70% off em medicamentos e exames",
        "Atendimento ilimitado — sem surpresas no fim do mês",
        "Cabe no bolso: menos que uma diária de farmácia",
      ],
      cta: "Quero assinar",
    },
  ];
  return (
    <section id="beneficios-b2c" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Por que ter telemedicina?</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Por que assinar a Next Go?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ter acesso a médico 24 horas muda a forma como você cuida da sua saúde — com ou sem plano de saúde.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map(c => (
            <article
              key={c.title}
              className="group p-8 rounded-3xl bg-card border border-border shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 grid place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft shrink-0">
                  <c.icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{c.kicker}</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{c.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground">{c.desc}</p>
              <ul className="mt-6 space-y-3">
                {c.bullets.map(b => (
                  <li key={b} className="flex gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank" rel="noopener"
                className="mt-7 inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-soft hover:scale-[1.02] transition"
              >
                {c.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Básico",
    price: 29.9,
    desc: "Pronto atendimento para você começar a cuidar da saúde digitalmente.",
    features: [
      "Clínico geral 24h por vídeo",
      "Pediatra 24h",
      "Atestados e receitas digitais",
      "Sem carência no pronto atendimento",
    ],
    highlight: false,
  },
  {
    name: "Familiar",
    price: 49.9,
    desc: "Para cuidar de até 4 pessoas no mesmo plano.",
    features: [
      "Tudo do Básico",
      "Até 4 dependentes inclusos",
      "Clube de Descontos com até 70% off",
      "Acompanhamento familiar",
    ],
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "Família+",
    price: 89.9,
    desc: "Cobertura completa com mais de 30 especialidades.",
    features: [
      "Tudo do Familiar",
      "30+ especialidades online",
      "Check-up anual",
      "Suporte prioritário",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos</span>
          <p className="mt-3 text-sm font-semibold text-primary">
            Sem carência. Sem fidelidade. Cancele quando quiser.
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Escolha o cuidado certo para você</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pagamento via cartão ou PIX. Acesso imediato após a primeira mensalidade.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PLANS.map(p => (
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
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <a
                href={WHATSAPP_SUBSCRIBE}
                target="_blank" rel="noopener"
                className={`mt-6 block text-center px-5 py-3 rounded-full font-semibold transition ${
                  p.highlight ? "gradient-primary text-primary-foreground shadow-soft hover:scale-[1.02]" : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Quero assinar →
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

        <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          🩺 Consultas com clínico geral, pediatra e 30+ especialidades. 💊 Clube de Descontos em farmácias e laboratórios incluso nos planos Familiar e Família+.
        </p>
      </div>
    </section>
  );
}

function B2B() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Conformidade NR-01",
      bullets: ["Gestão de riscos psicossociais", "Relatórios prontos para auditoria e PGR"],
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      bullets: ["Até -32% de absenteísmo comprovado", "Sem custo de plano de saúde tradicional"],
    },
    {
      icon: Rocket,
      title: "Implantação Rápida",
      bullets: ["Onboarding em 48h", "Painel de gestão em tempo real", "Suporte dedicado"],
    },
  ];
  const stats = [
    ["98%", "satisfação"],
    ["-32%", "absenteísmo"],
    ["48h", "implantação"],
    ["+200", "empresas"],
  ];
  return (
    <section id="solucoes-empresas" className="py-20 md:py-28 bg-[oklch(0.97_0.012_220)] border-t border-border">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wider">
            <Building2 className="w-4 h-4" /> Para empresas
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Soluções para sua empresa</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Cuide da saúde do seu time e fique em dia com a NR-01.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <article key={c.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition">
              <div className="w-12 h-12 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.bullets.map(b => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_B2B}
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-soft hover:scale-[1.02] transition"
          >
            <MessageCircle className="w-4 h-4" /> Solicitar proposta →
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O que é a NextGo Saúde?", a: "A NextGo Saúde é a sua plataforma de telemedicina completa, que te conecta com médicos de diversas especialidades, psicólogos e nutricionistas de onde você estiver, a hora que precisar. Nosso objetivo é melhorar a sua vida e a da sua família, oferecendo acesso fácil e rápido a serviços de saúde de qualidade a preços justos. Chega de filas e burocracia, a saúde está na palma da sua mão!" },
    { q: "Como funciona a telemedicina da NextGo Saúde?", a: "A telemedicina é como uma consulta médica normal, só que realizada à distância usando a internet. Você pode conversar com médicos, tirar dúvidas, receber diagnósticos e até acompanhamento médico sem sair de casa. É tudo feito por vídeo chamada através da nossa plataforma." },
    { q: "Quais serviços estão incluídos nos planos da NextGo Saúde?", a: "Nossos planos oferecem uma variedade de serviços para cuidar da sua saúde, do Básico ao Premium: Pronto Atendimento 24h por dia, 7 dias por semana, com tempo de espera médio de apenas 8 minutos; agendamento de consultas com mais de 30 especialidades médicas (adulto e infantil); Telepsicologia e Telenutrição sem necessidade de encaminhamento; emissão de receitas, atestados e pedidos de exame; histórico completo de atendimento; encaminhamento para especialistas da rede; e Clube de Descontos com até 70% em medicamentos nas principais farmácias (Raia, Pague Menos, Araújo), exames (Hermes Pardini, São Marcos) e diversas lojas como Magalu, Petz e Netshoes." },
    { q: "Quais são as especialidades médicas disponíveis?", a: "Mais de 30 especialidades para você e sua família: Alergia e Imunologia, Cardiologia, Cirurgia Vascular, Coloproctologia, Dermatologia (adulto e pediátrica), Endocrinologia e Metabologia (adulto e pediátrica), Gastroenterologia e Hepatologia (adulto e pediátrica), Geriatria, Ginecologia e Obstetrícia, Hematologia e Hematoterapia (adulto e pediátrica), Infectologia (adulto e pediátrica), Mastologia, Nefrologia, Neurologia, Nutrologia (adulto e pediátrica), Oftalmologia (adulto e pediátrica), Ortopedia, Otorrinolaringologia (adulto e pediátrica), Pediatria, Pneumologia (adulto e pediátrica), Psiquiatria, Reumatologia e Urologia." },
    { q: "Como agendar uma consulta?", a: "É super fácil! Agende suas consultas de especialista pela nossa plataforma web ou pelo aplicativo. Basta fazer login, selecionar a especialidade e escolher o melhor horário. Para o pronto atendimento o acesso é imediato, sem agendamento." },
    { q: "Como criar minha conta?", a: "Após escolher seu plano e realizar o pagamento, você recebe um link por e-mail e WhatsApp para criar seu acesso com login e senha. Depois, é só baixar o aplicativo e cadastrar você e sua família. Para crianças ou idosos sem e-mail ou celular, você pode usar seus próprios dados no cadastro deles." },
    { q: "Como acessar minha conta?", a: "Acesse diretamente pelo site https://app.nextgosaude.com.br/ ou pelo aplicativo NextGo Saúde, disponível na Play Store (Android) e App Store (iOS). Se preferir, adicione o link à tela inicial do seu celular para acessar sem instalar o app e economizar memória." },
    { q: "Como funciona o pronto atendimento?", a: "É só acessar o aplicativo ou o site e você será atendido em poucos minutos por um médico para te ajudar com a urgência. O tempo de espera médio é de apenas 8 minutos!" },
    { q: "Depois de quanto tempo posso usar todos os serviços?", a: "O Pronto Atendimento e o Clube de Descontos podem ser usados imediatamente após o pagamento da primeira mensalidade. Para agendar consultas com especialistas, psicólogos e nutricionistas, há uma carência de apenas 60 dias. No plano Premium não há carência: ele já inclui 2 atendimentos mensais com Psicólogo e 1 atendimento trimestral com Nutricionista por vida." },
    { q: "Terei que pagar alguma taxa extra nas consultas?", a: "Na maioria das especialidades e planos, não há taxa extra além da mensalidade. Apenas para consultas com psiquiatras, psicólogos, nutricionistas e dermatologistas há uma coparticipação de R$ 69,90 por consulta, paga no momento do agendamento. Nos planos Premium, consultas com nutricionistas (trimestral) e psicólogos (2 por mês) já estão inclusas sem coparticipação — você só paga se exceder o uso incluído." },
    { q: "Como funciona o Clube de Descontos?", a: "Ao assinar qualquer plano, você ganha acesso automático ao Clube de Descontos. Basta apresentar sua identificação de membro nos parceiros conveniados para aproveitar descontos em medicamentos, exames, produtos naturais, academias e diversas outras lojas." },
    { q: "Posso incluir minha família no plano?", a: "Com certeza! Nossos planos são ideais para a família, com opções para diferentes números de vidas. No cadastro, você inclui todos os seus dependentes." },
    { q: "E se eu precisar cancelar o plano?", a: "O cancelamento é simples e sem burocracia: você pode cancelar direto pelo aplicativo. Também é automático em caso de suspensão do pagamento — fique atento para não perder seus acessos e não ser afetado por nova carência ao readerir. Nossos planos não têm fidelidade." },
    { q: "O que acontece se eu não puder comparecer a uma consulta agendada?", a: "Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência pela plataforma. Se for cancelado com menos de 24 horas, será cobrada uma multa de R$ 70,00. Em situações especiais, você pode solicitar reembolso ao nosso suporte." },
    { q: "A plataforma é segura?", a: "Sim! Nossa plataforma é estável e segura, com mais de 99,9% de tempo de funcionamento. Todos os dados são tratados com privacidade e confidencialidade, seguindo a Lei Geral de Proteção de Dados (LGPD)." },
    { q: "E se minha internet cair durante uma consulta?", a: "Imprevistos acontecem. Se sua internet cair ou a plataforma apresentar problema, entre em contato com nosso suporte para que possamos te ajudar a retomar o atendimento sem prejuízos." },
    { q: "Para quem a NextGo Saúde é indicada?", a: "Para todos que buscam atendimento médico de qualidade, rápido e acessível: quem quer acesso a diversas especialidades sem sair de casa; quem precisa de pronto atendimento a qualquer hora; quem quer economizar com consultas, exames e medicamentos; quem mora longe de hospitais e UPAs; empresas que querem oferecer benefícios modernos de baixo custo aos colaboradores (incluindo psicologia, em conformidade com a NR-01); e brasileiros que moram fora do país e se sentem inseguros com atendimento médico em outros idiomas." },
    { q: "Como posso obter suporte se tiver mais dúvidas?", a: "Nosso suporte ao cliente está sempre pronto para ajudar. Você pode entrar em contato pelos canais de comunicação da NextGo Saúde, direto pela plataforma." },
    { q: "Qual o propósito da NextGo Saúde?", a: "Melhorar a vida das pessoas, proporcionando acesso a serviços de saúde de qualidade a preços justos e transformando a realidade de muitas famílias no Brasil. Queremos democratizar o atendimento médico de excelência para todos os brasileiros, onde e quando precisarem." },
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
            <li><a href="#beneficios-b2c">Para você</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#solucoes-empresas">Para empresas</a></li>
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
      <Benefits />
      <WhyTelemedicine />
      <Pricing />
      <FAQ />
      <B2B />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
