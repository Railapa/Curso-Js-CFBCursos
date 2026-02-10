const btn = document.querySelector('#btn-palavra')
const exibicao_palavra = document.querySelector('#exibicao-palavra')

const frase = "JavaScript é muito massa"
const frase_palavras = frase.split(' ')
const it_frase_palavras = frase_palavras[Symbol.iterator]()

btn.addEventListener('click', () => {
    exibicao_palavra.innerHTML = it_frase_palavras.next().value
})