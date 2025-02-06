import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://ketbome.github.io/inventarioccp',
  base: '/',
  output: 'static',
  outDir: './docs', // GitHub Pages busca en /docs por defecto
  vite: {
    plugins: [tailwindcss()],
  },
});
