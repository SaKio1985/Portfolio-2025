<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faTwitter, faFileCode);

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="brand-info">ibandorado © {{ currentYear }}</div>
      <nav class="social-links">
        <a
          href="https://github.com/SaKio1985"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Frontend Mentor Profile"
        >
          <font-awesome-icon :icon="['fas', 'file-code']" />
        </a>
        <a
          href="https://www.linkedin.com/in/iban-dorado-171a4a24b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://x.com/IbDorado"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #202020; /* Un gris oscuro, como en la imagen de referencia del footer */
  color: #ffffff;
  padding: 25px 40px; /* Ajusta el padding vertical y horizontal */
  border-top: 1px solid #383838; /* Línea divisoria superior, color sutil */
  /* Si el footer debe estar siempre al final de la página,
     asegúrate de que los estilos globales en App.vue (flex-grow en main) estén correctos */
}

.footer-content {
  display: flex;
  justify-content: space-between; /* Clave para separar el nombre y los iconos */
  align-items: center; /* Alinea verticalmente los ítems */
  max-width: 1100px; /* O el ancho máximo que estés usando para el contenido principal */
  margin: 0 auto; /* Centra el contenido si tiene un max-width */
}

.brand-info {
  font-size: 1rem; /* Tamaño del texto de la marca/nombre */
  font-weight: normal; /* O 'bold' si prefieres */
}

.social-links {
  display: flex; /* Para alinear los iconos horizontalmente */
  align-items: center;
  gap: 25px; /* Espacio entre los iconos, similar al header */
}

.social-links a {
  color: #ffffff; /* Color del icono */
  font-size: 1.25rem; /* Tamaño de los iconos, puede ser un poco más pequeño que en el header si prefieres */
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #c49f3b; /* Color amarillo mostaza de acento al pasar el ratón */
}

/* Media Query para pantallas más pequeñas (opcional, pero buena práctica) */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column; /* Apila los elementos verticalmente */
    gap: 20px; /* Espacio entre la marca y los iconos cuando están apilados */
  }
  .brand-info {
    text-align: center; /* Centra el texto de la marca */
  }
  .social-links {
    justify-content: center; /* Centra los iconos */
  }
}
</style>
