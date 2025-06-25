import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown, faFileCode } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faTwitter, faFileArrowDown, faFileCode);

import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: "dark",
  position: "top-right",
});

app.mount("#app");
