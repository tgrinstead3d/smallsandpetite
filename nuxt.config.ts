// https://nuxt.com/docs/api/configuration/nuxt-config
// defineNuxtConfig is automatically available in the Nuxt context
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/relation-one?styles=122872' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/relation-two' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/shelby' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Satisfy&display=swap' }
      ],
      script: [
        {
          src: 'https://use.typekit.net/xts7lxl.js'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personalized yard signs for themed events and celebrations.' }
      ]
    }
  },
  nitro: {
    preset: 'netlify',
    compressPublicAssets: true,
    output: {
      dir: '.output',
      publicDir: '.output/public'
    }
  },
  ssr: true,
  routeRules: {
    '/**': { prerender: true }
  }
})
