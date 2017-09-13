var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
const isDev = !process || process.env.NODE_ENV !== 'production';

let localIdentName = '[local]__[hash:base64:8]'

if (!isDev) {
  localIdentName = '[hash:base64:8]'
}


loaders: {
  js: 'babel-loader',
  css: ExtractTextPlugin.extract({
    use: 'css-loader',
    fallback: 'vue-style-loader'
  })
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
