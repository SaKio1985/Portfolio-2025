<script setup>
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin-in.vue";
import IconX from "@/components/icons/IconX-twitter.vue";

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
          aria-label="Mi perfil de GitHub"
        >
          <IconGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/iban-dorado-171a4a24b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mi perfil de LinkedIn"
        >
          <IconLinkedin />
        </a>
        <a
          href="https://x.com/IbDorado"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mi perfil de X (antes Twitter)"
        >
          <IconX />
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #202020;
  color: #ffffff;
  padding: 25px 40px;
  border-top: 1px solid #383838;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.brand-info {
  font-size: 1rem;
  font-weight: normal;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.social-links a {
  color: #ffffff;
  font-size: 2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #c49f3b;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 20px;
  }
  .brand-info {
    text-align: center;
  }
  .social-links {
    justify-content: center;
  }
}
</style>
