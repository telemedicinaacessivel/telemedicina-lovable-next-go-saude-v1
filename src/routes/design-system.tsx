import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, ShieldCheck, MessageCircle, Check, Sparkles, HeartPulse,
} from "lucide-react";
import logo from "@/assets/nextgo-logo.png";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "Design System — Next Go (interno)" },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow" },
    ],
  }),
  component: DesignSystem,
});

const COLORS = [
  { name: "Primary / Mint", var: "--primary", hex: "#06AD8C", role: "Ações, CTAs, marca" },
  { name: "Primary Deep", var: "--primary-deep", hex: "#00805A", role: "Hover, gradientes" },
  { name: "Secondary / Deep Teal", var: "--secondary", hex: "#004C57", role: "Texto institucional, footer" },
  { name: "Teal", var: "--teal", hex: "#1391A0", role: "Apoio, ícones, links" },
  { name: "Foreground", var: "--foreground", hex: "#110B11", role: "Texto principal" },
  { name: "Muted Foreground", var: "--muted-foreground", hex: "#545454", role: "Texto secundário" },
  { name: "Background", var: "--background", hex: "#F7FBF9", role: "Fundo de página" },
  { name: "WhatsApp", var: "--whatsapp", hex: "#25D366", role: "Botão WhatsApp" },
];

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {kicker && <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal mb-2">{kicker}</p>}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Swatch({ name, varName, hex, role }: { name: string; varName: string; hex: string; role: string }) {
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-card">
      <div className="h-28" style={{ background: `var(${varName})` }} />
      <div className="p-4 space-y-1">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">{hex}</div>
        <div className="text-xs text-muted-foreground font-mono">var({varName})</div>
        <div className="text-xs mt-2">{role}</div>
      </div>
    </div>
  );
}

function DesignSystem() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-brand text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-center justify-between mb-10">
            <img src={logo} alt="Next Go" className="h-10 w-auto brightness-0 invert" />
            <span className="text-xs font-semibold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full border border-white/20">
              Uso interno · não indexado
            </span>
          </div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-3">Design System v1.0</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            A linguagem visual da Next Go Saúde
          </h1>
          <p className="mt-5 text-white/85 max-w-2xl text-lg">
            Cores, tipografia, componentes e princípios para construir experiências consistentes em todos os pontos de contato da marca.
          </p>
        </div>
      </header>

      {/* Princípios */}
      <Section id="principios" title="Princípios de marca" kicker="Fundamentos">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: HeartPulse, t: "Humano e acolhedor", d: "Saúde acessível, com linguagem clara e empática." },
            { icon: ShieldCheck, t: "Seguro e confiável", d: "Conformidade NR-01, LGPD e CFM em primeiro lugar." },
            { icon: Sparkles, t: "Moderno e direto", d: "Design limpo, mobile-first, sem ruído visual." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="w-11 h-11 rounded-xl gradient-primary text-white flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Logo */}
      <Section id="logo" title="Logotipo" kicker="Identidade">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border bg-white p-10 flex items-center justify-center shadow-card">
            <img src={logo} alt="Logo principal" className="h-14 w-auto" />
          </div>
          <div className="rounded-2xl gradient-brand p-10 flex items-center justify-center shadow-card">
            <img src={logo} alt="Logo invertida" className="h-14 w-auto brightness-0 invert" />
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Área de respiro</p>
            <p className="text-muted-foreground">Mantenha no mínimo a altura do símbolo em todos os lados.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Tamanho mínimo</p>
            <p className="text-muted-foreground">28px de altura em telas, 12mm em impressos.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Não fazer</p>
            <p className="text-muted-foreground">Não distorcer, recolorir fora da paleta ou aplicar sombras.</p>
          </div>
        </div>
      </Section>

      {/* Cores */}
      <Section id="cores" title="Paleta de cores" kicker="Cores">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {COLORS.map((c) => <Swatch key={c.var} name={c.name} varName={c.var} hex={c.hex} role={c.role} />)}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl gradient-primary h-32 shadow-soft flex items-end p-5 text-white text-sm font-mono">
            --gradient-primary
          </div>
          <div className="rounded-2xl gradient-brand h-32 shadow-soft flex items-end p-5 text-white text-sm font-mono">
            --gradient-brand
          </div>
        </div>
      </Section>

      {/* Tipografia */}
      <Section id="tipografia" title="Tipografia" kicker="Tipografia">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-mono text-muted-foreground mb-3">Display · Plus Jakarta Sans</p>
            <p className="text-5xl font-bold leading-tight">Saúde na palma da mão</p>
            <p className="text-2xl font-semibold mt-3">Telemedicina 24h</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-mono text-muted-foreground mb-3">Body · Inter</p>
            <p className="text-base">
              Atendimento médico imediato, sem carência, em qualquer lugar. Conformidade NR-01 para empresas e clube de descontos para colaboradores.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Texto secundário em muted-foreground, usado em descrições e legendas.
            </p>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            ["H1", "text-5xl / 700"],
            ["H2", "text-4xl / 700"],
            ["H3", "text-2xl / 600"],
            ["Body", "text-base / 400"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold">{k}</p>
              <p className="text-xs text-muted-foreground font-mono">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Botões */}
      <Section id="botoes" title="Botões e CTAs" kicker="Componentes">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="gradient-primary text-white px-6 py-3 rounded-full font-semibold shadow-soft">
            Assinar agora
          </button>
          <button className="bg-secondary text-white px-6 py-3 rounded-full font-semibold">
            Saber mais
          </button>
          <button className="bg-[var(--whatsapp)] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </button>
          <button className="border border-border text-foreground px-6 py-3 rounded-full font-semibold">
            Secundário
          </button>
          <button className="text-primary font-semibold underline underline-offset-4">
            Link de ação
          </button>
        </div>
      </Section>

      {/* Cards */}
      <Section id="cards" title="Cards" kicker="Componentes">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Stethoscope className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg">Médico 24h</h3>
            <p className="text-sm text-muted-foreground mt-1">Atendimento imediato, sem carência.</p>
          </div>
          <div className="rounded-2xl gradient-primary p-6 text-white shadow-soft">
            <ShieldCheck className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg">Plano destacado</h3>
            <p className="text-sm text-white/85 mt-1">Variação para planos populares.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <ul className="space-y-2 text-sm">
              {["Telemedicina 24h", "Clube de descontos", "Conformidade NR-01"].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tokens */}
      <Section id="tokens" title="Tokens & utilitários" kicker="Sistema">
        <div className="grid md:grid-cols-2 gap-5 text-sm font-mono">
          <pre className="rounded-2xl border border-border bg-card p-5 overflow-x-auto">{`--radius: 0.875rem
--shadow-soft
--shadow-card
--gradient-primary
--gradient-brand`}</pre>
          <pre className="rounded-2xl border border-border bg-card p-5 overflow-x-auto">{`.glass
.gradient-primary
.gradient-brand
.shadow-soft
.pulse-cta`}</pre>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-muted-foreground border-t border-border">
        Documento interno · Next Go Saúde · Não publicar publicamente
      </footer>
    </main>
  );
}
