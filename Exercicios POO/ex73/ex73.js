const lista_produtos = document.querySelector('#lista_produtos')
const btn_desconto = document.querySelector('#btn_desconto')

class Produto{
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }
}

const p1 = new Produto('Teclado', 200)
const p2 = new Produto('Mouse', 100)

btn_desconto.addEventListener('click', () => {
    Produto.prototype.desconto = function(){
        return this.preco * 0.90
    }

    lista_produtos.innerHTML = `Produto: ${p1.nome} <br/> Preço: R$ ${p1.preco.toFixed(2)} <br/> Preço com desconto: R$ ${p1.desconto().toFixed(2)}`
})