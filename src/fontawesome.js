// 1. Importaciones necesarias de Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 2. Importa CADA ICONO que vayas a usar en tu aplicación.
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown, faFileCode } from "@fortawesome/free-solid-svg-icons";

// 3. Añade los iconos importados a la librería.
library.add(faGithub, faLinkedin, faTwitter, faFileArrowDown, faFileCode);

// 4. Exporta el componente para que main.js pueda usarlo.
export { FontAwesomeIcon };
