exemplo em andamento.

# Comandos
npm install
npm run dev

# .babelrc
Configurações do babel. Adicionado o babel-preset-react

# webpack.config.js
Configurações para usar o babel quando encontrar um arquivo javascript.

# Dependências
npm install --save-dev babel-core@6
npm install --save-dev babel-loader@6
npm install --save-dev babel-preset-es2015@6
npm install --save-dev babel-preset-stage-0@6
npm install --save-dev babel-preset-react@6
npm install --save-dev react@15
npm install --save-dev react-dom@15

# Teoria
Babel é para transformar os recursos do es2015 para o formato que o browser suporte.
Stage-0 tem os recursos mais novos do es2015.
## babel-preset-react
npm install --save-dev babel-preset-react
Para o babel reconhecer a sintaxe jsx do react