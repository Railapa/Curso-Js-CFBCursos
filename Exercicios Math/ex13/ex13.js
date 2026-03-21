const valor_frete = document.querySelector('#valor_frete')
const total_compra = document.querySelector('#total_compra')
const btn_calcular = document.querySelector('#btn_calcular')

btn_calcular.addEventListener('click', () => {
    const frete = Math.floor(Math.random() * (50.75 - 10.50)) + 10.50
    valor_frete.innerHTML = frete

    const valor = frete + 250
    total_compra.innerHTML = Math.min(valor, 280)
})