const senha = [...document.querySelectorAll('.campo-senha')]
const btn = document.querySelector('#btn-validar')
const resultado = document.querySelector('#feedback-senha')

btn.addEventListener('click', () => {
    const senhaValida = senha.every((el) => {
        return el.value.length >= 6
    })

    if(senhaValida){
        resultado.innerHTML = 'Senha Válida!'
        resultado.classList.add('sucesso')
    } else {
        resultado.innerHTML = 'Erro: Todas as senhas precisam de 6+ caracteres.'
        resultado.classList.add('erro')
    }
})