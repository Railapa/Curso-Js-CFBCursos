const res_total = document.querySelector('#res_total')
const in_preco = document.querySelector('#in_preco')
const btn_add = document.querySelector('#btn_add')
const in_cupom = document.querySelector('#in_cupom')
const btn_cupom = document.querySelector('#btn_cupom')
const btn_limpar = document.querySelector('#btn_limpar')
const msg_carrinho = document.querySelector('#msg_carrinho')

class Carrinho{
    constructor(){
        this.total = 0
    }

    addPreco(preco){
        this.total = this.total + preco
        return this.total
    }

    aplicarCupom(cumpom){
        if(cumpom == 'QUERO10'){
            msg_carrinho.innerHTML = 'Cupom Aplicado com sucesso'
            return this.total = this.total * 0.9
        } else {
            msg_carrinho.innerHTML = 'Cumpom Invalido'
            return this.total.toFixed(2)
        }
    }
}

const novoCarrinho = new Carrinho()

btn_add.addEventListener('click', () => {
    res_total.innerHTML = novoCarrinho.addPreco(Number(in_preco.value)).toFixed(2)
})

btn_cupom.addEventListener('click', () => {
    res_total.innerHTML = novoCarrinho.aplicarCupom(in_cupom.value)
})

btn_limpar.addEventListener('click', () => {
    res_total.innerHTML = '0.00'
    msg_carrinho.innerHTML = ''
    in_cupom.value = ''
    in_preco.value = ''
})