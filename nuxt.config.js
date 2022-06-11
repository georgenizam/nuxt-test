export default {
  head: {
    title: 'test-task',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // rootDir: __dirname,
  router: {
    prefetchLinks: false
  },
  loading: { color: "#FFC543" },
  css: [
    // "~/node_modules/swiper/dist/css/swiper.css",
    "./assets/styles/main.scss"
  ],
  plugins: [
    { src: "./plugins/vue-swiper", mode: "client" },
    { src: './plugins/starRating', mode: 'client' },
    { src: "./plugins/api.js" },
    { src: "./plugins/dateFilter" },
    { src: "./plugins/vueLazyLoad" }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/style-resources"
  ],
  styleResources: {
    scss: ["~/assets/styles/main.scss"]
  },
  axios: {
  },
  build: {
  },
  server: {
    host: '0'
  }
}
