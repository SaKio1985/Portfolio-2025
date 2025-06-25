import "./style.css";
// 2. Importa el resto de tus cosas
import { createApp } from "vue";
import App from "./App.vue";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

// 3. Registra los componentes y plugins

app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: "dark",
  position: "top-right",
});

// 4. Monta la aplicación
app.mount("#app");
