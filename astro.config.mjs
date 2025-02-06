import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  outDir: './dist', // GitHub Pages busca en /docs por defecto
  vite: {
    plugins: [tailwindcss()],
  },
});
