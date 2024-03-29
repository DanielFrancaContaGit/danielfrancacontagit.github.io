// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    '~/assets/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      appearActiveClass: 'true',
    }
  },

  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  }

})
