# Executar o Projeto
npm install
npm run dev
http://localhost:3000


# Dependências
npm install --save react-markdown

https://github.com/rexxars/react-markdown

# pages/post.js
Aplica o css de forma global no Markdown.

Considerações:
While this feature can be incredibly handy, we always recommend trying to write scoped styles (without the global prop).
Still, this is a great solution over normal style tags. With styled-jsx all necessary
prefixing and CSS validation is done inside a babel plugin, so there is no additional runtime overhead.