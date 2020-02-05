const webpack = require('webpack');

/*
Só o presets do react é desse exemplo
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
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'], /* só o react é desse exemplo */
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
};