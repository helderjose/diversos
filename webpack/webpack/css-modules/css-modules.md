CSS Module é "isolar" o css para não se preocupar com nome de classe ou id global (usar o css de
forma local),
será criado um nume automaticamente e  não precisamos se preocupar
com conflito de nomes global e local.

Obs: Dá para usar o css de forma global tbm, mas esse exemplo não aborda isso.

Não gostei desse jeito de trabalhar, fica ruim para inspecionar elemento e editar o css.



npm install
npm start
http://localhost:3000/


# webpack.config.js
loaders: ['style', 'css?modules']

css?modules // passando modules como parâmetro para o css-loader

# src/components/search
- index.js
    - olhar o import do css


# Testes
Olhe o nome da classe css gerado.