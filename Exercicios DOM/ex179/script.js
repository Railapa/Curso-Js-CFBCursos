const numero = document.querySelector('#numero')
const btnMenos = document.querySelector('#btnMenos')
const btnMais = document.querySelector('#btnMais')

let contador = 0
btnMais.addEventListener('click', () => {
    if (contador < 10) {
        contador++
        atualizarTela()
    }
})

btnMenos.addEventListener('click', () => {
    if(contador <= 10 && contador > 0){
        contador--
        atualizarTela()
    }
})


const atualizarTela = () => {
    numero.textContent = contador
    if (contador === 10) {
        numero.style.color = 'red'
        btnMais.disabled = true
    } else {
        numero.style.color = '#2d3436'
        btnMais.disabled = false
    }
}