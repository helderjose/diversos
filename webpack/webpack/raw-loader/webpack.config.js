'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

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
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
      // carrega os loaders da direita para a esquerda
      /*
      raw-loader "raw" pega o css no formato de string e passa para o style-loader "style"
      que cria uma tag <style> no <head> com o conteúdo dessa string
      */
      loaders: ['style', 'raw']
    }]
  }
})
