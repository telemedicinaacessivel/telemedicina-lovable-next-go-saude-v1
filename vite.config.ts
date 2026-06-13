// Configuração da Vercel: usa o preset "vercel" do Nitro para gerar
// `.vercel/output` (Build Output API), que a Vercel detecta automaticamente.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "vercel" },
});
