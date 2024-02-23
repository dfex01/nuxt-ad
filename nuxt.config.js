import { apiPlugin } from '@storyblok/vue'
export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: "J8Qk22UrrjQapw8rXCGmBQtt",
        use: [apiPlugin],
        apiOptions: {
          region: "us",
        },

      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
