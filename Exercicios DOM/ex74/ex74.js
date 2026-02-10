const precos = [12, 25, 10]
const btn = document.querySelector('#btn-fechar-pedido')
const msg = document.querySelector('#total-pedido')

btn.addEventListener('click', () => {
    const precosSoma = precos.reduce((ant, atu) => {
        return ant + atu 
    }, 5)

    msg.innerHTML = `Total: R$ ${precosSoma.toFixed(1)}`
})