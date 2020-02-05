https://webpack.js.org/

# package.json

npm init -y
npm i --save-dev webpack@1.14.0
npm i --save-dev webpack-dev-server@1.16.2
npm install
npm run dev
http://localhost:8080



# webpack.config.js
Arquivo que será executado no node.js. Dá para usar as variáveis de ambiente que o node disponibiliza e etc.
Quando alterar o webpack.config.js, tem que reiniciar o server.
 
entry, output, devServer (olhar anotações no arquivo webpack.config.js)

# src/index.js
Arquivo de entreda configurado no "entry" do webpack.config.js


# public/index.html
Importa o bundle.js configurado no webpack.config.js

# package.json
"dev": "webpack-dev-server --progress --colors --inline --hot"
"--progress" mostra o progresso.
"-- colors" coloca o progresso colorido.
"--inline --hot" atualiza o navegador quando alterar o arquivo.


# Explicação
npm init -y  //cria o package.json. [-y yes for all]

webpack é um module do node.js
npm i --save-dev webpack@1.14.0

webpack-dev-server é um servidor web do webpack para dev.
npm i --save-dev webpack-dev-server@1.16.2



