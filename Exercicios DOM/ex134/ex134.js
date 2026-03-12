const btn_reduce = document.querySelector('#btn_reduce')
const valor_final = document.querySelector('#valor_final')

const itensPedido = [
    { item: "Hambúrguer", qtd: 2, preco: 25 },
    { item: "Batata Frita", qtd: 1, preco: 15 },
    { item: "Refrigerante", qtd: 1, preco: 8 }
];
const frete = 10;

btn_reduce.addEventListener('click', () => {
    const valorTotal = itensPedido.reduce((atu, ant) => {
        const valorItem = ant.qtd * ant.preco
        return atu + valorItem
    },frete)

    valor_final.innerHTML = `R$ ${valorTotal.toFixed(2)}`
})