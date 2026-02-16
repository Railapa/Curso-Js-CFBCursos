const btn = document.querySelector('#btn-gerar')
const input_busca = document.querySelector('#input-busca')
const display_resultado = document.querySelector('#display-resultado') 

const estoque = new Map()
estoque.set('monitor', {preco: 800, cor: 'preto'})
estoque.set('mouse', {preco: 80, cor: 'vermelho'})
estoque.set('gabinete', {preco: 300, cor: 'branco'})
estoque.set('teclado', {preco: 250, cor: 'rosa'})

btn.addEventListener('click', () => {
    const busca = input_busca.value.toLowerCase()
    if(estoque.has(busca)){
        const produto = estoque.get(busca)
        display_resultado.innerHTML = `<div class='card-produto'>
                                        <h2>${busca.toUpperCase()}</h2>
                                        <p>Preço: ${produto.preco}</p>
                                        <p>Cor: ${produto.cor}</p>
                                       </div>
        `
    } else {
        display_resultado.innerHTML = `<p class="erro">Produto não encontrado!</p>`
    }
})