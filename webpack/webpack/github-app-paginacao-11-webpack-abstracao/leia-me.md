Criar um componente de paginação.
OBS: Não estou iniciando o linter porque esse é um projeto de estudo,
para poder comentar e quebrar linhas a vontade.


# Resumo
No começo esse projeto tinha três arquivos webpack
1. webpack.config.js
1. webpack.prod.config.js
1. storybook/webpack.config.js
Nesse exemplo vamos abstrair esses arquivos para eliminar configurações repetidas.

# Arquivos Desse Exemplo
- webpack/common.js
- webpack/dev.config.js
- webpack/prod.config.js
- storybook/webpack.config.js

# webpack/dev.config.js
Object.assign é do ECS6
Estende um novo objeto,
primeiro parâmetro é o objeto que vai receber as propriedades,
segundo parâmetro é o objetoque vai ser copiado as propriedades,
terceiro parâmetro são as novas propriedades que queremos no novo objeto

# webpack/prod.config.js
Tem outro exemplo de Object.assign on sobrescreve um atributo do common

# storybook/webpack.config.js
Também foi alterado para usar o webpack/common.js

# package.json
Aponta para o arquiv webpack.config desejado.
Obs: No package.json tem uma chamada para o server.js e no server.js chama o webpack.config

No build chama o webpack.config de produção



# Comandos Para Esse Exemplo
yarn start  //para ver se o ambiente de dev continua funcionando despois das alterações
yarn build  // para ver se o build de produção configura funcionando

Está dando uns avisos (no stat e no buil) mas acho que é só o linter.

Teste do build
1. apagar o conteúdo da pasta dist
1. yarn build
1. python -m SimpleHTTPServer 9001  //executar de dentro da pasta dist

# Comandos
yarn storybook      // esse exemplo é de storybook
yarn test
yarn test:watch   //não funciona quando tem muita coisa aberta por causa da memória RAM
yarn lint:watch


