const btn_verificar = document.querySelector('#btn_verificar')
const status_msg = document.querySelector('#status')

btn_verificar.addEventListener('click', () => {
    const data = new Date()
    let horas = data.getHours()

    if(horas >= 0 && horas <= 6){
        status_msg.classList.add('alerta')
        status_msg.innerHTML = `Cuidado! É madrugada, vai descansar! 😴`
    } else {
        status_msg.classList.add('tranquilo')
        status_msg.innerHTML = 'Horário normal de funcionamento. 😊'
    }
})