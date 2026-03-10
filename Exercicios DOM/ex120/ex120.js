const input_senha = document.querySelector('#input_senha')
const btn_validar = document.querySelector('#btn_validar')
const feedback_senha = document.querySelector('#feedback_senha')
const caracteresEspeciais = ["@", "#", "$", "%", "&", "*"];

btn_validar.addEventListener('click', () => {
    const senha = input_senha.value
    const letrasSenha = senha.split("")

    const senhaForte = letrasSenha.some((val) => {
        return caracteresEspeciais.includes(val)
    })

    if(senhaForte){
        feedback_senha.innerHTML = '✅ Senha Forte! Contém caracteres especiais.'
        feedback_senha.classList.add('forte')
    } else {
        feedback_senha.classList.remove('forte')
        feedback_senha.innerHTML = '⚠️ Senha Fraca! Adicione @, # ou $.'
        feedback_senha.classList.add('fraca')
    }
})