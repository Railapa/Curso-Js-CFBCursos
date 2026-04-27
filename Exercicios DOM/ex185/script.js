const senha = document.querySelector('#senha')
const btnOlhinho = document.querySelector('#btnOlhinho')

btnOlhinho.addEventListener('click', () => {
    if(senha.type === 'password'){
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
})