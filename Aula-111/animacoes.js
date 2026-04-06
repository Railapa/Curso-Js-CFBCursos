const btn_rodar = document.querySelector('#btn_rodar')
const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')

const init = () => {
    carro.style = 'position: relative; left: 0px; width: 100px; height: 40px'
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
}

let anima = null
let tamMax = null // Variavel para guardar o limite da direita
let tamCarro = null
let dir = 0
let n1 = Math.floor(Math.random() * 255 + 1)
let n2 = Math.floor(Math.random() * 255 + 1)
let n3 = Math.floor(Math.random() * 255 + 1)

const move = () => {
    if(parseInt(carro.style.left) >= tamMax){
        dir = -1
    } else if(parseInt(carro.style.left) <= 0){
        dir = 1
    }

    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
    anima = setTimeout(move, 65)
}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima)
})

btn_rodar.addEventListener('click', () => {
    move()
})


// Garante que as propriedades de movimento sejam aplicadas assim que a pagina abrir 
window.addEventListener('load', init)
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener('keydown', (evt) => {
    if(evt.code === 'ArrowUp'){
        carro.style.width = parseInt(carro.style.width) + 10 + 'px'
        carro.style.height = parseInt(carro.style.height) + 10 + 'px'
    } else if (evt.code === 'ArrowDown'){
        carro.style.width = parseInt(carro.style.width) - 10 + 'px'
        carro.style.height = parseInt(carro.style.height) - 10 + 'px'
    }

    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})