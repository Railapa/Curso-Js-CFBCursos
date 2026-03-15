const res_titulo = document.querySelector('#res_titulo')
const in_texto = document.querySelector('#in_texto')
const btn_texto = document.querySelector('#btn_texto')
const in_cor = document.querySelector('#in_cor')
const btn_cor = document.querySelector('#btn_cor')

class Card{
    constructor(elemento){
        this.elemento = elemento
    }

    receberTitulo(titulo){
        return this.titulo = titulo
    }

    atualizarCor(novaCor) {
        this.elemento.style.backgroundColor = novaCor
    }
}

const cardHTML = document.querySelector('#preview_card')
const novoCard = new Card(cardHTML)

btn_texto.addEventListener('click', () => {
    res_titulo.innerHTML = novoCard.receberTitulo(in_texto.value)
})

btn_cor.addEventListener('click', () => {
    cardHTML.style.backgroundColor = novoCard.atualizarCor(in_cor.value)
})