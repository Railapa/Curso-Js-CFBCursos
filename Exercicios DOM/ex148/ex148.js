const in_sabor = document.querySelector('#in_sabor')
const btn_pedir = document.querySelector('#btn_pedir')
const status_pedido = document.querySelector('#status_pedido')
const ficha_pedido = document.querySelector('#ficha_pedido')
const res_sabor = document.querySelector('#res_sabor')
const res_tempo = document.querySelector('#res_tempo')
const res_valor = document.querySelector('#res_valor')

const pedirPizza = () => {
    status_pedido.innerHTML = 'Verificando o seu pedido...'
    return new Promise((ok,rej) => {
        setTimeout(() => {
            if(in_sabor.value == 'Calabresa'){
                ok({
                    nome: "Calabresa", 
                    tempo: "20 min", 
                    preco: 45.00
                })
            } else {
                rej('Infelizmente, não temos esse sabor no cardapio.')
            }
        }, 2000)
    })
}

btn_pedir.addEventListener('click', () => {
    pedirPizza()
    
    .then((msgOk) => {
        ficha_pedido.style.display = 'block'
        res_sabor.innerHTML = msgOk.nome
        res_tempo.innerHTML = msgOk.tempo
        res_valor.innerHTML = `${msgOk.preco.toFixed(2)}`
    })

    .catch((msgErro) => {
        status_pedido.innerHTML = msgErro
    })
})