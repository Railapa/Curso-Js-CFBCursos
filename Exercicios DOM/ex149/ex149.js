const res_filter = document.querySelector('#res_filter')
const btn_filter = document.querySelector('#btn_filter')

const produtos = [
    { nome: 'Teclado', preco: 45 },
    { nome: 'Monitor', preco: 150 },
    { nome: 'Rato', preco: 20 },
    { nome: 'Auscultadores', preco: 80 },
    { nome: 'Tapete Mouse', preco: 15 }
]

btn_filter.addEventListener('click', () => {
    res_filter.innerHTML = ''
    const filtrarProdutos = produtos.filter((val) => {
        if(val.preco <= 50){
            return true
        } else {
            return false
        }
    })

    if(filtrarProdutos){
        filtrarProdutos.map((el) => {
            res_filter.innerHTML += `Produto: ${el.nome}, Preço: R$${el.preco} <br/>`
        })
    } 
})