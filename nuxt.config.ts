// https://nuxt.com/docs/api/configuration/nuxt-config
// Define tus variables clave para fácil personalización
const siteUrl = 'https://www.almaboutique.mx'; // **¡IMPORTANTE! Reemplazar con la URL real de tu sitio**
const siteTitle = 'Alma Boutique | Moda Femenina Exclusiva - Próximamente';
const siteDescription = 'Alma Boutique está preparando su nueva tienda online con la mejor selección de moda femenina. ¡Síguenos para no perderte la apertura!';
const ogImage = `${siteUrl}/alma-boutique-logo.png`; // Asegúrate de que la imagen esté en la carpeta 'public'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Configuración general de la aplicación y el head
  app: {
    head: {
      // Configuración Básica Obligatoria
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Canonical: ¡Importante para SEO!
        { rel: 'canonical', href: siteUrl },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap' 
        }
      ],
      meta: [
        // Metadatos de SEO (Para Google y Buscadores)
        { name: 'title', content: siteTitle },
        { name: 'description', content: siteDescription },
        { name: 'robots', content: 'index, follow' },

        // Metadatos Open Graph (Para Facebook, WhatsApp, LinkedIn)
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_LA' },

        // Metadatos de Twitter Card (Para X/Twitter)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@[TU_USUARIO_TWITTER]' }, // Opcional: Reemplaza o elimina
        { name: 'twitter:creator', content: '@[TU_USUARIO_TWITTER]' }, // Opcional: Reemplaza o elimina
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
      ]
    }
  },

  // Añade otras configuraciones de Nuxt aquí (módulos, css, etc.)
  // Ejemplo: Habilitar el módulo de carga de imágenes si lo necesitas más adelante
  // modules: ['@nuxt/image'] 
})
// nuxt.config.ts
