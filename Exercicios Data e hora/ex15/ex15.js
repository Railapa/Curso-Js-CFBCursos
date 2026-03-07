const btn_checar = document.querySelector('#btn_checar')
const msg_status = document.querySelector('#msg_status')

btn_checar.addEventListener('click', () => {
    const data = new Date()
    let horas = data.getHours()

    if(horas >= 8 && horas <= 10){
        msg_status.classList.add('pico')
        msg_status.innerHTML = '⚠️ TRÁFEGO ALTO: Servidores sobrecarregados!'
    } else if (horas >= 17 && horas <= 19){
         msg_status.classList.add('pico')
        msg_status.innerHTML = '⚠️ TRÁFEGO ALTO: Servidores sobrecarregados!'
    } else {
        msg_status.classList.add('normal')
        msg_status.innerHTML = '✅ TRÁFEGO NORMAL: Navegação fluida.'
    }
})