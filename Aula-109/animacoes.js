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

    // RECURSIVIDADE: A função agenda sua propria execução novamente
    // Apos 20 milisegundos, mantendo o movimento continuo
    anima = setTimeout(move, 20, dir)
}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click', () => {
    clearTimeout(anima)
    move(-1) // Inicia a primeira chamada da função para a esquerda
})

btn_direita.addEventListener('click', () => {
    clearTimeout(anima)
    move(1) // Inicia a primeira chamada da função para a direita
})

// Garante que as propriedades de movimento sejam aplicadas assim que a pagina abrir 
window.addEventListener('load', init())