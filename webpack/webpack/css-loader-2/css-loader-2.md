css-loader no lugar do raw-loader.
css-loader resolve url(...) e @import no css, o raw-loader não.

npm install
npm start
http://localhost:3000/


# Comandos
npm rm --save-dev raw-loader // remove o raw-loder que estávamos usando nos exemplos anteriores

# Dependências
npm install --save-dev css-loader@0.25.0

# webpack.config.js
trocar
loader: ExtractTextPlugin.extract('style', 'raw')
por
loader: ExtractTextPlugin.extract('style', 'css')