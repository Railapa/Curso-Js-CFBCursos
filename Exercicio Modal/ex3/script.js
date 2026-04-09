const btn_ver_mais = document.querySelectorAll('.btn_ver_mais')
const modal = document.querySelector('.modal')
const btn_fechar_modal = document.querySelector('.btn_fechar_modal')

btn_fechar_modal.addEventListener('click', () => {
    modal.close()
})

const infoPizzas = {
    "Mussarella": {
        ingredientes: ['Molho de Tomate', 'Mussarela', 'Oregano'],
        preco: 'R$ 60,00',
        calorias: '220 Kcal Por fatia'
    },

    "Calabresa": {
        ingredientes: ['Molho de Tomate', 'Mussarela', 'Calabresa', 'Cebola'],
        preco: 'R$ 65,00',
        calorias: '260 Kcal Por faia'
    },

    "quatro_queijos": {
        ingredientes: ['Molho de Tomate', 'Mussarela', 'Gorgonzola', 'Catupiry', 'Paremesão'],
        preco: 'R$ 70,00',
        calorias: '310 Kcal Por fatia'
    }
}

const modal_ingredientes = document.querySelector('.modal_ingredientes')
const modal_preco = document.querySelector('.modal_preco')
const modal_calorias = document.querySelector('.modal_calorias')

btn_ver_mais.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card_pai = btn.closest('.menu_card')
        const nomePizza = card_pai.getAttribute('data-product')

        const dados = infoPizzas[nomePizza]

        modal_ingredientes.innerHTML = dados.ingredientes.join(', ')
        modal_preco.innerHTML = dados.preco
        modal_calorias.innerHTML = dados.calorias

        modal.showModal()
    })
})