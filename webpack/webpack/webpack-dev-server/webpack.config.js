const webpack = require('webpack'); // está no package.json
const path = require('path');  // do node.js

/*
*/
module.exports = {
    // entry é o ponto de entrada
    // entry: './src/index.js',
    entry: path.join(__dirname, 'src', 'index.js'),

    /*
    output saída javascript.
    O bundle.js é o nome mais usado, mas você pode usar qualquer nome que quiser, como, app.js, scripts.js e etc.
    */
    output: {
        // criado quando executar o comando ./node_modules/.bin/webpack
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        /*
        publicPath é o local onde o webpack-dev-server fica assistindo o arquivo de desenvolvimento.
        Quando executa o webpack-dev-server ele não gera um arquivo físico, é geredo em memória e
        o "publicPath" diz onde o webpack-dev-server deve servir esse arquivo.
        Caso o index.html de dev e de prof for o mesmo, posso usar o mesmo path, exe "publicPath: '/dist/'"
        */
        publicPath: '/static/'
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