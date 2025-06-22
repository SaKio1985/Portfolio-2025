// src/plugins/fontawesome.js

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown, faFileCode } from "@fortawesome/free-solid-svg-icons";

// ESTA LÍNEA ES LA CLAVE PARA SSR. Le decimos a FontAwesome que no intente
// añadir el CSS por sí mismo, ya que nosotros lo estamos importando globalmente en nuxt.config.
config.autoAddCss = false;

// Añadimos todos los iconos que necesitamos a la librería global.
library.add(faGithub, faLinkedin, faTwitter, faFileArrowDown, faFileCode);

// Definimos y exportamos el plugin de Nuxt.
export default defineNuxtPlugin((nuxtApp) => {
  // Registramos el componente <font-awesome-icon> para que esté disponible en toda la app.
  // nuxtApp.vueApp es la instancia de la aplicación Vue que Nuxt crea.
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
