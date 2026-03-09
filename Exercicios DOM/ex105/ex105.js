const input_preco = document.querySelector('#input_preco')
const btn_filtrar_preco = document.querySelector('#btn_filtrar_preco')
const btn_promo = document.querySelector('#btn_promo')
const btn_limpar = document.querySelector('#btn_limpar')
const lista_produtos = document.querySelector('#lista_produtos')

const produtos = [
    { nome: "Mouse Gamer", preco: 150, promo: true },
    { nome: "Teclado Mecânico", preco: 400, promo: false },
    { nome: "Monitor 24'", preco: 900, promo: true },
    { nome: "Headset USB", preco: 250, promo: false },
    { nome: "Placa de Vídeo", preco: 2500, promo: true }
];

const renderizar = (listaExibir) => {
    lista_produtos.innerHTML = ''
    listaExibir.forEach((el) => {
        lista_produtos.innerHTML += `<div class='produto-item'>
            <span>${el.nome}</span>
            <span>$${el.preco}</span>
        </div>`
    })
}

renderizar(produtos)

btn_promo.addEventListener('click', () => {
    const produtosPromo = produtos.filter((val) => {
        return val.promo === true
    })

    renderizar(produtosPromo)
})

btn_limpar.addEventListener('click', () => {
    renderizar(produtos)
})

btn_filtrar_preco.addEventListener('click', () => {
    const precoMaximo = Number(input_preco.value)
    if(precoMaximo > 0){
        const produtosBaratos = produtos.filter((val) => {
            return val.preco <= precoMaximo
        }) 
        renderizar(produtosBaratos)
    } else {
        alert('Por favor, digite um valor maior que zero.')
    }
})