const btn_limpar = document.querySelector('#btn_limpar')
const contagem = document.querySelector('#contagem')
const lista_limpa = document.querySelector('#lista_limpa')

const nomesSujos = ["Ana", "Pedro", "Ana", "Maria", "Pedro", "João"]

btn_limpar.addEventListener('click', () => {
    const nomes = new Set(nomesSujos)
    contagem.innerHTML = nomes.size
    lista_limpa.innerHTML = ''
    nomes.forEach((el) => {
        lista_limpa.innerHTML += `<li>${el}</li> <br/>`
    })
})