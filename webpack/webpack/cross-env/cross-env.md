Gerar o bundle de produção.
No Linux posso executar o seguinte comando:
NODE_ENV=production npm run build
Mas no Windowns isso não funciona, por isso usamos o cross-env, para ele
fazer isso em qualquer sistema.

Por padrão, NODE_ENV tem o valor development.
O Webpack otimiza o bundle quando estamos em production.




npm install
npm start
http://localhost:3000/

# Biblioteca
npm install --save-dev cross-env@3.1.3

# package.json
Olhar o comando build

# Teste
Limpar a pasta dist
npm run build

