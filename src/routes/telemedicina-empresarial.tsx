import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Menu, X, ShieldCheck, TrendingDown, Users, Briefcase,
  Zap, Clock, Smartphone, ShieldPlus, Check, Building2, Loader2,
  Lock, FileSignature, Pill, Quote, ChevronDown, Star,
} from "lucide-react";
import logo from "@/assets/nextgo-logo.png";
import telemedMockup from "@/assets/telemedicina-mockup.png";

export const Route = createFileRoute("/telemedicina-empresarial")({
  head: () => ({
    meta: [
      { title: "Telemedicina Empresarial: Atendimento em 8 min | Next Go Saúde" },
      { name: "description", content: "Reduza o absenteísmo, cumpra a NR-01 e ofereça telemedicina corporativa 24h sem carência. Atendimento em 8 minutos para sua equipe." },
      { property: "og:title", content: "Telemedicina Empresarial: Atendimento em 8 min | Next Go Saúde" },
      { property: "og:description", content: "Reduza o absenteísmo, cumpra a NR-01 e ofereça telemedicina corporativa 24h sem carência. Atendimento em 8 minutos para sua equipe." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://telemedicinaacessivel.com.br/telemedicina-empresarial" },
    ],
    links: [
      { rel: "canonical", href: "https://telemedicinaacessivel.com.br/telemedicina-empresarial" },
    ],
  }),
  component: TelemedicinaEmpresarial,
});

const FORM_ID = "proposta-corporativa";
const PLANS_ID = "planos-empresariais";
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "yahoo.com.br",
  "live.com", "icloud.com", "bol.com.br", "uol.com.br", "terra.com.br",
  "msn.com", "me.com", "proton.me", "protonmail.com",
]);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollToForm() { scrollToId(FORM_ID); }
function scrollToPlans() { scrollToId(PLANS_ID); }

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "dores", label: "Por quê" },
    { id: "beneficios-b2b", label: "Benefícios" },
    { id: PLANS_ID, label: "Planos" },
    { id: "faq", label: "FAQ" },
    { id: FORM_ID, label: "Cotação" },
  ];
  return (
    <header className="glass fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Next Go Saúde">
          <img src={logo} alt="Next Go Saúde" width={140} height={44} className="h-9 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map(l => (
            <li key={l.id}>
              <button
                onClick={() => scrollToId(l.id)}
                className="hover:text-foreground transition"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={scrollToForm}
          className="hidden md:inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition shadow-soft"
        >
          <Briefcase className="w-4 h-4" /> Receber cotação
        </button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-white/90 backdrop-blur px-5 py-4 space-y-3">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { setOpen(false); scrollToId(l.id); }}
              className="block text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { setOpen(false); scrollToForm(); }}
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold"
          >
            <Briefcase className="w-4 h-4" /> Receber cotação
          </button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-accent/60 px-3 py-1.5 rounded-full">
          <Building2 className="w-3.5 h-3.5" /> Telemedicina para empresas
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Zere as faltas por idas ao pronto-socorro.{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Telemedicina corporativa com atendimento em 8 minutos.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reduza o absenteísmo, garanta conformidade com a NR-01 e ofereça um benefício
          de saúde que cabe no orçamento da sua empresa. Sem carência.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={scrollToForm}
            className="pulse-cta gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-soft hover:scale-[1.02] transition"
          >
            Receber Cotação Personalizada
          </button>
          <button
            onClick={scrollToPlans}
            className="bg-card text-foreground border border-border font-semibold px-7 py-4 rounded-full hover:border-primary hover:text-primary transition"
          >
            Ver Planos para MEI/PME
          </button>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <li className="inline-flex items-center gap-1.5">
            <Pill className="w-4 h-4 text-primary" />
            Receitas aceitas em qualquer farmácia
          </li>
          <li className="inline-flex items-center gap-1.5">
            <FileSignature className="w-4 h-4 text-primary" />
            Atestados com Assinatura Digital ICP-Brasil
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-primary" />
            Sigilo Médico Garantido (LGPD)
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pains() {
  const items = [
    {
      icon: TrendingDown,
      title: "Custos abusivos",
      desc: "Planos de saúde tradicionais consomem o orçamento da empresa com reajustes anuais altíssimos e coparticipações pouco transparentes — fora a sinistralidade que pesa todo ano.",
    },
    {
      icon: Clock,
      title: "Queda de produtividade",
      desc: "Cada falta por consulta simples vira meio turno perdido. Funcionários se ausentam para receita, atestado ou exame de rotina — coisas que se resolvem em minutos no celular.",
    },
    {
      icon: Users,
      title: "Retenção de talentos",
      desc: "Sem um benefício de saúde competitivo, sua equipe migra para a concorrência. Oferecer cuidado real à família do colaborador é o que diferencia o emprego que ele aceita do que ele recusa.",
    },
  ];
  return (
    <section id="dores" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Os 3 maiores desafios de RH hoje</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Saúde corporativa não precisa custar caro</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Se um destes problemas é familiar, a sua empresa está perdendo dinheiro todo mês.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <article key={i.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition">
              <div className="w-12 h-12 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                <i.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-muted-foreground">{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsB2B() {
  const items = [
    {
      icon: Zap,
      title: "Implementação em 24h",
      desc: "Da assinatura ao primeiro atendimento, em um dia útil. Sem integrações complexas, sem TI no meio do caminho.",
    },
    {
      icon: Check,
      title: "Sem carência para a equipe",
      desc: "Pronto Atendimento 24h liberado imediatamente para todos os colaboradores ativados — eles usam no mesmo dia.",
    },
    {
      icon: Smartphone,
      title: "Atendimento direto do celular",
      desc: "Consulta por vídeo em minutos, sem deslocamento e sem fila — o colaborador resolve no horário de almoço, sem perder o turno.",
    },
    {
      icon: ShieldPlus,
      title: "Suporte à NR-01",
      desc: "Apoio à gestão de riscos psicossociais com acesso a psicólogos — documentação que ajuda na conformidade da sua empresa.",
    },
  ];
  return (
    <section id="beneficios-b2b" className="py-20 md:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">O que sua empresa ganha</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Benefício corporativo, sem dor de cabeça</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pensado para PMEs que precisam de resultado, não de mais um sistema para gerenciar.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {items.map(i => (
              <article key={i.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition">
                <div className="w-12 h-12 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                  <i.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{i.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{i.desc}</p>
              </article>
            ))}
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={telemedMockup}
              alt="Colaborador em consulta médica por vídeo no celular"
              width={384}
              height={480}
              loading="lazy"
              className="w-64 md:w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={scrollToForm}
            className="gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-soft hover:scale-[1.02] transition"
          >
            Quero uma proposta para minha empresa
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "A facilidade do atendimento em minutos reduziu drasticamente as saídas de colaboradores para consultas simples. O atestado digital chega na hora para o RH.",
      author: "Gerente de RH",
    },
    {
      quote: "Implementamos como benefício e a aceitação foi imediata. Custo baixo e conformidade com as normas de saúde ocupacional.",
      author: "Diretor de Operações",
    },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resultados reais</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Empresas mais produtivas e colaboradores mais saudáveis
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map(t => (
            <article key={t.author} className="relative p-8 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/20" />
              <div className="flex gap-0.5 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">— {t.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  scope: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
  badge?: string;
};

function Plans() {
  const common = [
    "Atendimento clínico geral 24h",
    "Sem carência",
    "Receitas e atestados digitais",
  ];
  const plans: Plan[] = [
    {
      name: "Empresarial Básico",
      scope: "Até 10 vidas",
      price: "R$ 279",
      priceSuffix: "/mês",
      features: common,
      cta: "Assinar Agora",
      href: "https://app.nextgosaude.com.br/public/plans/0c23b2ef-be88-4b22-b2de-cb9b5cc60334",
    },
    {
      name: "Empresarial Básico",
      scope: "Até 30 vidas",
      price: "R$ 777",
      priceSuffix: "/mês",
      features: common,
      cta: "Assinar Agora",
      href: "https://app.nextgosaude.com.br/public/plans/daf50e38-df0e-4cdc-a950-51760dffbb69",
      highlight: true,
      badge: "Mais escolhido",
    },
    {
      name: "Corporativo",
      scope: "+30 vidas ou Customizado",
      price: "Sob consulta",
      features: common,
      cta: "Falar com Especialista",
      onClick: scrollToForm,
    },
  ];

  return (
    <section id={PLANS_ID} className="py-20 md:py-28 bg-muted/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos empresariais</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Escolha o plano ideal para o tamanho da sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Contratação rápida para MEI e PME. Acima de 30 colaboradores, montamos uma proposta sob medida.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(p => (
            <article
              key={`${p.name}-${p.scope}`}
              className={`relative flex flex-col p-7 rounded-2xl bg-card border shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg ${
                p.highlight
                  ? "border-primary ring-1 ring-primary/30 hover:ring-primary/50 hover:shadow-primary/20"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-soft">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.scope}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-foreground">{p.price}</span>
                {p.priceSuffix && (
                  <span className="text-muted-foreground text-sm font-medium">{p.priceSuffix}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition ${
                    p.highlight
                      ? "gradient-primary text-primary-foreground shadow-soft hover:scale-[1.02]"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  {p.cta}
                </a>
              ) : (
                <button
                  onClick={p.onClick}
                  className="mt-7 inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition"
                >
                  {p.cta}
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Os atestados têm validade legal?",
      a: "Sim, todos os atestados e receitas são emitidos com assinatura digital padrão ICP-Brasil, válidos em todo o território nacional.",
    },
    {
      q: "Tem carência para uso?",
      a: "Não. Após a confirmação do plano e cadastro dos colaboradores, o uso é imediato e disponível 24h por dia.",
    },
    {
      q: "Substitui o exame da NR-07?",
      a: "Não. A telemedicina atua como suporte preventivo e pronto-atendimento, apoiando as diretrizes de saúde da NR-01, mas não substitui exames ocupacionais obrigatórios (admissional/demissional).",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Perguntas frequentes</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Dúvidas comuns de quem decide
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={it.q}
                className="rounded-2xl border border-border bg-card overflow-hidden transition hover:border-primary/40"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold"
                  aria-expanded={open}
                >
                  <span>{it.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6 -mt-1 text-muted-foreground leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  challenge: string;
  consent: boolean;
  // honeypot
  website: string;
};

const initialForm: FormState = {
  name: "", email: "", phone: "", company: "", employees: "", challenge: "",
  consent: false, website: "",
};

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) =>
      [a && `(${a}`, a && a.length === 2 ? ") " : "", b, c && `-${c}`].filter(Boolean).join("")
    );
  }
  return d.replace(/(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
}

function validate(f: FormState): Partial<Record<keyof FormState, string>> {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (f.name.trim().length < 3) e.name = "Informe seu nome completo.";
  const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim());
  if (!emailMatch) e.email = "E-mail inválido.";
  else {
    const domain = f.email.trim().toLowerCase().split("@")[1] ?? "";
    if (FREE_EMAIL_DOMAINS.has(domain)) {
      e.email = "Use seu e-mail corporativo (não aceitamos Gmail, Hotmail, etc.).";
    }
  }
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) e.phone = "Informe um WhatsApp válido com DDD.";
  if (f.company.trim().length < 2) e.company = "Informe o nome da empresa.";
  if (!f.employees) e.employees = "Selecione o número de funcionários.";
  if (!f.challenge) e.challenge = "Selecione o desafio principal.";
  if (!f.consent) e.consent = "Necessário para conformidade com a LGPD.";
  return e;
}

function LeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const startedAt = useRef(Date.now());

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm(prev => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    // anti-bot: honeypot + min-time
    if (form.website) return;
    if (Date.now() - startedAt.current < 1500) {
      setErrors({ name: "Tente novamente em instantes." });
      return;
    }
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.replace(/\D/g, ""),
        company: form.company.trim(),
        employees: form.employees,
        challenge: form.challenge,
        source: "telemedicina-empresarial",
        submittedAt: new Date().toISOString(),
      };
      try {
        const KEY = "b2b_leads";
        const raw = localStorage.getItem(KEY);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push(payload);
        localStorage.setItem(KEY, JSON.stringify(arr));
      } catch {}
      // GTM event
      try {
        const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "b2b_lead_submit",
          lead_source: "telemedicina-empresarial",
          employees: payload.employees,
          challenge: payload.challenge,
        });
      } catch {}
      await new Promise(r => setTimeout(r, 400));
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="p-8 md:p-10 rounded-3xl bg-card border border-primary/30 shadow-soft text-center">
        <div className="w-14 h-14 grid place-items-center rounded-full gradient-primary text-primary-foreground mx-auto">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Recebemos sua solicitação!</h3>
        <p className="mt-3 text-muted-foreground">
          Nosso time corporativo vai analisar o perfil da sua empresa e entrar em contato pelo
          WhatsApp <strong>{maskPhone(form.phone)}</strong> em até 1 dia útil com uma cotação sob medida.
        </p>
      </div>
    );
  }

  const fieldBase = "w-full px-4 py-3 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition";
  const ok = "border-border";
  const bad = "border-red-400 focus:ring-red-300";

  return (
    <form onSubmit={onSubmit} noValidate className="p-6 md:p-10 rounded-3xl bg-card border border-border shadow-soft space-y-5">
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>Não preencha
          <input
            type="text" tabIndex={-1} autoComplete="off"
            value={form.website}
            onChange={e => set("website", e.target.value)}
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Nome completo</label>
          <input
            type="text" autoComplete="name" maxLength={120}
            value={form.name}
            onChange={e => set("name", e.target.value)}
            className={`${fieldBase} ${errors.name ? bad : ok}`}
            placeholder="Como devemos te chamar?"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">E-mail corporativo</label>
          <input
            type="email" autoComplete="email" maxLength={160} inputMode="email"
            value={form.email}
            onChange={e => set("email", e.target.value)}
            className={`${fieldBase} ${errors.email ? bad : ok}`}
            placeholder="voce@suaempresa.com.br"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">WhatsApp (com DDD)</label>
          <input
            type="tel" autoComplete="tel" inputMode="tel"
            value={form.phone}
            onChange={e => set("phone", maskPhone(e.target.value))}
            className={`${fieldBase} ${errors.phone ? bad : ok}`}
            placeholder="(11) 91234-5678"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">Nome da empresa</label>
          <input
            type="text" autoComplete="organization" maxLength={120}
            value={form.company}
            onChange={e => set("company", e.target.value)}
            className={`${fieldBase} ${errors.company ? bad : ok}`}
            placeholder="Razão social ou nome fantasia"
          />
          {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">Número de funcionários</label>
          <select
            value={form.employees}
            onChange={e => set("employees", e.target.value)}
            className={`${fieldBase} ${errors.employees ? bad : ok}`}
          >
            <option value="">Selecione…</option>
            <option value="1-5">1 a 5</option>
            <option value="6-20">6 a 20</option>
            <option value="21-50">21 a 50</option>
            <option value="50+">Mais de 50</option>
          </select>
          {errors.employees && <p className="mt-1 text-xs text-red-600">{errors.employees}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1.5">Principal desafio hoje</label>
          <select
            value={form.challenge}
            onChange={e => set("challenge", e.target.value)}
            className={`${fieldBase} ${errors.challenge ? bad : ok}`}
          >
            <option value="">Selecione…</option>
            <option value="absenteismo">Reduzir absenteísmo</option>
            <option value="baixo-custo">Oferecer benefício de baixo custo</option>
            <option value="nr-01">Cumprir a NR-01</option>
          </select>
          {errors.challenge && <p className="mt-1 text-xs text-red-600">{errors.challenge}</p>}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={e => set("consent", e.target.checked)}
          className="mt-1 w-4 h-4 accent-[var(--primary)]"
        />
        <span>
          Autorizo a Next Go Saúde a entrar em contato comigo com informações comerciais sobre
          o benefício corporativo e concordo com o tratamento dos meus dados conforme a
          <a href="/privacidade" className="text-primary hover:underline"> Política de Privacidade</a> (LGPD).
        </span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-red-600">{errors.consent}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-soft hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</> : "Receber Cotação Personalizada"}
      </button>
      <p className="text-xs text-muted-foreground">
        Resposta em até 1 dia útil. Seus dados são tratados em conformidade com a LGPD e nunca
        compartilhados com terceiros.
      </p>
    </form>
  );
}

function FormSection() {
  return (
    <section id={FORM_ID} className="py-20 md:py-28 bg-muted/40 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solicitar cotação</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Fale com um especialista corporativo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Conte sobre sua empresa em 1 minuto. Vamos preparar uma cotação sob medida para o seu
            tamanho e o seu desafio.
          </p>
        </div>
        <div className="mt-10">
          <LeadForm />
        </div>
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
            Telemedicina 24h para sua empresa. Saúde acessível, conformidade regulatória e
            colaboradores mais produtivos.
          </p>
          <p className="mt-4 text-xs opacity-60">CNPJ 50.452.066/0001-90 · Akvo Serviços Administrativos</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Navegue</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/">Planos individuais</a></li>
            <li><button onClick={scrollToPlans} className="hover:underline">Planos empresariais</button></li>
            <li><button onClick={scrollToForm} className="hover:underline">Solicitar cotação</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contato e legal</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="mailto:telemedicinaacessivel@gmail.com">telemedicinaacessivel@gmail.com</a></li>
            <li><a href="/termos" className="hover:underline">Termos de Uso</a></li>
            <li><a href="/privacidade" className="hover:underline">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 mt-12 pt-6 border-t border-white/10 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Next Go Saúde Telemedicina. Todos os direitos reservados.</span>
        <span>Em conformidade com CFM 2026 e LGPD.</span>
      </div>
    </footer>
  );
}

function TelemedicinaEmpresarial() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Pains />
      <BenefitsB2B />
      <Testimonials />
      <Plans />
      <FAQ />
      <FormSection />
      <Footer />
    </main>
  );
}
