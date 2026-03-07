const minuto_visor = document.querySelector('#minuto_visor')
const btn_ver = document.querySelector('#btn_ver')

btn_ver.addEventListener('click', () => {
    const data = new Date()
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos
    minuto_visor.innerHTML = minutos
})