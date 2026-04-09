const modal = document.querySelector('.modal')
const btn_close_modal = document.querySelector('.btn_close_modal')
const btn_ver_mais = document.querySelectorAll('.btn_ver_mais')

btn_close_modal.addEventListener('click', () => {
    modal.close()
})


const infoMacs = {
    "bigMac": {
        nome: 'Big Mac',
        preco: 'R$ 20,00',
        ingredientes: ['Pão', 'Carne', 'Molho', 'Queijo', 'Salada',]
    },

    "CheddarMacMelt": {
        nome: 'Cheddar MacMelt',
        preco: 'R$ 22,00',
        ingredientes: ['Pão Autraliano', 'Carne', 'Molho de Cheddar', 'Cebola Caramelizada',]
    },

    "MacFish": {
        nome: 'Mac Fish',
        preco: 'R$ 18,00',
        ingredientes: ['Pão', 'Peixe Milanesa', 'Alface Americano', 'Molho',]
    }
}


const modal_nome = document.querySelector('.modal_nome')
const modal_preco = document.querySelector('.modal_preco')
const modal_ingredientes = document.querySelector('.modal_ingredientes')

btn_ver_mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.menu_card')
        const hamburguer = cardPai.getAttribute('data-product')

        const dados = infoMacs[hamburguer]

        modal_nome.innerHTML = dados.nome
        modal_preco.innerHTML = dados.preco
        modal_ingredientes.innerHTML = dados.ingredientes.join(', ')
        modal.showModal()
    })
})