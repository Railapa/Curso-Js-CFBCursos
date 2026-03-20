const txt_desconto = document.querySelector('#txt_desconto')
const preco_final = document.querySelector('#preco_final')
const btn_gerar = document.querySelector('#btn_gerar')

btn_gerar.addEventListener('click', () => {
    const desconto = Math.floor(Math.random() * 26 + 5)
    txt_desconto.innerHTML = desconto

    const preçoComDesconto = Math.floor((149.90 * desconto) / 100)

    preco_final.innerHTML =  Math.floor(149.90 - preçoComDesconto).toFixed(2)
})