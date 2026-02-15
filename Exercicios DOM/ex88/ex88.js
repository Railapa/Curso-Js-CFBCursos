const btn = document.querySelector('#btn-proximo')
const txt_numero = document.querySelector('#txt-numero')
const numeros = [10, 20, 30]
let it_numeros = numeros[Symbol.iterator]()

btn.addEventListener('click', () => {
    const next_it_numeros = it_numeros.next()
    if(next_it_numeros.done){
        txt_numero.innerHTML = 'Fim dos numeros'
    } else {
        txt_numero.innerHTML = next_it_numeros.value
    }
})