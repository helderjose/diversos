'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  
  // remover devtools, não precisa dele em produção
  // devtool: 'source-map',

  entry: [
    // comentou as entradas do hot loader, não usa em produção
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    // publicPath: '' // não precis ado publicPath na saída em produção, porque ele é usado para salvar os arquivos em memória
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // não usa esse plugin em produção
    new ExtractTextPlugin('[name]-[hash].css'),

    // ----------------- plugins para melhorar o desempenho em produção

    // sempre que encontrar process.env.NODE_ENV, seta como production
    new webpack.DefinePlugin({
      'process.env': {
        // aspas duplas e simples para gerar como string, se deixar só aspas simples gera como variável
        'NODE_ENV': '"production"'
      }
    }),

    // minificar js e css
    new webpack.optimize.UglifyJsPlugin({
      // não mostrar os warnings na minificação do js.
      compress: { warnings: false }
    }),

    // remove dependências duplicadas (dependências que usam uma terceira dependência, remove a duplicada e usa a mesma para ambas)
    new webpack.optimize.DedupePlugin(),

    // carrega os arquivos menores primeiro (chunks - Code Splitting)
    new webpack.optimize.OccurrenceOrderPlugin(),

    // ----------------- fim plugins para melhorar o desempenho em produção

    new HtmlPlugin({
      title: 'Vem do webpack.config.js',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    // na versão verdadeira pode usar o link no arquivo de produção, aqui eu descomentei porque estava dando warning.
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
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  }
})
