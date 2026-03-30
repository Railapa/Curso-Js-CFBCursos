const lista_itens = document.querySelector('#lista_itens')
const total_display = document.querySelector('#total_display')
const btn = document.querySelector('#btn_processar')

const estoque = {
    camisas: 10,
    calcas: 4,
    meias: 20,
}

const quantidades = Object.values(estoque)

const nomes = Object.keys(estoque)

