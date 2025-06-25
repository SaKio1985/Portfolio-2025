<script setup>
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin-in.vue";
import IconX from "@/components/icons/IconX-twitter.vue";
</script>

<template>
  <header class="header-container">
    <div class="logo">Ibandorado</div>
    <nav class="social-links">
      <!-- USANDO EL NUEVO COMPONENTE -->
      <a
        href="https://github.com/SaKio1985"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mi perfil de GitHub"
      >
        <IconGithub />
      </a>

      <!-- USANDO EL NUEVO COMPONENTE -->
      <a
        href="https://www.linkedin.com/in/iban-dorado-171a4a24b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mi perfil de LinkedIn"
      >
        <IconLinkedin />
      </a>

      <!-- USANDO EL NUEVO COMPONENTE -->
      <a
        href="https://x.com/IbDorado"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mi perfil de X (antes Twitter)"
      >
        <IconX />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  font-weight: bold;
  font-size: 1.8rem;
  color: #ffffff;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.social-links a {
  color: #ffffff;
  font-size: 2.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #c49f3b;
}
</style>
