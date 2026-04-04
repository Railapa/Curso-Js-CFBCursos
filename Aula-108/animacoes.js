const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')

const init = () => {
    carro.style = 'position: relative; left: 0px'
}

let anima = null

const move = (dir) => {
    // Pega a posição atual, soma (10 * dir) e aplica de volta
    // Se dir for 1, soma 10. Se dir for -1, subtrai 10
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
}

btn_parar.addEventListener('click', () => {
    clearInterval(anima)
})

btn_esquerda.addEventListener('click', () => {
    // Pega qualquer movimento atual antes de começar o novo
    clearInterval(anima)
    // Chama 'move' a cada 20ms passando a direção -1 
    anima = setInterval(move, 100, -1)
})

btn_direita.addEventListener('click', () => {
    clearInterval(anima)
    anima = setInterval(move, 100, 1)
})

// Garante que as propriedades de movimento sejam aplicadas assim que a pagina abrir 
window.addEventListener('load', init())