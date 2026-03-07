const visor_segundos = document.querySelector('#visor_segundos')
const btn_capturar = document.querySelector('#btn_capturar')

btn_capturar.addEventListener('click', () => {
    const data = new Date()
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos
    visor_segundos.innerHTML = segundos
})