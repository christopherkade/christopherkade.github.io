const pkg = require('./package')
const glob = require('glob')

let files = []
glob('static/articles/*.md', function(err, output) {
  files = output
})

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'))
  return `/blog/${slug}`
}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Christopher Kade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Christopher Kade's personal website"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
      }
    ]
  },
  generate: {
    routes: function() {
      return files.map(getSlugs)
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
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    ['@nuxtjs/markdownit', { linkify: true }],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-127876951-1',
        debug: {
          sendHitTask: false
        }
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

  router: {
    middleware: 'reload'
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
