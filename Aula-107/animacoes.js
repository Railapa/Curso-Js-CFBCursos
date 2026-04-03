const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const carro = document.querySelector('#carro')

const init = () => {
    carro.style = 'position: relative; left: 0px'
}

btn_esquerda.addEventListener('click', () => {
    let pos = parseInt(carro.style.left) 
    pos -= 10
    carro.style = `position: relative; left: ${pos}px`
})

btn_direita.addEventListener('click', () => {
    // Pega o valor atual do left (0px), converte para numero (0) e soma 10
    let pos = parseInt(carro.style.left) 
    pos += 10

    //Aplica o novo valor de volta ao elemento com a unidade 'px'
    carro.style = `position: relative; left: ${pos}px`
})

// Garante que as propriedades de movimento sejam aplicadas assim que a pagina abrir 
window.addEventListener('load', init())