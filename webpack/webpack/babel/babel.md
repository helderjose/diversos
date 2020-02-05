# Comandos
npm install
npm run dev


# Arquivos
+ pessoa.js
    - só uma classe.
+ index.js
    - usa o pessoa.js
+ package.json
    - babel
+ webpack.config.js
    - "loaders"


# Dependências babel
npm install --save-dev babel-core@6.22.1
npm install --save-dev babel-loader@6.2.10
npm install --save-dev babel-preset-es2015@6.22.0


# webpack.config.js
```
module: {
    loaders: [{
        test: /.js?$/, /* regex, tudo que termina com js */

        loader: 'babel-loader',  /* o loader usado, nesse caso o babel. */

        exclude: /node_modules/, /* para o loader ignorar a pasta node_modules. */

        /* o que eu quero que o loader interprete */
        query: {
            presets: ['es2015'] /* package.json: "babel-preset-es2015": "^6.22.0", */
        }
    }]
}
```


# Teoria
O Babel "traduz" (faz o transpile) recursos do es2015 que o browser
ainda não suporta para a versão antiga que o browser suporta.