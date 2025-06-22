<script setup>
import { computed } from 'vue'
// No necesitas importar FontAwesomeIcon aquí si está registrado globalmente Y si vas a usarlo en este template
// Si BotonComponent es MUY genérico y no sabe si FontAwesomeIcon está global, podrías importarlo:
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  text: String,
  // Si 'icon' va a ser el NOMBRE del icono (ej: "home") que ya está en la librería global o del padre:
  iconName: String, // Renombrado para claridad
  // Si 'icon' va a ser el OBJETO icono importado (ej: faHome):
  iconObject: Object, // O Array, si usas ['fas', 'icon-name']
  href: String, // Para convertir el botón en un enlace
  target: String // Para target="_blank" etc.
})

// Para determinar si es un enlace o un botón
const isLink = computed(() => !!props.href)

// Si pasas el nombre del icono y este ha sido añadido a la librería
// (ya sea globalmente en main.js o en el componente padre que usa BotonComponent)
// entonces puedes usarlo directamente.
</script>

<template>
  <component :is="isLink ? 'a' : 'button'"
             :href="isLink ? href : null"
             :target="isLink ? target : null"
             :rel="isLink && target === '_blank' ? 'noopener noreferrer' : null"
             class="custom-button">
    <font-awesome-icon v-if="iconName" :icon="iconName" class="icon-spacing" />
    <font-awesome-icon v-if="iconObject" :icon="iconObject" class="icon-spacing" />
    <span v-if="text">{{ text }}</span>
  </component>
</template>

<style scoped>
.custom-button {
  /* Tus estilos de botón aquí */
  padding: 8px 15px;
  border: 1px solid #ccc;
  background-color: #eee;
  cursor: pointer;
  display: inline-flex; /* Para alinear icono y texto */
  align-items: center;
  text-decoration: none; /* Si es un 'a' */
  color: inherit; /* Si es un 'a' */
}
.custom-button:hover {
  background-color: #c49f3b;
}
.icon-spacing {
  margin-right: 5px; /* Espacio entre icono y texto, si ambos existen */
}
.custom-button span:empty + .icon-spacing { /* Si no hay texto, no añadir margen al icono */
    margin-right: 0;
}
/* Si el botón solo tiene icono y no texto, podrías querer un padding diferente o forma cuadrada */
.custom-button .icon-spacing:last-child { /* Si el icono es el último (no hay texto después) */
    margin-right: 0;
}
</style>