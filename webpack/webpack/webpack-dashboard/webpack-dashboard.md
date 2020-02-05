Gera uma tabela com a saída do webpack.
É uma dependência de desenvolvimento

npm install
npm start
http://localhost:3000/


# Dependências
npm install --save-dev webpack-dashboard@0.2.0


# webpack.config.js
DashboardPlugin


# package.json
"start": "webpack-dashboard -- node server.js",
o -- indica que vamos passar o comando 'node server.js' para o webpack-dashboard
para mostrar que o 'node server.js' não é um parâmetro do webpack-dashboard