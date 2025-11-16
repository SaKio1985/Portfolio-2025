<script setup>
import { ref } from "vue";

// Usamos ref para que Vue lo trate como un dato reactivo, es una buena práctica.
const skills = ref([
  { name: "HTML", experience: "2 Años Experiencia" },
  { name: "CSS", experience: "2 Años Experiencia" },
  { name: "Javascript", experience: "2 Años Experiencia" },
  { name: "React", experience: "1,5 Año Experiencia" },
  { name: "Vue", experience: "12 Meses Experiencia" },
  { name: "Git", experience: "2 años Experiencia" },
]);
</script>

<template>
  <section class="skills-section" id="skills">
    <!-- La línea divisoria horizontal que se ve en la imagen -->
    <hr class="section-divider" />

    <div class="skills-grid">
      <!-- 2. Usamos v-for para iterar sobre el array 'skills' -->
      <!-- :key es crucial para que Vue identifique cada elemento de forma única -->
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <h3 class="skill-name">{{ skill.name }}</h3>
        <p class="skill-experience">{{ skill.experience }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 40px; /* Espaciado interno de la sección */
  max-width: 1100px; /* Mantenemos el ancho máximo consistente */
  margin: 0 auto; /* Centramos la sección */
  color: #ffffff; /* Color de texto blanco por defecto */
}

/* 3. Estilo para la línea divisoria */
.section-divider {
  border: none; /* Quitamos el borde por defecto del hr */
  height: 1px; /* Le damos un alto de 1px */
  background-color: #383838; /* Color gris sutil, como en el footer */
  margin-bottom: 50px; /* Espacio entre la línea y las habilidades */
}

/* 4. Creamos el Grid para las habilidades */
.skills-grid {
  display: grid;
  /* Queremos 4 columnas, pero en pantallas medianas cambiaremos a 2.
     Por ahora, empecemos con 2 para ver el comportamiento responsive.
     En pantallas grandes lo pondremos a 4. */
  grid-template-columns: repeat(2, 1fr); /* 2 columnas de igual tamaño */
  gap: 30px; /* Espacio entre los items del grid */
}

.skill-item {
  text-align: left; /* Alineación del texto a la izquierda */
}

.skill-name {
  font-size: 2rem; /* 32px - Tamaño grande para el nombre de la habilidad */
  font-weight: bold;
  margin: 0 0 10px 0; /* Quitamos margen superior, añadimos inferior */
  line-height: 1.2;
}

.skill-experience {
  font-size: 1rem; /* 16px - Tamaño normal para la experiencia */
  color: #d9d9d9; /* El mismo gris claro que usamos en la descripción del hero */
  margin: 0;
}

/* 5. Hacemos el diseño responsive (Adaptable a diferentes pantallas) */

/* Para tablets y pantallas un poco más grandes */
@media (min-width: 768px) {
  .skills-grid {
    /* Aquí lo cambiamos a 3 columnas. Puedes ajustarlo a 4 si prefieres. */
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Para pantallas de escritorio */
@media (min-width: 1024px) {
  .skills-grid {
    /* En pantallas grandes, usamos las 4 columnas que querías */
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Para móviles muy pequeños, podrías querer 1 sola columna */
@media (max-width: 480px) {
  .skill-item {
    text-align: center; /* En una sola columna, el texto centrado se ve bien */
  }
  .skills-grid {
    grid-template-columns: 1fr; /* Una sola columna */
  }
}
</style>
