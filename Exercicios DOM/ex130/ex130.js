const lista_promocao = document.querySelector('#lista_promocao')
const btn_filter = document.querySelector('#btn_filter')

const produtos = [
    { nome: "Aspirina", promo: true, preco: 15.00 },
    { nome: "Vitamina C", promo: false, preco: 25.00 },
    { nome: "Shampoo", promo: true, preco: 12.50 },
    { nome: "Protetor Solar", promo: false, preco: 45.00 }
]

const renderizar = (listaExibir) => {
    lista_promocao.innerHTML = ''
    listaExibir.map((el) => {
        lista_promocao.innerHTML += `<div>
            <span>${el.nome}</span>
            <span>$${el.preco}</span>
        </div>`
    })
}

renderizar(produtos)

btn_filter.addEventListener('click', () => {
    const promocao = produtos.filter((val) => {
        return val.promo === true
    })

    renderizar(promocao)
})