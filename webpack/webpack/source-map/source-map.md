exemplo em andamento.

# Comandos
npm install
npm run dev

# Estudos
Execute a aplicação no Chrome: console -> sources -> webpack
A estrutura gerada será a mesma do projeto.
No index.js mude o component <Title /> para <Titleee /> para ver o erro e como ficou fácil identificá-lo. O erro
no console aparece no index.js e não no bundle.js.

# Teoria
source-map facilita para debugar o código (ver a linha do erro no navegador).


# webpack.config.js
devtool: 'source-map'