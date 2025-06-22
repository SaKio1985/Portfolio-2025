// src/plugins/toastify.js

import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  // Aquí usamos el plugin de Vue3Toastify y le pasamos opciones globales.
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 3000, // Los toasts desaparecerán automáticamente después de 3 segundos
    theme: "dark", // Para que el estilo de los toasts coincida con tu web
    position: "top-right", // La esquina donde aparecerán las notificaciones
  });
});
