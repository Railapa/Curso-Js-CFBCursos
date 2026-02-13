const input_user = document.querySelector('#user')
const input_senha = document.querySelector('#pass')
const btn = document.querySelector('#btn-entrar')
const msg = document.querySelector('#msg-login')

let usuario = new Map()
usuario.set("admin1", "1234")
usuario.set("rai", "dev2024")
usuario.set("admin2", "5678")
usuario.set("railapa", "dev2026")

const remover_classe = () => {
    msg.classList.remove('sucesso')
}

btn.addEventListener('click', () => {
    const user = input_user.value
    const senha = input_senha.value

    if (usuario.has(user)) {
        if (usuario.get(user) === senha) {
            msg.innerHTML = "Login bem sucedido!"
            msg.classList.add('sucesso')
        } else {
            remover_classe()
            msg.innerHTML = "Senha incorreta!"
            msg.classList.add('erro')
        }
    } else {
        remover_classe()
        msg.innerHTML = "Senha incorreta!"
        msg.classList.add('erro')
    }
})