const user_input = document.querySelector('#user_input')
const btn_login = document.querySelector('#btn_login')
const status_login = document.querySelector('#status_login')

const promessa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user_input.value = 'railapa') {
                resolve('Login efetuado!')
            } else {
                reject('Login invalido')
            }
        }, 2000)
    })
}

const login = async () => {
    status_login.innerHTML = 'Verificando...'
    status_login.className = 'loading painel'

    try {
        const res = await promessa()
        status_login.innerHTML = res
        status_login.className = 'sucesso painel'
    } catch (erro) {
        status_login.innerHTML = erro
        status_login.className = 'erro painel'
    }
}

btn_login.addEventListener('click', login)