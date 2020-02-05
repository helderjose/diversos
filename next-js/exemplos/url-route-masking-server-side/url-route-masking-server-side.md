# Executar o Projeto
npm install
npm run dev
http://localhost:3000

# Explicação
URL amigável no lado do servidor para resolver o seguinte problema:
Se entrar em um post e atualizar a página, vai dar 404 (esse exemplo resolve isso).

Obs: Nesse exemplo, quando seleciona um post e atualiza a página, o título muda, em
uma aplicação real isso não vai acontecer porque usaremos o id para pegar o post, o
server já tem o id na url para a aplicação real.


# Dependências
npm install --save express

# server.js
Olhar o arquivo todo.



# package.json
Adicionar os seguintes script
```
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```


Obs:
On Windows, NODE_ENV=production will not work by default. One solution is to
install the npm module cross-env into your app. Then update the start script like
this: "start": "cross-env NODE_ENV=production node server.js"



# Dicas
You're not limited to using Express. You can use any Node.js server framework for that.
https://nextjs.org/docs/#custom-server-and-routing