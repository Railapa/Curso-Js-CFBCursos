const modal = document.querySelector('.modal')
const btn_close_modal = document.querySelector('.btn_close_modal')

btn_close_modal.addEventListener('click', () => {
    modal.close()
})

const infoJogadores = {
    "PaulPogba": {
        nome: 'Paul Pogba',
        idade: '33 Anos',
        titulo: 'Copa do Mundo 2018'
    },

    "CR7": {
        nome: 'Cristiano Ronaldo',
        idade: '41 Anos',
        titulo: 'Champions League (5x)'
    },

    "Valverde": {
        nome: 'Frederico Valverde',
        idade: '27 Anos',
        titulo: 'Champions League (2x)'
    }
}

const btn_ver_mais = document.querySelectorAll('.btn_ver_mais')
const modal_nome = document.querySelector('.modal_nome')
const modal_idade = document.querySelector('.modal_idade')
const modal_titulo = document.querySelector('.modal_titulo')

btn_ver_mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.card')
        const jogadores = cardPai.getAttribute('data-jogador')

        const dados = infoJogadores[jogadores]

        modal_nome.innerHTML = dados.nome
        modal_idade.innerHTML = dados.idade
        modal_titulo.innerHTML = dados.titulo
        modal.show()
    })
})