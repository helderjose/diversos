exemplo em andamento.

# Comandos
npm install
npm run dev
http://localhost:3000/

# Dependências
npm install --save-dev react-hot-loader@3.0.0-beta.2

# Estudos
Abra o console do navegador;
Edite um dos componente;
Veja que a página não será recarregada por completo, apenas o componente editado será recarregado.
Esse exemplo é para react no front-end, dá para fazer no back-end também

# Teoria
Faz o hot reaload só da árvore do componente alterado. Assim o browser não faz o relaod da página toda.
A ideia é o o react-hot-reload funcionar apenas em dev.

# webpack.config.js
react-hot-loader e outras configurações

# .babelrc
"plugins": ["react-hot-loader/babel"]

# server.js
Arquivo criado para não precisar ficar dependendo do comando webpack-dev-server

# app.js
É o ponto de entreda da aplicação, o arquivo principal da aplicação.

# src/index.js
Entrada de edição dos arquivos. Esse arquivo foi configurado no webpack.config.js.
Chamar apenas o <App /> nesse arquivo.

# package.json
start
"dev": "webpack-dev-server --progress --colors --inline --hot"