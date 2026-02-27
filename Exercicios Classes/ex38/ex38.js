class Pagamento{
    constructor(valor){
        this.valor = valor
    }

    processar(){
        console.log(`Processando pagamento de R$${this.valor}`)
    }
}

class Pix extends Pagamento{
    constructor(valor){
        super(valor)
    }

    processar(){
        console.log(`Pagamento de R$${this.valor} via Pix: Chave gerada!`)
    }
}

class Cartao extends Pagamento{
    constructor(valor){
        super(valor)
    }
    
    processar(){
        console.log(`Pagamento de R$${this.valor} via Cartão: Transação aprovada! (Parcelado em 3x)`)
    }
}

const pagamentoNormal = new Pagamento(50)
const pagamentoPix = new Pix(100)
const pagamentoCartao = new Cartao(250)

const lista_pagamentos = [pagamentoPix, pagamentoCartao, pagamentoNormal]

lista_pagamentos.map((el) => {
    el.processar()
})

// pagamentoPix.processar()
// pagamentoCartao.processar()
//pagamentoNormal.processar()