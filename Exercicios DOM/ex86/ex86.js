const input_peca = document.querySelector('#input-peca')
const btn_buscar = document.querySelector('#btn-buscar')
const res_hardware = document.querySelector('#res-hardware')
const total_pecas = document.querySelector('#total-pecas')

let catalogo = new Map()
catalogo.set('processador', 'Intel i9')
catalogo.set('memória', '32GB DDR5')
catalogo.set('monitor', 'Sansung')

btn_buscar.addEventListener('click', () => {
    const valor_input = input_peca.value.toLowerCase()
    if(catalogo.has(valor_input)){
        res_hardware.innerHTML = catalogo.get(valor_input)
    } else {
        res_hardware.innerHTML = 'Componente não encontrado no sistema'
    }
    total_pecas.innerHTML = `Total de itens: ${catalogo.size}`
})