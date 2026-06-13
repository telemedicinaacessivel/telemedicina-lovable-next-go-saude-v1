import { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";

const LEAD_STORAGE_KEY = "ngs_lead_v1";

export type StoredLead = {
  name: string;
  email: string;
  phone: string;
  consent_at: string;
};

export function getStoredLead(): StoredLead | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LEAD_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredLead;
    if (parsed?.email && parsed?.phone && parsed?.name) return parsed;
  } catch { /* ignore */ }
  return null;
}

export function saveLead(lead: StoredLead) {
  try { localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(lead)); } catch { /* ignore */ }
}

export { LEAD_STORAGE_KEY };

function openUrl(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}

/**
 * Returns `requestLead(url, label)`:
 * - If lead already captured → fires GTM event and opens the destination URL directly.
 * - Otherwise → navigates to `/start?next=...&label=...` (a real pageview for Ads tracking).
 */
export function useLeadCapture() {
  const navigate = useNavigate();
  const requestLead = useCallback((url: string, label?: string) => {
    const existing = getStoredLead();
    if (existing) {
      if (typeof window !== "undefined") {
        // @ts-expect-error gtm dataLayer
        window.dataLayer = window.dataLayer || [];
        // @ts-expect-error gtm dataLayer
        window.dataLayer.push({
          event: "lead_redirect",
          lead_destination: label ?? url,
          lead_email: existing.email,
        });
      }
      openUrl(url);
      return;
    }
    void navigate({
      to: "/start",
      search: { next: url, label: label ?? "" },
    });
  }, [navigate]);

  return { requestLead };
}
