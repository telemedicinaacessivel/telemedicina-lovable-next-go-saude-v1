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
import face1 from "@/assets/faces/face1.jpg";
import face2 from "@/assets/faces/face2.jpg";
import face3 from "@/assets/faces/face3.jpg";
import face4 from "@/assets/faces/face4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Go Saúde — Telemedicina 24h | Saúde na palma da mão" },
      { name: "description", content: "Telemedicina 24h com médicos online imediatos e clube de descontos em farmácia. Assine a Next Go Saúde e tenha saúde na palma da mão." },
      { property: "og:title", content: "Next Go Saúde — Telemedicina 24h" },
      { property: "og:description", content: "Médico online em até 20 minutos, sem carência. Planos individuais e familiares." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const WA_BASE = "https://wa.me/5531991150689";
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
    { icon: Sparkles, label: "Sem carência no Pronto Atendimento" },
    { icon: Clock, label: "Atendimento em 8 min" },
    { icon: BadgeCheck, label: "Receitas digitais" },
    { icon: BadgeCheck, label: "Atestados médicos" },
  ];
  return (
    <section className="relative pt-28 md:pt-36 pb-20 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-accent/60 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> Representante oficial autorizado
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Telemedicina 24h <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              cuidado quando você precisar.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Médico online imediato, receitas digitais e clube de descontos em farmácia.
            A Next Go Saúde coloca a sua saúde na palma da mão — para você e toda a sua família.
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
              {[face1, face2, face3, face4].map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" loading="lazy" width={32} height={32} />
              ))}
            </div>
            <span><strong className="text-foreground">+50 mil</strong> brasileiros já cuidam da saúde com a Next Go Saúde</span>
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
    { icon: Sparkles, title: "Pronto Atendimento sem carência", desc: "O Pronto Atendimento 24h libera assim que a primeira mensalidade é confirmada. Consultas com especialistas podem ter carência, que varia conforme o plano escolhido — e o Premium é totalmente sem carência." },
    { icon: Pill, title: "Clube de Descontos para o dia a dia", desc: "Economize em medicamentos, exames laboratoriais e de imagem, academias, cinemas e lojas. Mais de 30 mil estabelecimentos parceiros em todo o Brasil, com descontos de até 80%." },
    { icon: Stethoscope, title: "Mais de 30 especialidades", desc: "Além de clínico geral à sua disposição em tempo integral, todos os dias do ano, você conta com uma rede de especialistas dentre psicólogos, psiquiatras, dermatologistas, pediatras, nutricionistas, endocrinologista, geriatras, cardiologistas e muitas outras." },
  ];
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Diferenciais</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Saúde na palma da mão, com benefícios reais</h2>
          <p className="mt-4 text-muted-foreground text-lg">Mais que telemedicina: um ecossistema de cuidado pensado para acolher você e toda a sua família.</p>
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
      title: "Use a Next Go Saúde como complemento",
      desc: "A Next Go Saúde é o complemento inteligente que seu plano não oferece.",
      bullets: [
        "Pronto Atendimento 24h sem coparticipação — economize nas urgências",
        "Clínico geral em minutos, sem esperar meses por agendamento",
        "Ideal para urgências não emergenciais — evite filas de pronto-socorro",
        "Atestados e receitas digitais emitidos na hora, direto no celular",
        "A partir de R$ 29,90/mês — menos que uma pizza",
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
        "Clube de Descontos com até 80% off em medicamentos, exames e mais",
        "Pronto Atendimento ilimitado 24h por dia — sem surpresas no fim do mês",
        "Cabe no bolso: a partir de R$ 29,90/mês",
      ],
      cta: "Quero assinar",
    },
  ];
  return (
    <section id="beneficios-b2c" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Por que ter telemedicina?</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Por que assinar a Next Go Saúde?</h2>
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
                href="#planos"
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

const PLAN_TIERS = [
  {
    name: "Básico",
    individualPrice: 29.9,
    familyPrice: 59.9,
    individualUrl: "https://app.nextgosaude.com.br/public/plans/259598e8-8f3d-47ad-bcc9-5d8f0e61ce61",
    familyUrl: "https://app.nextgosaude.com.br/public/plans/785e7385-53b8-4344-9f43-14cfb80bb020",
    desc: "Pronto atendimento 24h sem carência e sem coparticipação.",
    features: [
      "Pronto Atendimento 24h — sempre sem carência",
      "Prescrição de receitas e tratamentos",
      "Pedidos de exames e atestado médico",
    ],
    highlight: false,
  },
  {
    name: "Intermediário",
    individualPrice: 39.9,
    familyPrice: 69.9,
    individualUrl: "https://app.nextgosaude.com.br/public/plans/2dd03547-e685-4ccf-9add-5ffa0cfb4447",
    familyUrl: "https://app.nextgosaude.com.br/public/plans/91940bc3-9731-4b67-8a47-30adb92a0c57",
    desc: "Tudo do Básico + Clube de Descontos para economizar no dia a dia.",
    features: [
      "Tudo do plano Básico",
      "Clube de Descontos com até 80% off",
      "Descontos em medicamentos, exames laboratoriais e de imagem",
      "Benefícios em academias, cinemas e lojas parceiras",
    ],
    highlight: false,
  },
  {
    name: "Avançado",
    individualPrice: 49.9,
    familyPrice: 79.9,
    individualUrl: "https://app.nextgosaude.com.br/public/plans/b7fd7961-b904-4579-9c87-23f36a98e9b9",
    familyUrl: "https://app.nextgosaude.com.br/public/plans/adfb3809-bbc8-41b9-bcae-6dc973354999",
    individualDesc: "Inclui especialistas — carência de 60 dias para especialidades.",
    familyDesc: "Inclui especialistas — carência de 30 dias para especialidades.",
    desc: "Inclui acesso a especialistas.",
    features: [
      "Tudo do Intermediário",
      "Acesso a 30+ especialidades médicas",
      "Encaminhamento para especialistas",
      "Coparticipação de R$69,90 apenas em Nutrição e Psicologia",
    ],
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "Premium",
    individualPrice: 109.9,
    familyPrice: 359.9,
    individualUrl: "https://app.nextgosaude.com.br/public/plans/bf9749a0-f2b8-42ea-8129-9c37de691fa5",
    familyUrl: "https://app.nextgosaude.com.br/public/plans/76419ac0-b747-42f4-91f0-1c192140153",
    individualDesc: "Sem carência e sem coparticipação. Cobertura completa com consultas inclusas.",
    familyDesc: "Sem carência e sem coparticipação. Cobertura completa com consultas inclusas.",
    features: [
      "Tudo do Avançado, sem carência",
      "2 consultas/mês com Psicologia inclusas por vida",
      "1 consulta a cada 90 dias com Nutrição inclusa por vida",
      "Sem nenhuma carência e sem coparticipação",
    ],
    highlight: false,
  },
];

function Pricing() {
  const [audience, setAudience] = useState<"individual" | "familiar">("individual");
  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos</span>
          <p className="mt-3 text-sm font-semibold text-primary">
            Pronto Atendimento 24h sempre sem carência. Sem fidelidade. Cancele quando quiser.
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Escolha o cuidado certo para você</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pagamento via PIX ou cartão de crédito. Acesso imediato após a primeira mensalidade.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Escolha o tipo de plano
          </span>
          <div
            role="tablist"
            aria-label="Tipo de plano"
            className="relative inline-flex p-1.5 rounded-full bg-muted border-2 border-primary/30 shadow-soft"
          >
            {([
              { key: "individual", label: "Individual" },
              { key: "familiar", label: "Familiar" },
            ] as const).map(opt => {
              const active = audience === opt.key;
              return (
                <button
                  key={opt.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setAudience(opt.key)}
                  className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "gradient-primary text-primary-foreground shadow-soft scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-muted-foreground mt-1">
            ← Clique para alternar entre Individual e Familiar →
          </span>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAN_TIERS.map(p => {
            const price = audience === "individual" ? p.individualPrice : p.familyPrice;
            return (
              <article
                key={p.name}
                className={`relative p-7 rounded-3xl border bg-card transition ${
                  p.highlight ? "border-primary shadow-soft lg:-translate-y-3" : "border-border shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 min-h-[3rem]">
                  {audience === "individual"
                    ? ((p as { individualDesc?: string }).individualDesc ?? p.desc)
                    : ((p as { familyDesc?: string }).familyDesc ?? p.desc)}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-muted-foreground">R$</span>
                  <span className="font-display text-5xl font-extrabold">
                    {price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {audience === "individual" ? "por vida" : "para até 4 vidas"}
                </p>
                <a
                  href={audience === "individual" ? p.individualUrl : p.familyUrl}
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
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  const faqs = [
    { q: "O que é a NextGo Saúde?", a: "A NextGo Saúde é a sua plataforma de telemedicina completa, que te conecta com médicos de diversas especialidades, psicólogos e nutricionistas de onde você estiver, a hora que precisar. Nosso objetivo é melhorar a sua vida e a da sua família, oferecendo acesso fácil e rápido a serviços de saúde de qualidade a preços justos. Chega de filas e burocracia, a saúde está na palma da sua mão!" },
    { q: "Como funciona a telemedicina da NextGo Saúde?", a: "A telemedicina é como uma consulta médica normal, só que realizada à distância usando a internet. Você pode conversar com médicos, tirar dúvidas, receber diagnósticos e até acompanhamento médico sem sair de casa. É tudo feito por vídeo chamada através da nossa plataforma." },
    { q: "Quais serviços estão incluídos nos planos da NextGo Saúde?", a: "Nossos planos oferecem uma variedade de serviços para cuidar da sua saúde, do Básico ao Premium: Pronto Atendimento 24h por dia, 7 dias por semana, com tempo de espera médio de apenas 8 minutos; agendamento de consultas com mais de 30 especialidades médicas (adulto e infantil); Telepsicologia e Telenutrição sem necessidade de encaminhamento; emissão de receitas, atestados e pedidos de exame; histórico completo de atendimento; encaminhamento para especialistas da rede; e Clube de Descontos com até 80% em medicamentos nas principais farmácias (Raia, Pague Menos, Araújo), exames (Hermes Pardini, São Marcos) e diversas lojas como Magalu, Petz e Netshoes." },
    { q: "Quais são as especialidades médicas disponíveis?", a: "Especialidades disponíveis para você e sua família: Psicologia (Coparticipação) – ADULTO; Psicologia (TEA) +4 – INFANTIL; Psiquiatria +16 (Coparticipação) – ADULTO; Nutrição (Coparticipação) – ADULTO; Nutrição +10 – INFANTIL; Dermatologia – INFANTIL; Dermatologia (Coparticipação) – ADULTO; Cardiologia – ADULTO; Cardiologia +14 – INFANTIL; Clínico da Família – ADULTO; Clínico Geral – ADULTO; Endocrinologia +16 – ADULTO; Geriatria +60 – ADULTO; Ginecologia – ADULTO; Ginecologia +12 – INFANTIL; Neurologia – ADULTO; Neurologia +14 – INFANTIL; Ortopedia – ADULTO; Ortopedia – INFANTIL; Otorrinolaringologia – ADULTO; Otorrinolaringologia +6 – INFANTIL; Pediatria – INFANTIL; Traumatologia – ADULTO; Traumatologia – INFANTIL; Urologia – ADULTO; Urologia – INFANTIL." },
    { q: "Como agendar uma consulta?", a: "É super fácil! Agende suas consultas de especialista pela nossa plataforma, acessível pelo site. Basta fazer login, selecionar a especialidade e escolher o melhor horário. Para o pronto atendimento o acesso é imediato, sem agendamento." },
    { q: "Como acessar minha conta?", a: "Acesse diretamente pela nossa plataforma no site https://app.nextgosaude.com.br/. Se preferir, adicione o link à tela inicial do seu celular para acessar com um toque, como se fosse um atalho rápido." },
    { q: "Como funciona o pronto atendimento?", a: "É só acessar a plataforma pelo site e você será atendido em poucos minutos por um médico para te ajudar com a urgência. O tempo de espera médio é de apenas 8 minutos!" },
    { q: "Depois de quanto tempo posso usar todos os serviços?", a: "O Pronto Atendimento 24h e o Clube de Descontos podem ser usados imediatamente após o pagamento da primeira mensalidade, em todos os planos. Para consultas com especialistas, psicólogos e nutricionistas: no plano Avançado, a carência é de 60 dias no Individual e 30 dias no Familiar; no plano Premium não há carência — ele já inclui 2 atendimentos mensais com Psicólogo e 1 atendimento a cada 90 dias com Nutricionista por vida." },
    { q: "Terei que pagar alguma taxa extra nas consultas?", a: "Na maioria das especialidades não há taxa extra além da mensalidade. Apenas para consultas de Psicologia e Nutrição há coparticipação por consulta, paga no momento do agendamento: R$ 69,90 no plano Individual Avançado e R$ 29,90 no Familiar Avançado. No Premium, as consultas inclusas (2/mês com Psicologia e 1 a cada 90 dias com Nutrição) já estão liberadas sem coparticipação — você só paga se exceder o uso incluído" },
    { q: "Como funciona o Clube de Descontos?", a: "Ao assinar qualquer plano, você ganha acesso automático ao Clube de Descontos. Basta apresentar sua identificação de membro nos parceiros conveniados para aproveitar descontos em medicamentos, exames, produtos naturais, academias e diversas outras lojas." },
    { q: "Posso incluir minha família no plano?", a: "Com certeza! Nossos planos são ideais para a família, com opções para diferentes números de vidas. No cadastro, você inclui todos os seus dependentes." },
    { q: "E se eu precisar cancelar o plano?", a: "O cancelamento é simples e sem burocracia: você pode cancelar direto pela plataforma. Também é automático em caso de suspensão do pagamento — fique atento para não perder seus acessos e não ser afetado por nova carência ao readerir. Nossos planos não têm fidelidade." },
    { q: "O que acontece se eu não puder comparecer a uma consulta agendada?", a: "Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência pela plataforma. Se for cancelado com menos de 24 horas, será cobrada uma multa de R$ 70,00. Em situações especiais, você pode solicitar reembolso ao nosso suporte." },
    { q: "A plataforma é segura?", a: "Sim! Nossa plataforma é estável e segura, com mais de 99,9% de tempo de funcionamento. Todos os dados são tratados com privacidade e confidencialidade, seguindo a Lei Geral de Proteção de Dados (LGPD)." },
    { q: "E se minha internet cair durante uma consulta?", a: "Imprevistos acontecem. Se sua internet cair ou a plataforma apresentar problema, entre em contato com nosso suporte para que possamos te ajudar a retomar o atendimento sem prejuízos." },
    { q: "Para quem a NextGo Saúde é indicada?", a: "Para todos que buscam atendimento médico de qualidade, rápido e acessível: quem quer acesso a diversas especialidades sem sair de casa; quem precisa de pronto atendimento a qualquer hora; quem quer economizar com consultas, exames e medicamentos; quem mora longe de hospitais e UPAs; e brasileiros que moram fora do país e se sentem inseguros com atendimento médico em outros idiomas." },
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
            Telemedicina 24h para você e sua família. Saúde na palma da mão, com tecnologia, acolhimento e segurança.
          </p>
          <p className="mt-3 text-xs opacity-70 max-w-sm">
            Somos franqueados credenciados oficiais da Next Go Saúde, autorizados a comercializar os planos de telemedicina.
          </p>
          <p className="mt-4 text-xs opacity-60">CNPJ 00.000.000/0001-00 · Next Go Saúde Telemedicina LTDA</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Navegue</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#beneficios-b2c">Por que assinar</a></li>
            <li><a href="#planos">Planos</a></li>
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
        <span>© {new Date().getFullYear()} Next Go Saúde Telemedicina. Todos os direitos reservados. Franqueado credenciado oficial.</span>
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
      
      <Footer />
      <FloatingWhats />
    </main>
  );
}
