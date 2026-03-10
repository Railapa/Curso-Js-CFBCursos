const btn_gerar = document.querySelector('#btn_gerar')
const confirmacao = [...document.querySelectorAll('.confirmacao')]

const validarBotao = () => {
    const checkbox = confirmacao.every((val) => {
        return val.checked === true
    })

    if(checkbox){
        btn_gerar.classList.remove('desativado')
        btn_gerar.classList.add('ativado')
        btn_gerar.disabled = false
    } else {
        btn_gerar.classList.remove('ativado')
        btn_gerar.classList.add('desativado')
        btn_gerar.disabled = true
    }
}

confirmacao.map((el) => {
    el.addEventListener('change', validarBotao)
})