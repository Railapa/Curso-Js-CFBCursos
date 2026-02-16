class Produto{
    constructor(nome, quantidade){
        this.nome = nome
        this.quantidade = quantidade
    }

    vender(qtd){
        if(this.quantidade >= qtd){
           this.quantidade -= qtd
           console.log(`Venda realizada! Estoque atual de ${this.nome}: ${this.quantidade}`)
        } else {
            console.log(`Erro: Estoque insuficiente para ${this.nome}. Temos apenas ${this.quantidade} unidades.`)
        }
    }

    repor(qtd){
        this.quantidade += qtd
        console.log(`Reposição feita. Novo estoque de ${this.nome}: ${this.quantidade}`)
    }
}

const produto1 = new Produto('Celular', 10) 

console.log(produto1.vender(12))
console.log(produto1.vender(5))
produto1.repor(10)