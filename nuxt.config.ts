// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    mode: 'static',
    router: {
        base: '/Tail-Wags-Treats/'
    },
    css: [
        '~/assets/css/main.css'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })