Cria html de forma dinâmica.

npm install
npm start
http://localhost:3000/

# package.json
npm install --save-dev html-webpack-plugin@2.24.1

# webpack.config.js
- HtmlPlugin

filename: '[name]-[hash].js'
No lugar do bundle.js gera o arquivo main-qualquerNumero ex: main-90558d3cf45818a7393a.js
O hash é para cache, sempre que o arquivo mudar, o hash muda.


# src/html/template.html
O arquivo src/html/index.html virou o src/html/template.html


# html-webpack-plugin
O index.html será gerado no public path:
publicPath: '/dist/'
http://localhost:3000/dist/index.html

publicPath: ''
http://localhost:3000/