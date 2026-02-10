const btn = document.querySelector('#btn-proximo')
const valorAtual = document.querySelector('#valor-atual')
const status = document.querySelector('#status-don')
const num = [5, 15, 25]

const it_num = num[Symbol.iterator]()

btn.addEventListener('click', () => {
    const resultado = it_num.next()
    valorAtual.innerHTML = resultado.value
    status.innerHTML = resultado.done
})