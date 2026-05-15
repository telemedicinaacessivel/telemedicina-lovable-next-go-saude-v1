import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen, Palette, Type, Shapes, Image as ImageIcon, MessageSquare,
  ShieldCheck, CheckCircle2, XCircle, Sparkles, Instagram, Download, ExternalLink,
} from "lucide-react";
import logo from "@/assets/nextgo-logo.png";

export const Route = createFileRoute("/manual-marca")({
  head: () => ({
    meta: [
      { title: "Manual de Identidade Visual — Next Go Saúde (interno)" },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow" },
      { name: "description", content: "Documento interno de uso restrito." },
    ],
  }),
  component: ManualMarca,
});

const COLORS = [
  { name: "Primary / Mint", var: "--primary", hex: "#06AD8C", role: "Ações principais, CTAs, botões e destaques de marca." },
  { name: "Primary Deep", var: "--primary-deep", hex: "#00805A", role: "Estados hover, gradientes e profundidade visual." },
  { name: "Secondary / Deep Teal", var: "--secondary", hex: "#004C57", role: "Headers, footers e títulos institucionais." },
  { name: "Teal", var: "--teal", hex: "#1391A0", role: "Ícones, links e elementos gráficos de apoio." },
  { name: "Foreground", var: "--foreground", hex: "#110B11", role: "Textos longos e conteúdo informativo." },
  { name: "Muted Foreground", var: "--muted-foreground", hex: "#545454", role: "Textos secundários, descrições, legendas." },
  { name: "Background", var: "--background", hex: "#F7FBF9", role: "Cor de fundo padrão de páginas." },
  { name: "WhatsApp", var: "--whatsapp", hex: "#25D366", role: "Exclusivo para botões de contato via WhatsApp." },
];

const TYPE_SCALE = [
  { el: "H1", token: "text-5xl", weight: "700 Bold", use: "Títulos principais de páginas e capas." },
  { el: "H2", token: "text-4xl", weight: "700 Bold", use: "Subtítulos de seções e divisores." },
  { el: "H3", token: "text-2xl", weight: "600 Semibold", use: "Títulos de cards, módulos e componentes." },
  { el: "Body", token: "text-base", weight: "400 Regular", use: "Texto corrido, parágrafos e artigos." },
  { el: "Legenda", token: "text-sm", weight: "400 Regular", use: "Descrições, rodapés e labels técnicos." },
];

function Section({ id, n, title, kicker, icon: Icon, children }: { id: string; n: string; title: string; kicker?: string; icon: any; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-t border-border scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-9 h-9 rounded-lg gradient-primary text-white flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono tracking-widest text-muted-foreground">SEÇÃO {n}</span>
        </div>
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
      <div className="h-24" style={{ background: `var(${varName})` }} />
      <div className="p-4 space-y-1">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">{hex} · var({varName})</div>
        <p className="text-xs mt-2 text-muted-foreground leading-relaxed">{role}</p>
      </div>
    </div>
  );
}

