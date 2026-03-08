const btn_acessar = document.querySelector('#btn_acessar')
const status_acesso = document.querySelector('#status_acesso')

btn_acessar.addEventListener('click', () => {
    const data = new Date()

    let hora = data.getHours()
    let dia = data.getDay()

    let diaUtil = (dia >= 1 && dia <= 5)
    let horarioComercial = (hora >= 8 && hora < 18)

    if(diaUtil && horarioComercial){
        status_acesso.innerHTML = 'Acesso Liberado'
        status_acesso.classList.add('liberado')
    } else {
        status_acesso.innerHTML = 'Acesso Bloqueado'
        status_acesso.classList.add('bloqueado')
    }
})