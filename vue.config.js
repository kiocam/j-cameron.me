const path = require('path')

const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
    plugins: [
      new PrerenderSPAPlugin(
        // absolute path to compiled SPA

        path.resolve(__dirname, 'dist'),

        // list of routes to prerender
        ['/'],
        {
          // options
        }
      ),
    ],
  },

  transpileDependencies: ['vuetify'],
}