function ManualMarca() {
  const TOC = [
    ["intro", "1. Introdução"],
    ["fundamentos", "2. Elementos Fundamentais"],
    ["aplicacao", "3. Diretrizes de Aplicação"],
    ["tom-de-voz", "4. Tom de Voz"],
    ["recursos", "5. Recursos"],
  ] as const;

  return (
    <main className="min-h-screen bg-background">
      {/* Capa */}
      <header className="gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center justify-between mb-12">
            <img src={logo} alt="Next Go Saúde" className="h-10 w-auto brightness-0 invert" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-white/15 px-3 py-1.5 rounded-full border border-white/20">
              Uso interno · não indexado
            </span>
          </div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80 mb-3">
            Manual de Identidade Visual · v1.0
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
            A identidade visual da Next Go Saúde
          </h1>
          <p className="mt-6 text-white/85 max-w-2xl text-lg">
            Diretrizes de marca, design system e estratégia de comunicação para garantir consistência em cada ponto de contato.
          </p>
          <p className="mt-8 text-xs text-white/70 font-mono">15 de maio de 2026</p>

          {/* Sumário */}
          <nav className="mt-10 grid sm:grid-cols-2 md:grid-cols-5 gap-2">
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-sm bg-white/10 hover:bg-white/20 transition border border-white/15 rounded-lg px-3 py-2 backdrop-blur">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 1. Introdução */}
      <Section id="intro" n="01" title="Introdução" kicker="Posicionamento" icon={BookOpen}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              A Next Go Saúde posiciona-se como uma <em>health tech</em> de vanguarda, unindo tecnologia e cuidado humano por meio de soluções de telemedicina 24h, clubes de benefícios e conformidade normativa (NR-01) para o setor corporativo. Nossa essência visual reflete esse dualismo: inovação constante e solidez institucional.
            </p>
            <p>
              A linguagem combina o frescor do <strong>Mint</strong> com a profundidade do <strong>Deep Teal</strong>, estabelecendo uma estética simultaneamente moderna, acolhedora e rigorosamente profissional.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-mono text-muted-foreground mb-3">PILARES</p>
            <ul className="space-y-3 text-sm">
              {["Inovação", "Confiança", "Cuidado humano"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* 2. Fundamentos */}
      <Section id="fundamentos" n="02" title="Elementos Fundamentais" kicker="Marca" icon={ShieldCheck}>
        {/* 2.1 Logo */}
        <h3 className="text-2xl font-semibold mb-4">2.1 Uso do Logotipo</h3>
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl border border-border bg-white p-12 flex items-center justify-center shadow-card">
            <img src={logo} alt="Logo principal" className="h-14 w-auto" />
            <span className="absolute mt-24 text-[11px] text-muted-foreground font-mono">Versão principal · fundos claros</span>
          </div>
          <div className="rounded-2xl gradient-brand p-12 flex items-center justify-center shadow-card relative">
            <img src={logo} alt="Logo invertida" className="h-14 w-auto brightness-0 invert" />
            <span className="absolute bottom-3 text-[11px] text-white/80 font-mono">Versão invertida · fundos escuros</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm mb-8">
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Área de respiro</p>
            <p className="text-muted-foreground">Mínimo da altura do símbolo em todos os lados.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Tamanho mínimo</p>
            <p className="text-muted-foreground">28px (digital) · 12mm (impresso).</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="font-semibold mb-1">Versões oficiais</p>
            <p className="text-muted-foreground">Principal e invertida — apenas estas.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="font-semibold">Pode</p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>· Aplicar em fundos claros (versão principal)</li>
              <li>· Aplicar em fundos escuros (versão invertida)</li>
              <li>· Manter área de respiro adequada</li>
              <li>· Usar em SVG para web e impressão de qualidade</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-rose-600" />
              <p className="font-semibold">Não pode</p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>· Distorcer, alongar ou rotacionar o logo</li>
              <li>· Recolorir fora da paleta oficial</li>
              <li>· Aplicar sombras, contornos ou efeitos 3D</li>
              <li>· Usar sobre fundos com baixo contraste</li>
            </ul>
          </div>
        </div>

        {/* 2.2 Cores */}
        <h3 className="text-2xl font-semibold mt-14 mb-2">2.2 Paleta de Cores</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Tokens que garantem harmonia entre produto digital e comunicação. As primárias dominam ações de conversão; o Deep Teal ancora a estrutura.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {COLORS.map((c) => <Swatch key={c.var} {...c} varName={c.var} />)}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl gradient-primary h-28 shadow-soft flex items-end p-5 text-white text-sm font-mono">
            --gradient-primary
          </div>
          <div className="rounded-2xl gradient-brand h-28 shadow-soft flex items-end p-5 text-white text-sm font-mono">
            --gradient-brand
          </div>
        </div>

        {/* 2.3 Tipografia */}
        <h3 className="text-2xl font-semibold mt-14 mb-2">2.3 Tipografia</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Duas famílias complementares organizam a informação de forma hierárquica e funcional.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-mono text-muted-foreground mb-3">Display · Plus Jakarta Sans · Bold (700)</p>
            <p className="text-5xl font-bold leading-tight">Aa Bb Cc</p>
            <p className="text-2xl font-semibold mt-3">Saúde na palma da mão</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-xs font-mono text-muted-foreground mb-3">Body · Inter · Regular (400) / Medium (500)</p>
            <p className="text-3xl">Aa Bb Cc</p>
            <p className="text-base mt-3 leading-relaxed">
              Atendimento médico imediato, sem carência, em qualquer lugar. Conformidade NR-01 para empresas.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th className="p-3 font-semibold">Elemento</th>
                <th className="p-3 font-semibold">Token</th>
                <th className="p-3 font-semibold">Peso</th>
                <th className="p-3 font-semibold">Aplicação</th>
              </tr>
            </thead>
            <tbody>
              {TYPE_SCALE.map((r) => (
                <tr key={r.el} className="border-t border-border">
                  <td className="p-3 font-semibold">{r.el}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{r.token}</td>
                  <td className="p-3">{r.weight}</td>
                  <td className="p-3 text-muted-foreground">{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. Aplicação */}
      <Section id="aplicacao" n="03" title="Diretrizes de Aplicação" kicker="Sistema visual" icon={Shapes}>
        <h3 className="text-2xl font-semibold mb-4">3.1 Iconografia e Estilo Visual</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: Shapes, t: "Ícones", d: "Estilo outline, traço entre 1.5px e 2px, cantos levemente arredondados." },
            { icon: ImageIcon, t: "Ilustrações", d: "Flat-modern, exclusivamente cores da paleta, sem excesso de detalhes." },
            { icon: ImageIcon, t: "Fotografia", d: "Iluminação natural, tons quentes, contextos reais de cuidado." },
            { icon: Palette, t: "Gradientes", d: "Restritos a --gradient-primary e --gradient-brand em banners e fundos." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg gradient-primary text-white flex items-center justify-center mb-3">
                <c.icon className="w-4 h-4" />
              </div>
              <h4 className="font-semibold mb-1">{c.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-14 mb-4">3.2 Aplicação em Social Media</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Posts quadrados", size: "1080 × 1080 px", margin: "Margem interna de 50px. Logotipo nos cantos com respiro de 40px." },
            { t: "Stories", size: "1080 × 1920 px", margin: "60px laterais e 80px topo/base. Conteúdo principal em 960×1000px." },
            { t: "Capas", size: "1280 × 720 px", margin: "Margem de 40px. Títulos a no mínimo 48px do logotipo." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <Instagram className="w-4 h-4 text-teal" />
                <p className="text-xs font-mono text-muted-foreground">{s.size}</p>
              </div>
              <h4 className="font-semibold mb-1">{s.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.margin}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Tom de voz */}
      <Section id="tom-de-voz" n="04" title="Tom de Voz" kicker="Comunicação" icon={MessageSquare}>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { t: "Profissional mas acolhedor", d: "Evite termos clínicos ou jurídicos. Explique a NR-01 de forma didática." },
            { t: "Próximo e humano", d: "Tratamento direto (\"você\"). Soamos como parceiro de saúde, não como burocracia." },
            { t: "Segurança e confiança", d: "Afirmações precisas e embasadas em dados, com fechamento empático." },
            { t: "Digital sem ser robótico", d: "Somos tech, mas a entrega é bem-estar humano. Texto ágil, nunca frio." },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
              <h4 className="font-semibold mb-1">{p.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-rose-600" />
            <p className="font-semibold">O que evitar</p>
          </div>
          <p className="text-sm text-foreground/80">
            Sensacionalismo · promessas de cura milagrosa · jargões técnicos desnecessários · tons paternalistas ou autoritários.
          </p>
        </div>
      </Section>

      {/* 5. Recursos */}
      <Section id="recursos" n="05" title="Recursos" kicker="Ferramentas" icon={Download}>
        <div className="grid md:grid-cols-2 gap-5">
          <Link to="/design-system" className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-soft transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg gradient-primary text-white flex items-center justify-center">
                <Palette className="w-4 h-4" />
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
            </div>
            <h4 className="font-semibold mb-1">Design System Online</h4>
            <p className="text-sm text-muted-foreground">Componentes, tokens e prototipagem em uso interno.</p>
          </Link>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="w-10 h-10 rounded-lg gradient-primary text-white flex items-center justify-center mb-3">
              <Type className="w-4 h-4" />
            </div>
            <h4 className="font-semibold mb-1">Tokens de Estilo</h4>
            <p className="text-sm text-muted-foreground">Consultar <code className="font-mono text-xs">variables.css</code> para hex, escalas e espaçamentos.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="w-10 h-10 rounded-lg gradient-primary text-white flex items-center justify-center mb-3">
              <Download className="w-4 h-4" />
            </div>
            <h4 className="font-semibold mb-1">Assets de Marca</h4>
            <p className="text-sm text-muted-foreground">Logotipo em SVG, PNG e PDF — solicitar à coordenação de design.</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="w-10 h-10 rounded-lg gradient-primary text-white flex items-center justify-center mb-3">
              <Type className="w-4 h-4" />
            </div>
            <h4 className="font-semibold mb-1">Tipografia</h4>
            <p className="text-sm text-muted-foreground">Plus Jakarta Sans e Inter, gratuitas via Google Fonts.</p>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-muted-foreground border-t border-border">
        Documento interno · Next Go Saúde · Elaborado em 15 de maio de 2026 · Não publicar publicamente
      </footer>
    </main>
  );
}
