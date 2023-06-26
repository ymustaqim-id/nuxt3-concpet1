// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles.css'
    // '@/assets/nike-custom.css'
    // '@/assets/nike-dua.css',
    // '@/assets/nike-tiga.css'
  ],

  vite: {
    build: {
      sourcemap: false,
      cssCodeSplit: true
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: { lang: 'id' },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css'
        }
      ]
    },

    pageTransition: false,
    layoutTransition: false
  },

  runtimeConfig: {
    // available within server-side
    HOST_DEV_URL: 'http://localhost:4444',
    HOST_PROD_URL: 'http://morbis-fe.test',

    API_DEV_URL: 'http://localhost:4040/api',
    API_PROD_URL: 'http://localhost:4040/api',

    // will be also exposed to the client-side
    public: {
      HOST_DEV_URL: 'http://localhost:4444',
      HOST_PROD_URL: 'http://morbis-fe.test',

      API_DEV_URL: 'http://localhost:4040/api',
      API_PROD_URL: 'http://localhost:4040/api'
    }
  },

  routeRules: {
    // https://nuxt.com/docs/guide/concepts/rendering
    // https://vueschool.io/articles/vuejs-tutorials/hybrid-rendering-in-nuxt-js-3/

    '/': { ssr: false },
    '/dashboard/**': { ssr: false },
    '/hello-seo/**': { ssr: true }
  }

  // modules: ['@nuxtjs/google-fonts', '@nuxtjs/critters', '@pinia/nuxt'],

  // // critters: {
  // //   // https://github.com/GoogleChromeLabs/critters#critters-2
  // //   config: {
  // //     // preload: 'media'
  // //     preload: 'swap'
  // //   }
  // // },

  // plugins: [
  //   // { src: '~/plugins/vuedatepicker.client' },
  //   { src: '~/plugins/bootstrap.client', mode: 'client' }
  // ],

  // build: {
  //   // transpile: ['@vuepic/vue-datepicker']
  // },

  // // css: ['assets/scss/app.scss', 'assets/scss/iconly.scss'],
  // css: ['assets/scss/app.scss']

  // googleFonts: {
  //   families: {
  //     Nunito: true
  //   },
  //   preconnect: true
  // }
})
