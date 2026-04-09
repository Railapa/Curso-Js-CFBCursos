const modal = document.querySelector('.modal')
const btn_close_modal = document.querySelector('.btn_close_modal')
const btn_ver_mais = document.querySelectorAll('.btn_ver_mais')

btn_close_modal.addEventListener('click', () => {
    modal.close()
})

const infoLutadores = {
    "IliaTopuria": {
        nome: 'Ilia "El Matador" Topuria',
        pais: 'Espanha / Georgia',
        cartel: '18/0'
    },

    "RenatoMoicano": {
        nome: 'Renato "Money" Moicano',
        pais: 'Brasil',
        cartel: '21/7'
    },

    "ConnorMcGreggor": {
        nome: 'Connor "The Notorious" McGreggor',
        pais: 'Irlanda',
        cartel: '22/6'
    }
}

const nome_modal = document.querySelector('.nome_modal')
const pais_modal = document.querySelector('.pais_modal')
const cartel_modal = document.querySelector('.cartel_modal')

btn_ver_mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.card')
        const lutador = cardPai.getAttribute('data-product')

        const dados = infoLutadores[lutador]

        nome_modal.innerHTML = dados.nome
        pais_modal.innerHTML = dados.pais
        cartel_modal.innerHTML = dados.cartel
        modal.showModal()
    })
})
