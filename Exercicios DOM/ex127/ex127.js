const btn_fechar = document.querySelector('#btn_fechar')
const total_compra = document.querySelector('#total_compra')
const precos = [50, 120, 230]

btn_fechar.addEventListener('click', () => {
    const somar = precos.reduce((atu, ant) => {
        return atu + ant
    }, 0)

    total_compra.innerHTML = `R$ ${somar.toFixed(2)}`
})