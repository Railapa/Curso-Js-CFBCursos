const Carrinho = {
    itens: [],
    total: 0,

    adicionar: function(nome, preco){
        this.itens.push(nome)
        this.total += preco
    },

    limparCarrinho: function(){
        this.itens = []
        this.total = 0
    },

    fecharPedido: function(){
        console.log(`Itens: ${this.itens} \n Valor total: ${this.total}`)
    }
}

const abaLoja = Carrinho
const abaPagamento = Carrinho
const limpar = Carrinho

abaLoja.adicionar('Teclado', 150)
abaLoja.adicionar('Mouse', 80)
abaPagamento.fecharPedido()