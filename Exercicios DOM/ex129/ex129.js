const btn_estoque = document.querySelector('#btn_estoque')
const valor_total = document.querySelector('#valor_total')

const estoque = [
    { item: "Teclado", qtd: 10, preco: 150 },
    { item: "Mouse", qtd: 20, preco: 80 },
    { item: "Monitor", qtd: 5, preco: 900 }
]

btn_estoque.addEventListener('click', () => {
    const investido = estoque.reduce((atu, ant) => {
        const valorItem = ant.qtd * ant.preco
        return atu + valorItem
    },0)

    valor_total.innerHTML = `R$ ${investido.toFixed(2)}`
})