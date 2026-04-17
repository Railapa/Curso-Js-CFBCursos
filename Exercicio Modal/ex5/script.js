const btn_mais = document.querySelectorAll('.btn_mais')
const btn_close = document.querySelector('.btn_close')
const modal = document.querySelector('.modal')

const infoLutadores = {
    "lutador1": {
        nome: 'Renato "Money" Moicano',
        nacionalidade: 'Brasileiro',
        idade: '36 anos',
        cartel: '21//7/1'
    },

    "lutador2": {
        nome: 'Ilia "El Matador" Topuria',
        nacionalidade: 'Espanhol/Georgiano',
        idade: '29 anos',
        cartel: '18/0'
    },

    "lutador3": {
        nome: 'Conor "The Notorious" McGregor',
        nacionalidade: 'Irlandes',
        idade: '34 anos',
        cartel: '22/6'
    }
}

const nome_modal = document.querySelector('.nome_modal')
const idade_modal = document.querySelector('.idade_modal')
const nacionalidade_modal = document.querySelector('.nacionalidade_modal')
const cartel_modal = document.querySelector('.cartel_modal')

btn_mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.card')
        const lutador = cardPai.getAttribute('data-lutador')

        const dados = infoLutadores[lutador]

        nome_modal.innerHTML = dados.nome
        idade_modal.innerHTML = dados.idade
        nacionalidade_modal.innerHTML = dados.nacionalidade
        cartel_modal.innerHTML = dados.cartel
        modal.showModal()
    })
})

btn_close.addEventListener('click', () => {
    modal.close()
})