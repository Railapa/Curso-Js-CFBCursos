const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')

const init = () => {
    carro.style = 'position: relative; left: 0px; width: 100px'
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null // Variavel para guardar o limite da direita

const move = (dir) => {
    if (dir > 0) { // indo para a DIREITA
        if (parseInt(carro.style.left) < tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima) // Para se bater na borda direita
        }
    } else if (dir < 0) { // Indo para a ESQUERDA
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima) // Para se bater na borda esquerda (0)
        }
    }


}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click', () => {
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener('click', () => {
    clearTimeout(anima)
    move(1)
})



// Garante que as propriedades de movimento sejam aplicadas assim que a pagina abrir 
window.addEventListener('load', init)
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})