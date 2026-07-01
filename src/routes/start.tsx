import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowLeft, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import logo from "@/assets/nextgo-logo.png";
import { saveLead } from "@/components/LeadCaptureDialog";
import { supabase } from "@/integrations/supabase/client";

const MIN_FORM_TIME_MS = 1500;
const REDIRECT_DELAY_MS = 1800;

// Allowlist of destination origins to prevent open-redirect abuse
const ALLOWED_HOSTS = [
  "wa.me",
  "api.whatsapp.com",
  "app.nextgosaude.com.br",
  "nextgosaude.com.br",
  "telemedicinaacessivel.com.br",
];

function isSafeNext(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:" && u.protocol !== "http:") return false;
    return ALLOWED_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

const onlyDigits = (s: string) => s.replace(/\D+/g, "");

const formatBrPhone = (raw: string) => {
  const d = onlyDigits(raw).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo")
    .regex(/^[A-Za-zÀ-ÿ' -]+$/, "Use apenas letras")
    .refine((v) => v.split(/\s+/).filter(Boolean).length >= 2, "Informe nome e sobrenome"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("E-mail inválido")
    .max(120, "E-mail muito longo")
    .refine((v) => {
      const domain = v.split("@")[1] ?? "";
      const blocked = ["mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com", "yopmail.com", "trashmail.com", "test.com", "example.com"];
      return !blocked.includes(domain);
    }, "Use um e-mail válido"),
  phone: z
    .string()
    .transform((v) => onlyDigits(v))
    .refine((v) => v.length === 10 || v.length === 11, "Telefone deve ter DDD + número")
    .refine((v) => {
      if (v.length === 11) return v[2] === "9";
      return /[2-5]/.test(v[2]);
    }, "Telefone inválido"),
  consent: z.literal(true, { errorMap: () => ({ message: "Você precisa aceitar para continuar" }) }),
  website: z.string().max(0, "spam"),
});

type LeadFormValues = z.input<typeof leadSchema>;

const searchSchema = z.object({
  next: z.string().optional().default(""),
  label: z.string().optional().default(""),
});

function openUrl(url: string) {
  // Use top-level navigation so the redirect counts as a real conversion exit
  window.location.href = url;
}

export const Route = createFileRoute("/start")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Comece agora | Next Go Saúde" },
      { name: "description", content: "Cadastro rápido para iniciar seu atendimento com a Next Go Saúde — telemedicina 24h." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  const { next, label } = Route.useSearch();
  const navigate = useNavigate();
  const router = useRouter();
  const openedAtRef = useRef<number>(Date.now());

  const safeNext = next && isSafeNext(next) ? next : "";

  // Fire a "lead_form_view" GTM event once on mount (useful for Ads conversions)
  useEffect(() => {
    // @ts-expect-error gtm dataLayer
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error gtm dataLayer
    window.dataLayer.push({
      event: "lead_form_view",
      lead_destination: label || safeNext || "(unknown)",
      page_path: "/start",
    });
  }, [safeNext, label]);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", consent: false as unknown as true, website: "" },
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit((values) => {
    if (Date.now() - openedAtRef.current < MIN_FORM_TIME_MS) {
      form.setError("root", { message: "Aguarde um instante e tente novamente." });
      return;
    }
    const data = leadSchema.parse(values);
    saveLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      consent_at: new Date().toISOString(),
    });

    // @ts-expect-error gtm dataLayer
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error gtm dataLayer
    window.dataLayer.push({
      event: "lead_submit",
      lead_name: data.name,
      lead_email: data.email,
      lead_phone: data.phone,
      lead_destination: label || safeNext || "(unknown)",
      page_path: "/start",
    });

    if (safeNext) {
      openUrl(safeNext);
    } else {
      void navigate({ to: "/" });
    }
  });

  return (
    <main className="min-h-screen gradient-hero flex flex-col">
      <header className="px-5 py-5 max-w-6xl mx-auto w-full flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Next Go Saúde" width={140} height={44} className="h-9 w-auto" />
        </a>
        <button
          type="button"
          onClick={() => router.history.back()}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </header>

      <div className="flex-1 flex items-center justify-center px-5 py-8">
        <div className="w-full max-w-md bg-card border border-border rounded-3xl shadow-soft p-7 md:p-9">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-accent/60 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> Falta pouco
          </span>
          <h1 className="mt-4 font-display text-2xl md:text-3xl font-extrabold leading-tight">
            Comece seu atendimento agora
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Deixe seus dados para continuar. É rápido, gratuito e seu acesso é liberado em seguida.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            {/* honeypot — hidden from real users */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Não preencher
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.register("website")}
                />
              </label>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="lead-name">Nome completo</Label>
              <Input
                id="lead-name"
                autoComplete="name"
                placeholder="Maria Silva"
                maxLength={80}
                className="transition-all duration-200 ease-out hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <div className="flex items-start gap-1.5 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{form.formState.errors.name.message}</span>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="lead-email">E-mail</Label>
              <Input
                id="lead-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="voce@email.com"
                maxLength={120}
                className="transition-all duration-200 ease-out hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <div className="flex items-start gap-1.5 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{form.formState.errors.email.message}</span>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="lead-phone">WhatsApp (com DDD)</Label>
              <Input
                id="lead-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="(11) 91234-5678"
                maxLength={16}
                className="transition-all duration-200 ease-out hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                {...form.register("phone", {
                  onChange: (e) => {
                    e.target.value = formatBrPhone(e.target.value);
                  },
                })}
              />
              {form.formState.errors.phone && (
                <div className="flex items-start gap-1.5 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{form.formState.errors.phone.message}</span>
                </div>
              )}
            </div>

            <label className="group flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-input accent-primary transition-transform duration-150 group-hover:scale-105"
                {...form.register("consent")}
              />
              <span className="leading-relaxed">
                Aceito receber contato da Next Go Saúde e concordo com o tratamento dos meus dados conforme a{" "}
                <a href="/privacidade" className="underline transition-colors duration-150 hover:text-foreground">Política de Privacidade</a> (LGPD).
              </span>
            </label>
            {form.formState.errors.consent && (
              <div className="flex items-start gap-1.5 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{form.formState.errors.consent.message}</span>
              </div>
            )}
            {form.formState.errors.root && (
              <div className="flex items-start gap-1.5 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{form.formState.errors.root.message}</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-semibold rounded-full h-12 text-base transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={form.formState.isSubmitting}
            >
              Continuar →
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="w-3 h-3" /> Seus dados são protegidos e nunca compartilhados.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
