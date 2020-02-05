# Executar o Projeto
npm install
npm run dev
http://localhost:3000


# Dependências
npm install --save isomorphic-unfetch

isomorphic-unfetch
First of all we need to install isomorphic-unfetch. That's the library we are going to use to fetch data. It's a simple implementation of the browser fetch API, but works both in client and server environments.


# Anotações
Fetch Data in Client Side

Here we can only see the message on the browser console. That's because we navigated to the post page via the client side.

When we click on a link wrapped with the Next.js <Link> component, the page transition takes place in the browser, without making a request to the server.

If you just visit a post page directly (eg:- http://localhost:3000/p/975) you'll be able to see the message printed on the server but not in the client.