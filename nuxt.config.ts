// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3000
  },
  css: [
    '@/assets/styles.css'
    // '@/assets/nike-custom.css'
    // '@/assets/nike-dua.css',
    // '@/assets/nike-tiga.css'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        }
      ]
    }
  }
})
