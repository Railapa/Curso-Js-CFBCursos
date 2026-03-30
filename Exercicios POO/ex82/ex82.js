
const btn_cadastrar = document.querySelector('#btn_cadastrar')
const lista = document.querySelector('#lista')


btn_cadastrar.addEventListener('click', () => {
    const in_nome = document.querySelector('#nome').value
    const in_preco = document.querySelector('#preco').value

    const produtos = []

    produtos.push({
        nome: in_nome,
        preco: in_preco
    })


    produtos.forEach((el) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'produto')
        div.innerHTML = `Nome do Produto: ${el.nome} <br/> Preço do Produto: ${el.preco}`

        const btn_remover = document.createElement('button')
        btn_remover.innerHTML = 'Remover Produto'
        btn_remover.style.marginTop = '10px'
        btn_remover.style.padding = '5px'
        btn_remover.style.width = '200px'
        div.appendChild(btn_remover)

        btn_remover.addEventListener('click', () => {
            div.remove()
        })

        lista.appendChild(div)
    })
})