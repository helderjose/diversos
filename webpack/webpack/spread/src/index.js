const produto = {
    nome: 'Caneta Bic preta',
    preco: 1.90,
    desconto: 0.05
}

//Operador spread ou rest spread
//spread "..." duplica o objeto
function clone(object) {
    return {...object}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';

console.log(produto, novoProduto);