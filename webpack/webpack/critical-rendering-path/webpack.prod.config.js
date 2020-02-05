'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// crp = critical rendering path
const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate({
  
  entry: [
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    crp,
    styles,

    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: 'Vem do webpack.config.js',

      // para o htmlPlugin não injetar nada no index.html
      inject: false,

      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    // na versão verdadeira pode usar o linter no arquivo de produção, aqui eu descomentei porque estava dando warning.
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
    },
    
    /*
    Ignora o search.css e style.css, o restante entra aqui
    e vai para a parte que não faz parte do critical rendering path.
    */
    {
      test: /\.css$/,
      exclude: /node_modules|(search|style)\.css/,
      include: /src/,
      loader: styles.extract('style', 'css')
    },
    
    /*
    search.css e style.css faz parte do critical rendering path,
    será exportadao com o nome crp.css e colocado no head do /dist/index.html
    */
    {
      test: /(search|style)\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: crp.extract('style', 'css')
    }]
  }
})
