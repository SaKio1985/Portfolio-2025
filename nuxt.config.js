// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true }, // Podemos volver a activarlo

  // --- HOJAS DE ESTILO GLOBALES ---
  // Mantenemos esto, es importante
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // --- CONFIGURACIÓN DE RUNTIME ---
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  },

  // --- COMPATIBILITY DATE ---
  nitro: {
    compatibilityDate: "2024-04-03",
  },
});
