const articles = require('./static/articleList.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Christopher Kade - Web, Javascript & Tech Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Christopher Kade's blog - I mostly write about the Web, Javascript, Technology and Self Improvement."
      }
    ]
  },
  generate: {
    routes: () => {
      const routes = articles.map(article => article.path)
      return routes
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  css: [
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
    { src: '~/assets/main.scss' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/style-resources',
    ['@nuxtjs/markdownit', { linkify: true }],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-127876951-1'
      }
    ]
  ],
  styleResources: {
    scss: ['./assets/main.scss']
  },
  markdownit: {
    injected: true,
    use: ['markdown-it-highlightjs']
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
