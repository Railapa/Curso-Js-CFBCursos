const inCupom = document.querySelector('#cupom-input')
const btn = document.querySelector('#btn-comprar')
const msg = document.querySelector('#status-checkout')

const promessaCupom = (cupom) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inCupom.value == 'DESCONTO500') {
                resolve(500)
            } else if (inCupom.value == '') {
                resolve(0)
            } else {
                reject('Cupom invalido ou ja expirado.')
            }
        }, 2000)
    })
}

const promessaSaldo = (valorFinal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const saldoDisponivel = 1700
            if (valorFinal <= saldoDisponivel) {
                resolve('Compra aprovada!')
            } else {
                reject(`Cartão recusado. Saldo insuficiente para pagar R$ ${valorFinal}.`)
            }
        }, 2000)
    })
}

const verificarCupom = async () => {
    msg.classList.remove('falha')
    msg.classList.remove('sucesso')
    msg.classList.add('passo1')
    msg.innerHTML = 'Verificando...'

    const precoOriginal = 2000

    try{
        const resCupom = await promessaCupom(inCupom.value)
        const valorFinal = precoOriginal - resCupom

        msg.innerHTML = `Cupom aceito! Processando pagamento de R$ ${valorFinal}...`
        msg.classList.add('sucesso')

        const resSaldo = await promessaSaldo(valorFinal)
        msg.innerHTML = resSaldo
    } catch (erro){
        msg.innerHTML = erro
        msg.classList.add('falha')
    }
}

btn.addEventListener('click', verificarCupom)