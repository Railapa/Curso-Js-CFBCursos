const btn = document.querySelector('#btn-escalar')
const campo = document.querySelector('#campo-futebol')
const input = document.querySelector('#nome-jogador')


btn.addEventListener('click', () => {
    const jogador = document.createElement('div')
    jogador.setAttribute('class', 'card-jogador')

    jogador.innerHTML = input.value
    campo.appendChild(jogador)

    const btnRemover = document.createElement('button') 
    btnRemover.setAttribute('class', 'btn-remover')
    btnRemover.innerHTML = 'Remover Jogador'
    jogador.appendChild(btnRemover)

    input.value = ''
    input.focus()

    btnRemover.addEventListener('click', () => {
        campo.removeChild(jogador)
    })
})