// src/components/ContactSection.vue

<script setup>
import { ref } from "vue";
// 1. Importamos la función 'toast' para mostrar notificaciones elegantes.
import { toast } from "vue3-toastify";

// 2. Variables reactivas para los campos del formulario.
const name = ref("");
const email = ref("");
const message = ref("");

// 3. Estado para saber si el formulario se está enviando. Útil para desactivar el botón.
const isLoading = ref(false);

async function handleSubmit() {
  // --- Las validaciones no cambian ---
  if (name.value.trim().length < 3) {
    toast.error("Por favor, introduce un nombre con al menos 3 caracteres.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    toast.error("Por favor, introduce una dirección de email válida.");
    return;
  }
  if (message.value.trim().length < 15) {
    toast.error("Por favor, escribe un mensaje de al menos 15 caracteres.");
    return;
  }

  // --- COMIENZA EL TRUCO PARA EL DESARROLLO LOCAL ---

  // Si estamos en modo de desarrollo (ejecutando 'pnpm dev'), simulamos el envío.
  if (import.meta.env.DEV) {
    console.log("--- MODO DESARROLLO: SIMULANDO ENVÍO ---");
    console.log("Nombre:", name.value.trim());
    console.log("Email:", email.value.trim());
    console.log("Mensaje:", message.value.trim());

    isLoading.value = true;

    // Fingimos una pequeña espera, como si fuera una petición real
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera de 1 segundo

    isLoading.value = false;

    toast.success("¡Mensaje simulado con éxito! (Modo Desarrollo)");
    name.value = "";
    email.value = "";
    message.value = "";

    return; // Detenemos la función aquí para no intentar hacer el 'fetch' real.
  }

  // --- FIN DEL TRUCO ---
  // El siguiente código solo se ejecutará cuando estés en producción (en Vercel)

  isLoading.value = true;
  try {
    const response = await fetch("/api/enviar-telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: name.value.trim(),
        email: email.value.trim(),
        mensaje: message.value.trim(),
      }),
    });

    if (response.ok) {
      toast.success("¡Mensaje enviado con éxito! Gracias.");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      toast.error(
        "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde."
      );
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    toast.error("Error de red. Por favor, comprueba tu conexión.");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="contact-section" id="contact-section">
    <div class="contact-content">
      <div class="text-side">
        <h2>Contacto</h2>
        <p>
          Me encantaría saber de tu proyecto y cómo puedo ayudarte. Completa el
          formulario y me pondré en contacto contigo lo antes posible.
        </p>
      </div>
      <div class="form-side">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">NOMBRE</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="message">MENSAJE</label>
            <textarea
              id="message"
              v-model="message"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="form-group submit-group">
            <!-- 4. El botón ahora se desactiva y cambia su texto dinámicamente -->
            <button type="submit" class="contact-button" :disabled="isLoading">
              {{ isLoading ? "Enviando..." : "ENVIAR MENSAJE" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tus estilos no necesitan ningún cambio, pero los incluyo para que sea completo */
.contact-section {
  background-color: #202020;
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
  color: #ffffff;
}

.text-side h2 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.text-side p {
  color: #d9d9d9;
  line-height: 1.6;
  font-size: 14px;
}

.form-side {
  flex-basis: 50%;
}

.form-group {
  margin-bottom: 30px;
}

label {
  display: block;
  font-size: 0.8rem;
  color: #d9d9d9;
  text-transform: uppercase;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  padding: 10px 0;
  font-family: inherit;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: #c49f3b;
}

.contact-button {
  display: inline-block;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 2px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #c49f3b;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: color 0.3s ease, opacity 0.3s ease;
}

.contact-button:hover:not(:disabled) {
  color: #c49f3b;
}

/* 5. Estilo adicional para cuando el botón está desactivado */
.contact-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-group {
  text-align: right;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>
