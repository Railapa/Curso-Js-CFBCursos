const pedido_input = document.querySelector('#pedido_input')
const btn_rastrear = document.querySelector('#btn_rastrear')
const status_delivery = document.querySelector('#status_delivery')

const verificarNumeroPedido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pedido_input.value == '456') {
                resolve({
                    id: 456,
                    item: "Combo House Monster + Batata"
                })
            } else {
                reject('Pedido não encontrado no sistema.')
            }
        }, 2000)
    })
}

const verificarMotoboy = (nomeDoItem) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`✓ O motoboy Carlos acabou de sair com o seu: ${nomeDoItem}!`)
        },2000)
    })
}

const entrega = async () => {
    status_delivery.className = 'painel buscando'
    status_delivery.innerHTML = 'Buscando...'

    try{
        const resNumero = await verificarNumeroPedido()
        status_delivery.innerHTML = resNumero.item
        status_delivery.className = 'painel PRODUTO-PRONTO'

        const resMotoboy = await verificarMotoboy(resNumero.item)
        status_delivery.innerHTML = resMotoboy
        status_delivery.className = 'painel saiu-entrega'
    } catch(erro) {
        status_delivery.innerHTML = erro
        status_delivery.className = 'painel erro'
    }
}

btn_rastrear.addEventListener('click', entrega)