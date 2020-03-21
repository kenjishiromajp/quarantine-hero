const withLess = require('@zeit/next-less');
const withPWA = require('next-pwa');
const resolve = require('resolve');

// styled jsx will fail without it
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withPWA(withLess({
  pwa: {
    dest: 'public'
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // theme antd here
    modifyVars: {'@primary-color': '#FF9933'}
  },
  webpack: (config, { defaultLoaders, dir, isServer }) => {
    // Probably a better way to do this: https://github.com/nuxt-community/modules/issues/98#issuecomment-318736546
    if (defaultLoaders.babel.options.plugins === undefined) {
      defaultLoaders.babel.options.plugins = []
    }
    defaultLoaders.babel.options.plugins.push(['import', {
      'libraryName': 'antd',
      'style': true
    }]);

    config.externals = [];

    if (isServer) {

      // add antd to https://github.com/zeit/next.js/blob/canary/build/webpack.js#L34-L59
      // This makes sure paths are relative when pushing build to other systems
      config.externals.push((context, request, callback) => {
        resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
          if (err) {
            return callback();
          }

          // Default pages have to be transpiled
          if (res.match(/node_modules[/\\]next[/\\]dist[/\\]pages/)) {
            return callback();
          }

          // Webpack itself has to be compiled because it doesn't always use module relative paths
          if (res.match(/node_modules[/\\]webpack/) || res.match(/node_modules[/\\]css-loader/) || res.match(/node_modules[/\\]antd/)) {
            return callback();
          }

          if (res.match(/node_modules[/\\].*\.js$/)) {
            return callback(null, `commonjs ${request}`)
          }

          callback()
        })
      })

    }

    return config
  },
}));
