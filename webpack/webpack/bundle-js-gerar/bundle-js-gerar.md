# Comandos
npm install
npm run dev



# bundle.js
Gera o public/bundle.js, Se não tiver o webpack instalado de forma global, use o seguinte comando:
./node_modules/.bin/webpack

Se tiver o webpack instalado de forma global basta execute o seguinte comando:
webpack


# Teoria
Arquivo que não é referenciado, não é colocado no bundle.js pelo webpack.



# Teste
Comente todo o conteúdo do index.js sem nada e gere o bungle.js.
Procure por "carregado" no bundle.js (não irá encontrar).

Descomente e refaça o teste, dessa vez vai encontrar.

