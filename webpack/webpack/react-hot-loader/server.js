// 'use strict'

const webpack = require('webpack')  // pega do node_modules
const WebpackDevServer = require('webpack-dev-server')  // pega do node_modules
const config = require('./webpack.config')  // pega do meu projeto

//a porta 3000 tem que ser a mesma do webpack.config.js, mas posso usar qualquer porta
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})
