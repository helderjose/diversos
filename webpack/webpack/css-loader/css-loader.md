# Comandos
npm install
npm run dev

# Dependências
npm install --save-dev extract-text-webpack-plugin@1.0.1
npm install --save-dev style-loader@0.13.1
npm install --save-dev css-loader@0.26.1

# webpack.config.js
- ExtractTextPlugin
- "css"
```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

plugins: [
    new ExtractTextPlugin('app.css') /* agora o webpack gerar o bundle.js e o app.css */
],

test: /\.css$/,
loader: ExtractTextPlugin.extract("style-loader", "css-loader")
```

# public/index.html
```
<link rel="stylesheet" href="app.css">
```


# src/index.js
- import './estilo.css';


# Teoria
./node_modules/.bin/webpack    //gerar os arquivos abaixo.
Agora quando executar o webpack, será gerado os arquivos
public/bundle.js
public/app.css