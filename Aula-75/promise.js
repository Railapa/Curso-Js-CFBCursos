const numero = document.querySelector('.numero')

let promessa = new Promise((ok, erro) => {
    let tempo = 2000
    let resultado = true

    setTimeout(() => {
        if(resultado){
            ok('Deu Certo')
        } else {
            erro('Deu Errado')
        }
    }, tempo)
})

promessa.then((ret) => {
    numero.innerHTML = ret
    numero.classList.add('ok')
    numero.classList.remove('erro')
})

promessa.catch((ret) => {
    numero.innerHTML = ret
    numero.classList.add('erro')
    numero.classList.remove('ok')
})

numero.innerHTML = 'Processando...'