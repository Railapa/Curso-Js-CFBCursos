const btn_verificar = document.querySelector('#btn_verificar')
const banner_estacao = document.querySelector('#banner_estacao')

btn_verificar.addEventListener('click', () => {
    let data = new Date()
    let mes = data.getMonth()

    if(mes == 0 || mes == 11){
        banner_estacao.innerHTML = 'Estamos no Verão!☀️'
        banner_estacao.classList.add('verao')
    } else if(mes > 4 && mes < 8){
        banner_estacao.innerHTML = 'Estamos no Inverno❄️'
        banner_estacao.classList.add('inverno')
    } else {
        banner_estacao.innerHTML = 'Estação padrão. Aproveite o dia🌿'
        banner_estacao.classList.add('padrao')
    }
})