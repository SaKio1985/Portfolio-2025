<script setup>
// Este componente recibe los datos de un proyecto como 'prop'
const props = defineProps({
  project: {
    type: Object,
    required: true,
    // Vue espera que este objeto tenga las claves:
    // title, technologies, image, liveUrl, githubUrl
  },
});
</script>

<template>
  <div class="project-card">
    <div class="image-container">
      <img :src="project.image" :alt="`Screenshot of ${project.title}`" />
      <!-- Esta es la capa que aparece al pasar el cursor -->
      <div class="overlay">
        <a :href="project.liveUrl" target="_blank" class="project-link"
          >VIEW PROJECT</a
        >
        <a :href="project.githubUrl" target="_blank" class="project-link"
          >VIEW CODE</a
        >
      </div>
    </div>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-technologies">
      <!-- Usamos v-for para listar las tecnologías con un espacio entre ellas -->
      <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
    </p>
  </div>
</template>

<style scoped>
.project-card {
  margin-bottom: 20px;
}
.image-container {
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
}
.image-container img {
  width: 100%;
  display: block;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.image-container:hover .overlay {
  opacity: 1;
}
.project-link {
  color: #ffffff;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 2px solid #c49f3b; /* Tu color de acento */
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
.project-link:hover {
  color: #c49f3b;
}
.project-title {
  font-size: 1.5rem; /* 24px */
  text-transform: uppercase;
  margin: 0 0 10px 0;
}
.project-technologies {
  color: #d9d9d9;
  text-transform: uppercase;
  display: flex;
  gap: 18px; /* Espacio entre los nombres de las tecnologías */
}
</style>
