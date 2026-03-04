const numero = document.querySelector('.numero')
const btn_promessa = document.querySelector('#btn_promessa')

btn_promessa.addEventListener('click', (evt) => {
    numero.innerHTML = 'Processando...'
    promessa()
})

const promessa = () => {
    let promise = new Promise((verdadeiro, falso) => {
        let resultado = true
        let tempo = 1500
        setTimeout(() => {
            if (resultado) {
                verdadeiro('Deu certo')
            } else {
                falso('Deu errado')
            }

        }, tempo)
    })

    promise.then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })

    promise.catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add('erro')
        numero.classList.remove('ok')
    })

    numero.innerHTML = 'Esperando...'
}

