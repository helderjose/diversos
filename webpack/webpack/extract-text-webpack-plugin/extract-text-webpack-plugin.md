Exportando css para um arquivo.

npm install
npm start
http://localhost:3000/

# OBS
Execute o exemplo e inspecione elemento, veja na tag head que faz uma
chamada para o arquivo css gerado pelo ExtractTextPlugin no webpack.config.js

# Dependências
npm install --save-dev extract-text-webpack-plugin@1.0.1


# webpack.config.js
ExtractTextPlugin

O ExtractTextPlugin vai extrair o conteúdo do raw-loader, vai criar um arquivo css
e chamar esse arquivo no head usando a tag <link>.
Se algo der errado o ExtractTextPlugin não vai ser usado e o style-loader vai pegar
o conteúdo gerado pelo raw-loader e vai criar uma tag <style> no head com esse conteúdo.