<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";

const projects = ref([
  {
    id: 1,
    titulo: "PORTFOLIO DE DISEÑO",
    habilidades: ["HTML", "CSS", "Vue.js"],
    imagen: "/images/projects/Portfolio-2025.png",
    linkProduccion: "https://live-demo-url.com",
    linkGithub: "https://github.com/SaKio1985/Portfolio-2025",
  },
  {
    id: 2,
    titulo: "TierList",
    habilidades: ["HTML", "CSS", "Javascript"],
    imagen: "/images/projects/tier-maker.png",
    linkProduccion: "https://tier-list-alpha.vercel.app",
    linkGithub: "https://github.com/SaKio1985/TierList",
  },
  {
    id: 3,
    titulo: "To-do-list-Vue",
    habilidades: ["HTML", "CSS", "Vue.js", "Javascript"],
    imagen: "/images/projects/To-do-list-vue.png",
    linkProduccion: "https://to-do-list-vue-puce-two.vercel.app",
    linkGithub: "https://github.com/SaKio1985/To-do-list-Vue",
  },
  {
    id: 4,
    titulo: "libreria-blackwater",
    habilidades: ["Astro", "Javascript"],
    imagen: "/images/projects/libreria-blackwater.png",
    linkProduccion: "https://libreria-blackwater.vercel.app",
    linkGithub: "https://github.com/SaKio1985/Libreria-blackwater",
  },
  {
    id: 5,
    titulo: "EcommerceJuegos",
    habilidades: ["React", "CSS", "HTML", "tailwind"],
    imagen: "/images/projects/EcommerceJuegos.png",
    linkProduccion: "https://eccomerce-juegos.netlify.app",
    linkGithub: "https://github.com/SaKio1985/EcommerceJuegos",
  },
  {
    id: 6,
    titulo: "Listado-personajes-Rick-Morty",
    habilidades: ["React", "CSS", "HTML", "Bootstrap"],
    imagen: "/images/projects/Listado-personajes-Rick-Morty.png",
    linkProduccion: "https://listado-personajes-rick-morty.vercel.app",
    linkGithub: "https://github.com/SaKio1985/Listado-personajes-Rick-Morty",
  },
]);
</script>

<template>
  <section class="projects-section" id="projects">
    <header class="cabecera-proyectos">
      <h1>Proyectos</h1>
      <a href="#contact-section" class="boton-contacto">
        <span>CONTACTAME</span>
      </a>
    </header>

    <div class="projects-grid">
      <!-- 2. Aquí hacemos el "mapeo" de las propiedades -->
      <div v-for="proyecto in projects" :key="proyecto.id">
        <ProjectCard
          :project="{
            title: proyecto.titulo,
            technologies: proyecto.habilidades,
            image: proyecto.imagen,
            liveUrl: proyecto.linkProduccion,
            githubUrl: proyecto.linkGithub,
          }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 40px;
  max-width: 1100px;
  margin: 40px auto;
}
.cabecera-proyectos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}
.cabecera-proyectos h1 {
  font-size: 4rem;
  margin: 0;
}
.boton-contacto {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 2px solid #c49f3b;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
.boton-contacto:hover {
  color: #c49f3b;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .cabecera-proyectos h1 {
    font-size: 3rem;
  }
}
</style>
