/*
export -> é um sistema de módulo que foi introduzido no es2015.
default -> por padrão exporta a classe Pessoa, porque posso exportar várias coisas.
    

OBS: Não existe classe em javascript, é só um truque de sintaxe, no fim das contas vira uma função.
*/
export default class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Pessoa: ${this.nome}`;
    }
}