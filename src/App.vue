<!-- App.vue -->
<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div id="app-container">
    <HeaderComponent />
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectComponent />
      <ContactSection />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

/* --- ESTILOS DE DEPURACIÓN --- */
/* Añade este bloque para ver los contornos */
.debug-border-red {
  border: 2px solid red;
}
.debug-border-green {
  border: 2px solid limegreen;
}
.debug-border-blue {
  border: 2px solid dodgerblue;
}
.debug-border-yellow {
  border: 2px solid yellow;
}
</style>
