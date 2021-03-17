import colors from 'vuetify/es5/util/colors'
export default {
  ssr: false,
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: 'NUXTFLIX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Browse Movies, TV Shows and People'
      },
      { hid: 'author', name: 'author', content: 'Allain Escobar' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:title', property: 'og:title', content: 'NUXTFLIX' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Browse Movies, TV Shows and People'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/global.js',
    '~plugins/infiniteScroll.js',
    { src: '~plugins/trailers.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],

  /**
   * .ENV
   */
  env: {
    API_KEY: process.env.API_KEY || ''
  },
  /*
   ** Nuxt.js modules
   */

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-lazy-load',
      {
        directiveOnly: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
    // analyze:true
  }
}
