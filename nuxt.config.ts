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
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // additionalData: '@import "@/assets/styles/_variables.sass"'
        }
      }
    }
  }
})
