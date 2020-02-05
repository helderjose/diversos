# webpack.config.js
publicPath é o local onde o webpack-dev-server fica assistindo o arquivo de desenvolvimento.
Quando executa o webpack-dev-server ele não gera um arquivo físico, é geredo em memória e
o "publicPath" diz onde o webpack-dev-server deve servir esse arquivo.
Caso o index.html de dev e de prof for o mesmo, posso usar o mesmo path, exe "publicPath: '/dist/'"