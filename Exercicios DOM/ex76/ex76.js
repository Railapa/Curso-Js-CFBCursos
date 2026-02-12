let livros = ["HTML5", "CSS3", "JavaScript"]
const btnAdd = document.querySelector('#btn-add')
const btnRem = document.querySelector('#btn-rem')
const msg = document.querySelector('#status-biblioteca')
const listaLivros = document.querySelector('#lista-livros')

const atualizarTela = () => {
    listaLivros.innerHTML = livros
    msg.innerHTML = livros.length
}

btnAdd.addEventListener('click', () => {
    livros.push('Node.js')
    atualizarTela()
})

btnRem.addEventListener('click', () => {
    livros.shift()
    atualizarTela()
})