'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    
    // gerar arquivo com hash para cache, sempre que o arquivo mudar o hash muda
    filename: '[name]-[hash].js',
    // filename: 'bundle.js',

    // diretório em branco para pegar o diretório atual: http://localhost:3000/
    publicPath: ''
    // publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'Vem do webpack.config.js',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    // linter
    // preLoaders: [{
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   include: /src/,
    //   loader: 'standard'
    // }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'raw']
    }]
  }
})
