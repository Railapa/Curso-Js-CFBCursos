const opcao = [...document.querySelectorAll('.check-opt')]
const btn_cadastrar = document.querySelector('#btn_cadastrar')
const msg_validacao = document.querySelector('#msg_validacao')

btn_cadastrar.addEventListener('click', () => {
    const selecionado = opcao.some((val) => {
        return val.checked === true
    })

    if(selecionado){
        btn_cadastrar.classList.remove('btn-bloqueado')
        btn_cadastrar.classList.add('btn-liberado')
        msg_validacao.innerHTML = 'opção selecionada!'
    }
})