/*
import -> sistema de módulos do es2015
Precisa do babel para funcionar o import sem a extensão, olhar o package.json e o webpack.config.js
*/
import Pessoa from './pessoa';

const pessoa = new Pessoa("Joao");
console.log(pessoa.toString());