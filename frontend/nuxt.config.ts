// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Private runtime config (only available on the server-side)
    BASE_URL: process.env.BASE_URL || 'http://localhost:8000',

    // Public runtime config (also available on the client-side)
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:8000'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
