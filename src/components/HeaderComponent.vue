<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
// Los iconos de la imagen son: GitHub, Frontend Mentor, LinkedIn, Twitter
// Asegúrate de importar los correctos. Frontend Mentor podría no estar en FA estándar.
// Voy a usar los que tenías más LinkedIn y Twitter como ejemplo.
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// faHome, faUser, faEnvelope son de free-solid-svg-icons
import { faFileCode } from '@fortawesome/free-solid-svg-icons' // Placeholder para Frontend Mentor

library.add(faGithub, faLinkedin, faTwitter, faFileCode)
</script>

<template>
  <header class='header-container'>
    <div class="logo"> <!-- Envuelve el logo/nombre para mejor control si es necesario -->
      Ibandorado 
    </div>
    <nav class="social-links">
      <a href="https://github.com/SaKio1985" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Frontend Mentor Profile"> <!-- Cambia # por tu link -->
        <font-awesome-icon :icon="['fas', 'file-code']" /> <!-- Icono de ejemplo para Frontend Mentor -->
      </a>
      <a href="https://www.linkedin.com/in/iban-dorado-171a4a24b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://x.com/IbDorado" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between; /* Empuja el logo a la izq y nav a la der */
  align-items: center; /* Alinea verticalmente los ítems */
  padding: 20px 40px; /* Ajusta el padding (ej: 20px arriba/abajo, 40px izq/der) */
  /* background-color: #151515; Ya no es necesario si body lo tiene y este es transparente */
  /* border-bottom: 1px solid #333; Opcional, si quieres una línea sutil de separación */
  width: 100%;
  box-sizing: border-box; /* Para que el padding no aumente el width total */
}

.logo {
  font-weight: bold;
  font-size: 1.5rem; /* Ajusta el tamaño */
  color: #FFFFFF; /* Asegura que el texto del logo sea blanco */
}

.social-links {
  display: flex; /* IMPORTANTE: Hace que los <a> hijos se alineen horizontalmente */
  align-items: center; /* Alinea los iconos verticalmente si tienen alturas diferentes */
  gap: 25px; /* Espacio entre los iconos (moderno) o usa margin-left en cada 'a' */
}

.social-links a {
  color: #FFFFFF; /* Color del icono */
  font-size: 1.5rem; /* Tamaño de los iconos */
  transition: color 0.3s ease; /* Transición suave para el hover */
}

.social-links a:hover {
  color: #c49f3b; /* Color amarillo mostaza de acento al pasar el ratón */
}

</style>