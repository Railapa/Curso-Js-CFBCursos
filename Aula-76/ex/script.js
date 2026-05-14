const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#senha')
const btnLogin = document.querySelector('#btn-login')
const msgFeedback = document.querySelector('#msg-feedback')

const promessa = () => {
    let promise = new Promise((ok, erro) => {
        const loginUsuario = 'admin'
        const senhaUsuario = '1234'

        setTimeout(() => {
            if (usuario.value === loginUsuario && senha.value === senhaUsuario) {
                ok('Login Efetuado!')
            } else {
                erro('Usuario ou senha incorretos')
            }
        }, 2000)
    })

    promise.then((ret) => {
        msgFeedback.innerHTML = ret
    })

    promise.catch((ret) => {
        msgFeedback.innerHTML = ret
    })

    msgFeedback.innerHTML = 'Verificando...'
}

btnLogin.addEventListener('click', () => {
    promessa()
})