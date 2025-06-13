// api/enviar-telegram.js

export default async function handler(request, response) {
  // Solo permitir peticiones POST
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { nombre, email, mensaje } = request.body;

    // Recuperamos los secretos desde las Variables de Entorno de Vercel
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Comprobamos que los secretos y los datos del body existen
    if (!BOT_TOKEN || !CHAT_ID || !nombre || !email || !mensaje) {
      return response
        .status(400)
        .json({
          message: "Faltan datos requeridos o configuración del servidor.",
        });
    }

    // Creamos el texto del mensaje con formato Markdown
    const texto = `*Nuevo Mensaje del Portfolio* 📬\n\n*De:* ${nombre}\n*Email:* ${email}\n\n*Mensaje:*\n${mensaje}`;

    // Construimos la URL de la API de Telegram
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Hacemos la llamada a la API de Telegram
    const apiResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: texto,
        parse_mode: "Markdown", // Para que reconozca los * como negrita
      }),
    });

    if (!apiResponse.ok) {
      // Si Telegram devuelve un error, lo registramos
      const errorData = await apiResponse.json();
      console.error("Error de la API de Telegram:", errorData);
      throw new Error("Error al contactar la API de Telegram");
    }

    // Si todo fue bien, devolvemos una respuesta de éxito
    return response.status(200).json({ message: "Mensaje enviado con éxito" });
  } catch (error) {
    console.error("Error en la función serverless:", error);
    return response
      .status(500)
      .json({ message: "Error interno del servidor." });
  }
}
