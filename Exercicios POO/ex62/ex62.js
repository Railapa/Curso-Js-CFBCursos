const in_qtd = document.querySelector('#in_qtd')
const btn_comprar = document.querySelector('#btn_comprar')
const btn_vender = document.querySelector('#btn_vender')
const msg_estoque = document.querySelector('#msg_estoque')
const res_quantidade = document.querySelector('#res_quantidade')

class Estoque {
    constructor() {
        this.estoqueAtual = 10
    }

    reporEstoque(repor) {
        if (repor <= 0) {
            return 'Erro'
        } else {
            this.estoqueAtual = this.estoqueAtual + repor
            return this.estoqueAtual
        }
    }

    venderEstoque(vender) {
        if (vender > this.estoqueAtual || vender <= 0) {
            return 'Erro'
        } else {
            this.estoqueAtual = this.estoqueAtual - vender
            return this.estoqueAtual
        }
    }
}

const novoEstoque = new Estoque()

btn_comprar.addEventListener('click', () => {
    res_quantidade.innerHTML = novoEstoque.reporEstoque(Number(in_qtd.value))
})

btn_vender.addEventListener('click', () => {
    res_quantidade.innerHTML = novoEstoque.venderEstoque(Number(in_qtd.value))
})