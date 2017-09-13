const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'static')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        loaders: {
          js: 'babel-loader',
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          })
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue-karma',
    }),
    new CleanWebpackPlugin(['static']),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
     'vue$': 'vue/dist/vue.esm.js',
     '@': resolve('src')
    }
  }
};
