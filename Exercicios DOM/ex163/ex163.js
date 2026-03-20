const status_pagamento = document.querySelector('#status_pagamento')
const btn_pagar = document.querySelector('#btn_pagar')

const promessa = (valor) => {
    status_pagamento.innerHTML = 'Processando pagamento...'
    status_pagamento.classList.add('processando')

    return new Promise((ok,rej) => {
        setTimeout(() => {
            if(valor === 500){
                ok('Transação Concluida!')
            } else {
                rej('Transação Negada.')
            }
        }, 2000)
    })
}

btn_pagar.addEventListener('click', () => {
    promessa(500)

    .then((msgOk) => {
        status_pagamento.classList.remove('processando')
        status_pagamento.innerHTML = msgOk
        status_pagamento.classList.add('sucesso')
    })

    .catch((msgErro) => {
        status_pagamento.classList.remove('processando')
        status_pagamento.innerHTML = msgErro
        status_pagamento.classList.add('erro')
    })
})