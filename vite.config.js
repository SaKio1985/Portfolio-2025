// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // <-- 1. Importa el módulo 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Ya no necesitas el PWA plugin, lo quitamos para simplificar
  ],

  // 2. AÑADE ESTA SECCIÓN COMPLETA
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
