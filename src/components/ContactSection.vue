// src/components/ContactSection.vue
<script setup>
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faHomeLgAlt, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

function handleSubmit() {
  // Aquí es donde procesarías el formulario.
  // Por ahora, solo mostraremos los datos en la consola.
  console.log('Formulario enviado:');
  console.log('Nombre:', name.value);
  console.log('Email:', email.value);
  console.log('Mensaje:', message.value);

  // Validaciones
  if (name.value.length <3) {
    alert('Introduzca nombre mas largo');
  }
  if (!email.value.includes ('.')){
    alert('Introduzca . en el email');
  }
  if (message.value.length <15) {
    alert('Introduzca un mensaje de al menos 15 caracteres');
  }   
  const mensaje  = `Hola, mi nombre es ${name.value} y mi correo es ${email.value}.  ${message.value}`
  const mensajecodificado = encodeURIComponent(mensaje)
  const movil = '34665783345'
  const urlwhatapp = `https://wa.me/${movil}?text=${mensajecodificado}`
  window.open(urlwhatapp,'_blank')
 
  alert('Gracias por tu mensaje, ' + name.value + '!');

  // Limpiar el formulario después de enviar
  name.value = '';
  email.value = '';
  message.value = '';
}
</script>

<template>
  <!-- 1. Añadimos el ID que coincide con el href del botón "CONTACT ME" -->
  <section class="contact-section" id="contact-section">
    <div class="contact-content">
      <div class="text-side">
        <h2>Contacto</h2>
        <p>
        Me encantaría saber de tu proyecto y cómo puedo ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.
        </p>
      </div>
      <div class="form-side">
        <!-- 2. Usamos @submit.prevent para llamar a nuestro método handleSubmit sin recargar la página -->
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">NOMBRE</label>
            <!-- 3. v-model conecta este input con la variable 'name' en el script -->
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="message">MENSAJE</label>
            <textarea id="message" v-model="message" rows="3" required></textarea>
          </div>
          <div class="form-group submit-group">
            <button type="submit" class="contact-button">ENVIAR MENSAJE</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #202020; /* Mismo fondo que el footer para un look unificado */
  padding: 60px 40px;
}

.contact-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.text-side {
  flex-basis: 45%;
  color: #FFFFFF;
}

.text-side h2 {
  font-size: 4rem; /* Tamaño grande para el título */
  margin-bottom: 20px;
}

.text-side p {
  color: #D9D9D9;
  line-height: 1.6;
  font-size: 14px;
}

.form-side {
  flex-basis: 50%;
}

.form-group {
  margin-bottom: 30px;
}

/* Estilos para los campos del formulario como en la imagen */
label {
  display: block;
  font-size: 0.8rem;
  color: #D9D9D9;
  text-transform: uppercase;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  color: #FFFFFF;
  padding: 10px 0;
  font-family: inherit; /* Hereda la fuente del body */
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none; /* Quita el borde azul/naranja al hacer foco */
  border-bottom-color: #c49f3b; /* Cambia el color de la línea al hacer foco */
}

/* Estilos para el botón, reutilizando la clase del Hero */
.contact-button {
  display: inline-block;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 2px;
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #c49f3b;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
}

.contact-button:hover {
  color: #c49f3b;
}

.submit-group {
  text-align: right; /* Alinea el botón a la derecha */
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>