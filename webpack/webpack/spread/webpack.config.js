const webpack = require('webpack'); // está no package.json

/*
 só o "spread" é desse exemplo
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
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread'] /* esse plugin vai ser executado no babel, está no package.json */
            }
        }]
    }
};