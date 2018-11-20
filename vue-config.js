// https://nodejs.org/api/path.html
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src'),
        node_modules: path.resolve(__dirname, 'node_modules'),
        context_root: path.resolve(__dirname, '.')
      }
    },
  }
}