const numero = document.querySelector('.numero')

let promise = new Promise((verdadeiro, falso) => {
    let resultado = true
    let tempo = 2000
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

numero.innerHTML = 'Processando...'