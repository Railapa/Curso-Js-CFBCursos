const msg_login = document.querySelector('#msg_login')
const btn_login = document.querySelector('#btn_login')
const in_usuario = document.querySelector('#in_usuario')

const login = () => {
    msg_login.innerHTML = 'Verificando Usuario...'

    return new Promise((ok,rej) => {
        setTimeout(() => {
            if(in_usuario.value == 'Admin'){
                ok('Login Realizado')
            } else {
                rej('Usuario incorreto')
            }
        }, 2000)
    })
}

btn_login.addEventListener('click', () => {
    login()

    .then((msgOk) => {
        msg_login.innerHTML = msgOk
    })

    .catch((msgErro) => {
        msg_login.innerHTML = msgErro
    })
})