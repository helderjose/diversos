const webpack = require('webpack'); // está no package.json
const path = require('path');  // do node.js

/*
*/
module.exports = {

  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [{
      test: /.jsx?$/, /* regex, tudo que termina com js ou jsx */
      exclude: /node_modules/, /* ignora a pasta node_modules do loader */
      include: /src/,   /* usando o include só para melhorar a performance */
      loader: 'babel',  /* o loader usado */
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'] /* para não precisar ficar colocando a extensão no import */
  },


  /*
  Servidor web do webpack para ser usado em dev, tem várias funções com live-reload e etc.
  contenBase: pasta base onde vai estar os arquivos que o server deve carregar, repare que o nome
  "public" equivale ao "public" do metadata path do output
  */
  // devServer: {
  //     port: 8080,
  //     contentBase: './public'
  // }
};