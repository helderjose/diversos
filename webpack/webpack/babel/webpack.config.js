const webpack = require('webpack'); // está no package.json

/*
Só o "loaders" é desse exemplo
*/
module.exports = {
    entry: './ex/index.js',
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
            test: /.js?$/, /* regex, tudo que termina com js */
            loader: 'babel-loader',  /* o loader usado */
            exclude: /node_modules/, /* ignora a pasta node_modules do loader */
            query: {
                presets: ['es2015'] /* package.json: "babel-preset-es2015": "^6.22.0", */
            }
        }]
    }
};