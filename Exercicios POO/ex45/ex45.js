class Pagamento{
    constructor(valor, pagador){
        this.valor = valor
        this.pagador = pagador
        if(this.constructor === Pagamento){
            throw new TypeError('Essa classe não pode ser instanciada')
        }
        if(this.processar === undefined){
            throw new TypeError('O metodo processar deve obrigatoriamente ser implementado')
        }
    }

    emitir_recibo(){
        console.log(`Recibo emitido para ${this.pagador} no valor de R$ ${this.valor}`)
    }
}

class Cartao_credito extends Pagamento{
    constructor(valor, pagador, numero_cartao){
        super(pagador, valor)
        this.numero_cartao = numero_cartao
    }

    processar(){
        console.log(`💳 Validando cartão ${this.numero_cartao}... Pagamento de ${this.valor} autorizado!`)
    }
}

class Pix extends Pagamento{
    constructor(valor, pagador, chave_pix){
        super(valor, pagador)
        this.chave_pix = chave_pix
    }

    processar(){
        console.log(`📱 Gerando QR Code para a chave ${this.chave_pix}... Transferência de R$ ${this.valor} concluída!`)
    }
}

class Boleto extends Pagamento{
    constructor(valor, pagador){
        super(valor, pagador)
    }
}

const credito = new Cartao_credito(200, 'Bruno', '2457 5325 4575 7543')
const pix = new Pix(1000, 'Elias', '7198898922')

const lista_pagamento = [credito, pix]

lista_pagamento.map((el) => {
    el.processar()
})

// const pagamento = new Pagamento(400, 'Raí')
const boleto = new Boleto(60, 'Ronaldo')