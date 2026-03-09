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

const redenrizar = (listaExibir) => {
    lista_produtos.innerHTML = ''
    listaExibir.forEach((el) => {
        lista_produtos.innerHTML += `<div class="produto-item">
            <span>${el.nome}</span> 
            <span>R$ ${el.preco}</span>
        </div>`
    })
}

redenrizar(produtos)

btn_promo.addEventListener('click', () => {
    const promocao = produtos.filter((val) => {
        return val.promo == true
    })

    redenrizar(promocao)
})