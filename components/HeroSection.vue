<script setup>
// Aquí podrías añadir lógica en el futuro si la necesitas
</script>

<template>
  <section class="hero-section" id="home">
    <div class="ficha-container">
      <h2>Encantado de conocerte</h2>
      <h1>Soy <span class="highlight">Iban Dorado</span>.</h1>
      <p class="parrafo-presentacion">
        Con base en Salamanca, España, soy un desarrollador Front-end enfocado
        en la accesibilidad y la artesanía digital. Mi misión es simple:
        construir aplicaciones web que funcionen a la perfección y que a la
        gente le encante usar.
      </p>
      <div class="cta-buttons">
        <a href="#contact-section" class="boton-contacto">
          <span>CONTACTAME</span>
        </a>
        <a href="/Iban_Dorado_CV.pdf" download class="boton-contacto">
          <span>DESCARGAR CV</span>
        </a>
      </div>
    </div>

    <div class="imagen-container">
      <picture>
        <img src="/Photo.png" alt="Foto de Iban Dorado" />
      </picture>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor principal de la sección Hero */
.hero-section {
  position: relative; /* FUNDAMENTAL: para que .imagen-container sea absoluto a esta sección */
  overflow: hidden; /* Evita barras de scroll si la imagen se sale */
  min-height: 720px; /* Altura mínima para que la sección tenga espacio */
  display: flex;
  align-items: center; /* Centra el contenido de texto verticalmente */
  max-width: 1100px; /* Ancho máximo para el contenido de texto */
  margin: 0 auto; /* Centra el bloque de la sección en la página */
  padding: 0 40px; /* Padding lateral */
}

/* Contenedor del texto (tu .ficha-container) */
.ficha-container {
  width: 60%; /* Ocupa un poco más de la mitad para dar espacio a la imagen */
  position: relative;
  z-index: 2; /* Asegura que el texto esté por encima de la imagen */
}

/* Estilos para el texto de presentación */
h2 {
  font-size: 2.5rem; /* Ajusta tamaños */
}
h1 {
  font-size: 4rem; /* Ajusta tamaños */
}
.parrafo-presentacion {
  width: 90%; /* Ancho relativo a su contenedor (.ficha-container) */
  font-size: 1.1rem; /* Un poco más grande para legibilidad */
  line-height: 1.6;
  color: #d9d9d9;
  background-color: rgba(33, 33, 33, 0.35);
  text-shadow: 1px 1px 2px black;
}
.highlight {
  /* Usé una clase en lugar de un tag 'span' genérico */
  text-decoration: underline;
  text-decoration-color: #c49f3b; /* Tu color de acento */
  text-decoration-thickness: 4px; /* Grosor de la línea */
  text-underline-offset: 8px; /* Distancia de la línea al texto */
}

/* Estilos para el botón de contacto */
.boton-contacto {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 2px solid #c49f3b;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.boton-contacto:hover {
  color: #c49f3b; /* Cambia de color al pasar el ratón */
}
.cta-buttons {
  display: flex; /* 1. Pone los elementos hijos (los botones) en una línea */
  align-items: center; /* 2. Los alinea verticalmente por si tienen alturas diferentes */
  gap: 40px; /* 3. AÑADE UN ESPACIO DE 40px ENTRE LOS BOTONES. ¡Esta es la solución! */
  margin-top: 40px; /* Espacio superior para separar los botones del párrafo */
}

/* Contenedor de la imagen (posicionado absolutamente) */
.imagen-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 445px; /* Ancho fijo como en la referencia */
  height: 720px; /* Altura fija como en la referencia */
  z-index: 1; /* Detrás del texto */
}

.imagen-container img {
  width: 80%;
  height: 80%;
  object-fit: cover; /* La imagen cubre el contenedor sin deformarse */
}

/* Media Query para móvil (fundamental para este layout) */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    min-height: auto;
    text-align: center;
    padding-top: 220px; /* Espacio para la imagen que ahora estará arriba */
    overflow: visible; /* Permitir que la imagen se vea bien */
  }

  .ficha-container {
    width: 100%; /* Ocupa todo el ancho */
    order: 2; /* El texto va después de la imagen */
  }

  .parrafo-presentacion {
    width: 100%;
    margin: 20px 0;
  }

  .imagen-container {
    position: absolute; /* Sigue siendo absoluto, pero ahora al viewport casi */
    top: -50px; /* La subimos un poco */
    left: 50%;
    transform: translateX(-50%); /* La centramos horizontalmente */
    width: 175px; /* Tamaño más pequeño para móvil */
    height: 300px;
    order: 1; /* La imagen va primero en el orden visual */
    z-index: 1;
  }
  .cta-buttons {
    justify-content: center; /* Centra los botones horizontalmente */
    flex-wrap: wrap; /* Permite que se pongan uno debajo del otro si no caben */
    gap: 20px 40px; /* 20px de espacio vertical, 40px de espacio horizontal */
  }
}
</style>
