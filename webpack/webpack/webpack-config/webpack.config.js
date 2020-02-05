const webpack = require('webpack'); // está no package.json
const path = require('path')

/*
Arquivo de configuração que vai ser executado pelo node.
Se alterar esse arquivo, deve reiniciar o server para
as alterações serem aplicadas.

exporta um objeto que representa a configuração da aplicação.

module.exports -> expõe o objeto para ser usado fora do arquivo.

__dirname é uma variável de ambiente do node (diretório atual).

bundle.js é o nome mais usado (pode colocar qualquer nome).
contentBase: './public' -> onde vai o arquivo bundle.js, index.html
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
        // path: __dirname + '/public',
        // path: path.join(__dirname, 'dist'),
        path: path.join(__dirname, 'public'),
        filename: './bundle.js'
    },

    
    /*
    Servidor web do webpack para ser usado em dev, tem várias funções com live-reload e etc.
    contenBase: pasta base onde vai estar os arquivos que o server deve carregar, repare que o nome
    "public" equivale ao "public" do metadata path do output
    */
    devServer: {
        port: 8080,
        contentBase: './public'
    }
};