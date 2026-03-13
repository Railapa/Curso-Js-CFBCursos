const in_senha = document.querySelector('#in_senha')
const btn_entrar = document.querySelector('#btn_entrar')
const resultado = document.querySelector('#resultado')

const login = () => {
    resultado.innerHTML = 'Verificando...'
    return new Promise((resulte, reject) => {
        setTimeout(() => {
            if(in_senha.value === '123'){
                resulte('Acesso Permitido! ✅')
            } else {
                reject('Senha Incorreta! ❌')
            }
        }, 2000)
    })
}

btn_entrar.addEventListener('click', () => {
    login()
    .then((msgSucesso) => {
        resultado.innerHTML = msgSucesso
    })

    .catch((msgErro) => {
        resultado.innerHTML = msgErro
    })
})