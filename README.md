# 🚀 Portfolio Personal - Iban Dorado

[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

> Un portfolio moderno, responsive y progresivo construido con Vue 3 y Vite que muestra mis habilidades como desarrollador Front-end.

## 🌟 Vista Previa

[**Ver Portfolio en Vivo →**](https://portfolio-2025-red-mu.vercel.app/)

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con tema oscuro
- **📱 Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- **⚡ Performance**: Construido con Vite para carga ultra-rápida
- **🔗 Navegación Suave**: Scroll suave entre secciones
- **📬 Contacto Integrado**: Formulario funcional con integración Telegram y notificaciones toast
- **🌐 Redes Sociales**: Enlaces directos a GitHub, LinkedIn y Twitter
- **🎯 SEO Optimizado**: Meta tags y estructura semántica
- **📲 PWA Ready**: Soporte para Progressive Web App con instalación offline
- **📄 CV Descargable**: Descarga directa del currículum en PDF

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Vue 3** (v3.5.25) - Framework JavaScript progresivo con Composition API
- **Vite** (v7.2.4) - Build tool de nueva generación
- **Vue3 Toastify** (v0.2.8) - Notificaciones toast elegantes
- **Font Awesome** - Iconos vectoriales
- **CSS3** - Estilos modernos con Grid y Flexbox
- **Google Fonts** - Tipografía Fira Code

### Herramientas de Desarrollo

- **Vite Plugin PWA** (v1.1.0) - Soporte para Progressive Web Apps
- **@vitejs/plugin-vue** (v6.0.2) - Plugin oficial de Vue para Vite
- **pnpm** (v10.22.0) - Gestor de paquetes rápido y eficiente
- **Git** - Control de versiones
- **Vercel** - Despliegue automático y hosting

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- pnpm (recomendado), npm o yarn

### Instalación Local

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/SaKio1985/Portfolio-2025.git
   cd Portfolio-2025
   ```

2. **Instala las dependencias**

   ```bash
   pnpm install
   # o con npm
   npm install
   # o con yarn
   yarn install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   pnpm dev
   # o con npm
   npm run dev
   # o con yarn
   yarn dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

```bash
pnpm dev       # Servidor de desarrollo
pnpm build     # Build para producción
pnpm preview   # Preview del build
```

## 📁 Estructura del Proyecto

```
portfolio-2025/
├── public/
│   ├── Photo.png              # Foto de perfil (PNG)
│   ├── Photo.avif             # Foto de perfil optimizada (AVIF)
│   ├── Iban_Dorado_CV.pdf     # Currículum en PDF
│   └── images/                # Imágenes de proyectos
├── src/
│   ├── components/
│   │   ├── HeaderComponent.vue     # Navegación principal
│   │   ├── HeroSection.vue         # Sección de presentación
│   │   ├── SkillsSection.vue       # Habilidades técnicas
│   │   ├── ProjectComponent.vue    # Lista de proyectos
│   │   ├── ProjectCard.vue         # Tarjeta individual de proyecto
│   │   ├── ContactSection.vue      # Formulario de contacto
│   │   ├── FooterComponent.vue     # Pie de página
│   │   ├── BotonComponent.vue      # Componente de botón reutilizable
│   │   └── icons/                  # Iconos SVG personalizados
│   ├── assets/                 # Assets estáticos
│   ├── App.vue                 # Componente principal
│   ├── main.js                 # Punto de entrada
│   └── style.css               # Estilos globales
├── api/                        # Funciones serverless (Vercel)
├── vite.config.js              # Configuración de Vite
└── package.json                # Configuración del proyecto
```

## 🎨 Secciones del Portfolio

### 🏠 Hero Section

- Presentación personal con foto
- Call-to-action para contacto
- Navegación suave a secciones

### 💼 Habilidades

- Grid responsive de tecnologías
- Años de experiencia por tecnología
- Iconos y animaciones sutiles

### 📂 Proyectos

- Galería de proyectos con overlay
- Enlaces a demo en vivo y código fuente
- Tecnologías utilizadas por proyecto

### 📧 Contacto

- Formulario funcional con validación
- Integración con WhatsApp
- Información de contacto

## 🌐 Proyectos Destacados

1. **Portfolio Personal** - Vue.js, CSS3, HTML5
2. **TierList** - JavaScript, HTML5, CSS3
3. **To-do List Vue** - Vue.js, JavaScript, CSS3
4. **Librería Blackwater** - Astro, JavaScript
5. **E-commerce Juegos** - React, Tailwind CSS
6. **Rick & Morty Characters** - React, Bootstrap

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 **Móvil**: < 768px
- 📟 **Tablet**: 768px - 1024px
- 💻 **Desktop**: > 1024px

## 🔧 Personalización

Para personalizar el portfolio para tu uso:

1. **Información Personal**

   ```javascript
   // src/components/HeroSection.vue
   // Actualiza nombre, descripción y foto
   ```

2. **Proyectos**

   ```javascript
   // src/components/ProjectComponent.vue
   // Modifica el array 'projects' con tus proyectos
   ```

3. **Habilidades**

   ```javascript
   // src/components/SkillsSection.vue
   // Actualiza el array 'skills' con tus tecnologías
   ```

4. **Contacto**
   ```javascript
   // src/components/ContactSection.vue
   // Cambia el número de WhatsApp y validaciones
   ```

## 🚀 Despliegue

### Vercel (Recomendado)

El proyecto está configurado para desplegarse automáticamente en Vercel:

```bash
pnpm build
vercel --prod
```

O conecta tu repositorio de GitHub con Vercel para despliegue automático en cada push.

### Netlify

```bash
pnpm build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages

```bash
pnpm build
# Configura GitHub Pages para usar la carpeta 'dist'
```

### Build Manual

Para generar los archivos de producción localmente:

```bash
pnpm build
# Los archivos se generarán en la carpeta 'dist'
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Iban Dorado**

- 🌐 [Portfolio](https://portfolio-2025-red-mu.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/iban-dorado-171a4a24b/)
- 🐦 [Twitter](https://x.com/IbDorado)
- 💻 [GitHub](https://github.com/SaKio1985)

## 📞 Contacto

¿Tienes alguna pregunta o propuesta de proyecto?

- 📧 Email: sakio@tuta.io
- 📍 Ubicación: Salamanca, España

---

⭐ **¿Te gustó el proyecto? ¡Dale una estrella!** ⭐

![Estadísticas de GitHub](https://github-readme-stats.vercel.app/api?username=SaKio1985&show_icons=true&theme=dark)
