const produto = document.querySelector('#produto')
const preco = document.querySelector('#preco')
const btnAdicionar = document.querySelector('#btnAdicionar')
const listaItens = document.querySelector('#listaItens')
const valorTotal = document.querySelector('#valorTotal')

let total = 0
btnAdicionar.addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerHTML = `Produto: ${produto.value} <br/> Preço: R$ ${Number(preco.value).toFixed(2)}`
    listaItens.appendChild(li)
    valorTotal.innerHTML = total += Number(preco.value)
})