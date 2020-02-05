Colocar o css que quero carregar primeiro na tag style no head, e
o resto colocar em um arquivo css separado, para baixar primeiro a parte da página que o usuaŕio vê.




npm install
npm start
http://localhost:3000/



# webpack.prod.config.js
// para o htmlPlugin não injetar nada no index.html
inject: false,

constantes crp e styles

# webpack.config.js
procure por template-dev.html

# src/html/template.html
Olhar o <style> do head, o <style> e o <script> do fim do arquivo

# src/html/template-dev.html



# Teste
apague os arquivos da pasta dist
npm run build
cd dist
python -m SimpleHTTPServer 3000