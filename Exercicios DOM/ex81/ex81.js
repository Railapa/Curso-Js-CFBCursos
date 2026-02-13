const input_id = document.querySelector('#input-id')
const btn = document.querySelector('#btn-consultar')
const msg = document.querySelector('#res-loja')
const totalItens = document.querySelector('#total-itens')

let precos = new Map()

precos.set(101, 45.50) // Teclado
precos.set(102, 25.00) // Rato
precos.set(103, 899.90) // Monitor

btn.addEventListener('click', () => {
    if(precos.has(Number(input_id.value))){
        msg.innerHTML = `Preço do produto selecionado: R$ ${precos.get(Number(input_id.value))}`
    } else {
        msg.innerHTML = 'Produto não encontrado'
    }
})

totalItens.innerHTML = `Temos ${precos.size} produtos cadastrados`