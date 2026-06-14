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

/**
 * Returns `requestLead(url, label)`:
 * Always navigates to `/start?next=...&label=...` (a real pageview for Ads tracking).
 * The /start page handles the final redirect — in the same tab — only after
 * the user submits a valid lead form.
 */
export function useLeadCapture() {
  const navigate = useNavigate();
  const requestLead = useCallback((url: string, label?: string) => {
    void navigate({
      to: "/start",
      search: { next: url, label: label ?? "" },
    });
  }, [navigate]);

  return { requestLead };
}
