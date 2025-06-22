<template>
  <div>
    <!-- Componentes que se repiten en TODAS las páginas -->
    <HeaderComponent />

    <!-- Contenedor principal del contenido de la página -->
    <main>
      <!-- <NuxtPage /> es el componente especial de Nuxt
           que renderizará el contenido de la página actual (en este caso, pages/index.vue) -->
      <NuxtPage />
    </main>

    <!-- Componentes que se repiten en TODAS las páginas -->
    <FooterComponent />
  </div>
</template>

<script setup>
// No necesitas imports aquí tampoco.
</script>

<style>
/* Los estilos globales ahora están en assets/css/main.css,
     así que este bloque puede estar vacío o lo puedes quitar.
     Solo mantén estilos aquí si son EXCLUSIVOS para el layout de app.vue */
main {
  flex-grow: 1; /* Esto ayuda al sticky footer */
}
</style>
