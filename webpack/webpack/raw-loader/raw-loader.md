https://www.npmjs.com/package/raw-loader
https://webpack.js.org/loaders/style-loader/

Para trabalhar com css dê preferência para o css-loader, outros tipos
de arquivos pode usar o raw-loader mesmo.

# Executar o projeto
```
npm install
npm start
http://localhost:3000/
```

# package.json
 npm install --save-dev raw-loader@1.0.0
 npm install --save-dev style-loader@0.13.1

# webpack.config.js
raw
style

# Anotações
Esse exemplo é o github-app, está sendo usado para carregar
o css usando o raw-loader e style-loader

# Geral
- css
    - index.html (/dist/css/style.css)

# raw-loader
Carrega o css de forma "crua".

# Passos
- index.js
  - importa o src/css/style.css
- webpack.config.js
  - raw e style
