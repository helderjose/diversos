const webpack = require('webpack');

//desse exemplo
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
conteúdo do exemplo:
linha do "app.css"
linha do "style-loader"
*/
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css') /* agora o webpack gerar o bundle.js e o app.css */
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
};