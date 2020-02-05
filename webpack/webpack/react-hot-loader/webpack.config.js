const path = require('path');
const webpack = require('webpack'); // para configurar o react-hot-loader


/*
*/
module.exports = {

  devtool: 'source-map',

  entry: [

    //----- react-hot-loader
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    //----- react-hot-loader />

    path.join(__dirname, 'src', 'index.js')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    //----- react-hot-loader
    new webpack.HotModuleReplacementPlugin()
    //----- react-hot-loader />
  ],

  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel',
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },


  // devServer: {
  //     port: 8080,
  //     contentBase: './public'
  // }
};