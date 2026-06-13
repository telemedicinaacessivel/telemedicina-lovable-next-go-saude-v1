import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const LEAD_STORAGE_KEY = "ngs_lead_v1";
const MIN_FORM_TIME_MS = 1500; // anti-bot: forms submitted faster than this are rejected

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
      // block obvious disposable / role-based addresses
      const domain = v.split("@")[1] ?? "";
      const blocked = ["mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com", "yopmail.com", "trashmail.com", "test.com", "example.com"];
      return !blocked.includes(domain);
    }, "Use um e-mail válido"),
  phone: z
    .string()
    .transform((v) => onlyDigits(v))
    .refine((v) => v.length === 10 || v.length === 11, "Telefone deve ter DDD + número")
    .refine((v) => {
      // Brazilian mobile: 11 digits, third digit = 9; landline: 10 digits, third digit 2-5
      if (v.length === 11) return v[2] === "9";
      return /[2-5]/.test(v[2]);
    }, "Telefone inválido"),
  consent: z.literal(true, { errorMap: () => ({ message: "Você precisa aceitar para continuar" }) }),
  // honeypot
  website: z.string().max(0, "spam"),
});

type LeadFormValues = z.input<typeof leadSchema>;
type LeadData = z.output<typeof leadSchema>;

type Pending = { url: string; label?: string } | null;

type Ctx = {
  requestLead: (url: string, label?: string) => void;
};

const LeadContext = createContext<Ctx | null>(null);

export const useLeadCapture = () => {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLeadCapture must be used within LeadCaptureProvider");
  return ctx;
};

function getStoredLead(): LeadData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LEAD_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.email && parsed.phone && parsed.name) return parsed;
  } catch { /* ignore */ }
  return null;
}

function openUrl(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

export function LeadCaptureProvider({ children }: { children: React.ReactNode }) {
  const [pending, setPending] = useState<Pending>(null);
  const openedAtRef = useRef<number>(0);

  const requestLead = useCallback((url: string, label?: string) => {
    const existing = getStoredLead();
    if (existing) {
      // already captured — push event and redirect immediately
      if (typeof window !== "undefined") {
        // @ts-expect-error gtm
        window.dataLayer = window.dataLayer || [];
        // @ts-expect-error gtm
        window.dataLayer.push({ event: "lead_redirect", lead_destination: label ?? url, lead_email: existing.email });
      }
      openUrl(url);
      return;
    }
    openedAtRef.current = Date.now();
    setPending({ url, label });
  }, []);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", consent: false as unknown as true, website: "" },
    mode: "onBlur",
  });

  useEffect(() => {
    if (pending) form.reset({ name: "", email: "", phone: "", consent: false as unknown as true, website: "" });
  }, [pending, form]);

  const onSubmit = form.handleSubmit((values) => {
    // anti-bot: too fast
    if (Date.now() - openedAtRef.current < MIN_FORM_TIME_MS) {
      form.setError("root", { message: "Aguarde um instante e tente novamente." });
      return;
    }
    const data = leadSchema.parse(values);
    try {
      localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        consent_at: new Date().toISOString(),
      }));
    } catch { /* ignore */ }

    if (typeof window !== "undefined") {
      // @ts-expect-error gtm
      window.dataLayer = window.dataLayer || [];
      // @ts-expect-error gtm
      window.dataLayer.push({
        event: "lead_submit",
        lead_name: data.name,
        lead_email: data.email,
        lead_phone: data.phone,
        lead_destination: pending?.label ?? pending?.url,
        page_path: window.location.pathname,
      });
    }

    const url = pending?.url;
    setPending(null);
    if (url) openUrl(url);
  });

  return (
    <LeadContext.Provider value={{ requestLead }}>
      {children}
      <Dialog open={!!pending} onOpenChange={(o) => !o && setPending(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Falta pouco para começar 👋</DialogTitle>
            <DialogDescription>
              Deixe seus dados para continuarmos seu atendimento. É rápido e seguro.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-3" noValidate>
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
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
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
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
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
                {...form.register("phone", {
                  onChange: (e) => {
                    e.target.value = formatBrPhone(e.target.value);
                  },
                })}
              />
              {form.formState.errors.phone && (
                <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
                {...form.register("consent")}
              />
              <span>
                Aceito receber contato da Next Go Saúde e concordo com o tratamento dos meus dados conforme a{" "}
                <a href="#" className="underline hover:text-foreground">Política de Privacidade</a> (LGPD).
              </span>
            </label>
            {form.formState.errors.consent && (
              <p className="text-xs text-destructive">{form.formState.errors.consent.message}</p>
            )}
            {form.formState.errors.root && (
              <p className="text-xs text-destructive">{form.formState.errors.root.message}</p>
            )}

            <Button type="submit" className="w-full gradient-primary text-primary-foreground font-semibold rounded-full h-11" disabled={form.formState.isSubmitting}>
              Continuar →
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="w-3 h-3" /> Seus dados são protegidos e nunca compartilhados.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </LeadContext.Provider>
  );
}
