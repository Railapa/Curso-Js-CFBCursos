const btn_carregar = document.querySelector('#btn_carregar')
const dados_jogador = document.querySelector('#dados_jogador')
const nome_player = document.querySelector('#nome_player')
const pontos_player = document.querySelector('#pontos_player')

const buscarJogador = () => {
    btn_carregar.innerHTML = 'Buscando Jogador...'
    return new Promise((ok, rej) => {
        setTimeout(() => {
            ok({
                nome: 'Raí',
                pontos: 1500
            })
        }, 2000)
    })
}

btn_carregar.addEventListener('click', () => {
    buscarJogador()

    .then((perfil) => {
        nome_player.innerHTML = perfil.nome
        pontos_player.innerHTML = perfil.pontos
        btn_carregar.innerHTML = 'Carregar Perfil'
    })
})