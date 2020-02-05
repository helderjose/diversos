'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    /*
      gerando o arquivo com a variável name e com hash para cache, o arquivo vai ter um nome dinâmico,
      main-17d7d8ed20b8bc8abf5b.css por exemplo.
    */
    new ExtractTextPlugin('[name]-[hash].css'),

    // style.css é o nome que o arquivo será gerado
    // new ExtractTextPlugin('style.css'),

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

      /*
       O ExtractTextPlugin vai gerar o arquivo css com o conteúdo do css-loader, se
       algo der errado o style-loader será usado (lembre-se que o style-loader coloca
        o css em uma tag style no head).
      */
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  }
})
