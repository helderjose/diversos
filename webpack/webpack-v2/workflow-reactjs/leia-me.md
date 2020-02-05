# webpack/common.js
Na versão 2 do webpack tem que usar o sufixo loader
loader: 'standard-loader',

Indica que é um pré loader
enforce: 'pre',

# webpack/prod.config.js
Removeu o "webpack-validator" porque a versão 2 já mostra o erro.
Removeu o module.preLoaders porque não precisa mais e renomeou o "module.loaders" para "module.rules".
Removeu o dedupePlugin porque a versão 2 tem uma feature que remove o que não está sendo usado.
Removeu o occurrenceOrderPlugin porque a versão 2 já faz o serviço.
Alterou o ExtractTextPlugin.


# webpack/dev.config.js
Mesmas alterações de prod
