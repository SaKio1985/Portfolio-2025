// server/api/enviar-telegram.post.js

// defineEventHandler es la función principal que Nuxt usa para definir una ruta de API.
export default defineEventHandler(async (event) => {
  // Obtenemos acceso a la configuración de runtime (donde están nuestros secretos).
  const config = useRuntimeConfig(event);

  // Leemos el cuerpo (body) de la petición POST que nos envía el front-end.
  const body = await readBody(event);
  const { nombre, email, mensaje } = body;

  try {
    // Recuperamos los secretos desde la configuración de runtime.
    const BOT_TOKEN = config.telegramBotToken;
    const CHAT_ID = config.telegramChatId;

    // Validación de datos en el servidor.
    if (!BOT_TOKEN || !CHAT_ID || !nombre || !email || !mensaje) {
      // Así se lanzan errores en Nuxt.
      throw createError({
        statusCode: 400,
        statusMessage: "Faltan datos requeridos o configuración del servidor.",
      });
    }

    // El resto de la lógica es idéntica.
    const texto = `*Nuevo Mensaje del Portfolio* 📬\n\n*De:* ${nombre}\n*Email:* ${email}\n\n*Mensaje:*\n${mensaje}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await $fetch(url, {
      // $fetch es una versión mejorada de fetch que Nuxt proporciona.
      method: "POST",
      body: {
        chat_id: CHAT_ID,
        text: texto,
        parse_mode: "Markdown",
      },
    });

    // Así se devuelve una respuesta de éxito en Nuxt.
    return { message: "Mensaje enviado con éxito" };
  } catch (error) {
    console.error("Error en la función serverless de Telegram:", error);
    // Devolvemos un error genérico para que no se filtre información sensible.
    throw createError({
      statusCode: 500,
      statusMessage: "Error interno del servidor.",
    });
  }
});
