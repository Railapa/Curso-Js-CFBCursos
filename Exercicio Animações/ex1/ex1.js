const btn_subir = document.querySelector('#btn_subir')
const btn_descer = document.querySelector('#btn_descer')
const btn_parar = document.querySelector('#btn_parar')
const elevador = document.querySelector('#elevador')
const btn_13 = document.querySelector('#btn_13')
const btn_22 = document.querySelector('#btn_22')
let animação;


const moverEixoX = (direcao) => {
    let posicaoAtual = parseInt(elevador.style.left)
    let novaPosicao = posicaoAtual + (direcao * 5)
    elevador.style.left = `${novaPosicao}px`
}

const moverEixoY = (direcao) => {
    let posicaoAtual = parseInt(elevador.style.top)
    let novaPosicao = posicaoAtual + (direcao * 5)
    elevador.style.top = `${novaPosicao}px`
} 


btn_descer.addEventListener('click', () => {
    clearInterval(animação)
    animação = setInterval(moverEixoY, 80, 1)
})

btn_subir.addEventListener('click', () => {
    clearInterval(animação)
    animação = setInterval(moverEixoY, 80, -1)
})

btn_13.addEventListener('click', () => {
    clearInterval(animação)
    animação = setInterval(moverEixoX, 80, -1)
})

btn_22.addEventListener('click', () => {
    clearInterval(animação)
    animação = setInterval(moverEixoX, 80, 1)
})

btn_parar.addEventListener('click', () => {
    clearInterval(animação)
})