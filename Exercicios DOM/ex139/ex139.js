const input_produto = document.querySelector('#input_produto')
const btn_adicionar = document.querySelector('#btn_adicionar')
const contador_total = document.querySelector('#contador_total')
const lista_produtos = document.querySelector('#lista_produtos')

const produtos = new Set()


btn_adicionar.addEventListener('click', () => {
    const produto = input_produto.value

    if(produtos.has(produto)){
        alert(`O produto ${produto} já está no carrinho`)
    } else if(produto === ''){
        alert('Digite algum produto para adicionar no carrinho')
    } else {
        produtos.add(produto)
        lista_produtos.innerHTML += `<li>${produto}</li> <br/>`
        contador_total.innerHTML = produtos.size
    }
})