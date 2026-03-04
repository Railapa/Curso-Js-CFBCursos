const valor_compra = document.querySelector('#valor_compra')
const btn_pagar = document.querySelector('#btn_pagar')
const visor = document.querySelector('#visor')

const pagamento = () => {
    return new Promise((ok, rej) => {
        setTimeout(() => {
            if (valor_compra.value < 1000) {
                ok('PAGAMENTO REALIZADO COM SUCESSO')
            } else {
                rej('PAGAMENTO DOI REJEITADO')
            }
        }, 2500)

    });

    
}

btn_pagar.addEventListener('click', () => {
    btn_pagar.disabled = true
    visor.innerHTML = 'AGUARDANDO PAGAMENTO...'
    pagamento()

    .then((msgOk) => {
        visor.innerHTML = msgOk
    })

    .catch((msgRej) => {
        visor.innerHTML = msgRej
    })

    .finally(() => {
        btn_pagar.disabled = false
    })
})