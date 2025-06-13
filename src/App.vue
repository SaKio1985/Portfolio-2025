<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ProjectComponent from './components/ProjectComponent.vue';

// Importa aquí tus secciones principales si las tienes
// import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <div id="app-container">
    <!-- Contenedor opcional para más control -->
    <HeaderComponent />
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectComponent />
      <ContactSection />
    </main>
    <FooterComponent />
    <!-- <footer>Footer opcional</footer> -->
  </div>
</template>

<style>
/* SIN 'scoped' para estilos globales */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0; /* Importante resetear el margen por defecto del body */
  background-color: #151515; /* Un negro/gris oscuro similar al de la imagen */
  color: #ffffff; /* Color de texto por defecto blanco */
  font-family: 'Fira Code', monospace; /* O la fuente que elijas, la de la imagen es similar a esta */

  min-height: 100%; /* Asegura que body ocupe al menos toda la altura de html */
  display: flex; /* Habilita Flexbox para los hijos directos de body (que sería #app si no usas #app-container) */
  flex-direction: column; /* Apila los hijos de body verticalmente */
}

/* Si usas un contenedor como #app-container, también puedes darle estilos */
#app-container {
  min-height: 100vh; /* Asegura que ocupe al menos toda la altura de la pantalla */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* MUY IMPORTANTE: Hace que este contenedor crezca para ocupar el espacio disponible en body */
}

/* Estilos para links globales si quieres un color base */
a {
  color: #ffffff;
  text-decoration: none; /* Quitar subrayado por defecto */
}
a:hover {
  color: #c49f3b; /* Color amarillo de acento al pasar el ratón, como en la imagen */
}
</style>

<style scoped>
/* Estilos específicos para App.vue si los necesitas */
main {
  padding: 20px;
  /* Si tu header es fijo (position: fixed), necesitarás un padding-top aquí */
  flex-grow: 1; /* MUY IMPORTANTE: Hace que <main> crezca para ocupar el espacio disponible
  dentro de #app (o #app-container), empujando el FooterComponent hacia abajo. */
}
</style>
