// 1. Tus imports originales
import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 2. AÑADIMOS AQUÍ: Los nuevos imports para Vue3-Toastify
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// 3. Construimos la aplicación en cadena
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon) // Tu configuración de FontAwesome se mantiene intacta

  // 4. AÑADIMOS AQUÍ: El nuevo eslabón para usar el plugin de Toastify
  .use(Vue3Toastify, {
    autoClose: 3000, // Los toasts desaparecerán automáticamente después de 3 segundos
    theme: "dark", // Para que el estilo coincida con tu web
    position: "top-right", // La esquina donde aparecerán las notificaciones
  })

  .mount("#app"); // El montaje siempre va al final
