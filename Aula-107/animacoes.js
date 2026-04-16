const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const carro = document.querySelector('#carro')

 const init = () => {
    carro.style = 'position: relative; left: 0px'
 }

 btn_esquerda.addEventListener('click', () => {
    let pos = parseInt(carro.style.left)
    carro.style = `position: relative; left: ${pos -= 10}px`
 })

 btn_direita.addEventListener('click', () => {
    let pos = parseInt(carro.style.left)
    carro.style = `position: relative; left: ${pos += 10}px`
 })

window.addEventListener('load', init)