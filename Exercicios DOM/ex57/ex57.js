const usuarios = ["Giovanna", "Bruno", "Ana", "Carlos", "Maria"]
const inputNome = document.querySelector('#input-user')
const btn = document.querySelector('#btn-login')
const resultado = document.querySelector('#msg-login')

btn.addEventListener('click', () => {
    const nomeNaLista = usuarios.find((el, ind) => {
        return el.toUpperCase() == inputNome.value.toUpperCase()
    })

    if(nomeNaLista){
        resultado.innerHTML = `Bem-vindo, ${nomeNaLista}! Acesso concedido`
    } else {
        resultado.innerHTML = `Usuário não encontrado. Tente novamente`
    }

    inputNome.value = ''
    inputNome.focus()
})