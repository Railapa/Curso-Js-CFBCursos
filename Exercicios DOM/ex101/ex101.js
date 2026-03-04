const prod_nome = document.querySelector('#prod_nome')
const prod_preco = document.querySelector('#prod_preco')
const btn_add = document.querySelector('#btn_add')
const lista_carrinho = document.querySelector('#lista_carrinho')
const valor_total = document.querySelector('#valor_total')

const produtos = []

const atualizarInterface = () => {
    lista_carrinho.innerHTML = '' // Limpa a lista antes de redesenhar
    let somaTotal = 0 // Criamos a soma FORA do loop para acumular

    produtos.map((item) => {
        // 1. Criar o elemento visual
        const li = document.createElement('li')
        li.innerHTML = `<span>${item.nome}</span> <span>R$ ${item.preco.toFixed(2)}</span>`
        lista_carrinho.appendChild(li)

        // 2. Acumular o valor
        somaTotal += item.preco // Soma o preço deste item ao total
    })

    // 3. Atualizar o visor do total na tela
    valor_total.innerHTML = somaTotal.toFixed(2)
}

btn_add.addEventListener('click', () => {
    if (prod_nome.value !== '' && prod_preco.value !== '') {
        // Criamos um OBJETO único para o produto
        const novoProduto = {
            nome: prod_nome.value,
            preco: Number(prod_preco.value) // Garantimos que é um número
        }

        produtos.push(novoProduto) // Adicionamos o objeto ao array
        atualizarInterface() // Chamamos a função para atualizar a tela

        // Limpeza dos campos
        prod_nome.value = ''
        prod_preco.value = ''
        prod_nome.focus()
    } else {
        alert("Preencha todos os campos!")
    }
})