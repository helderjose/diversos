Resolver caminhos a partir do webpack.

 alias: {
    modules: __dirname + '/node_modules'
}

ex: import modules/bootstrap/css




npm install
npm start
http://localhost:3000/


# webpack.config
Procure por "alias".

Alias src
src: path.join(__dirname, 'src')
__dirname = diretório que o webpack.config está e aponta para src

Alias components
components: path.join(__dirname, 'src', 'components')
diretorio-que-o-webpack.config-esta/src/components

Cuidado para não criar um alias cujo nome exista em node_modules, dá conflito
porque o webpack procura em node_modules quando não tem caminho relativo.