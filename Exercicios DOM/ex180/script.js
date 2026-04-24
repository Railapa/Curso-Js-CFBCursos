const relogio = document.querySelector('#relogio')

const functionRelogio = () => {
    const data = new Date()

    let hours = data.getHours()
    hours = hours < 10 ? '0' + hours : hours

    let minutes = data.getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes

    let seconds = data.getSeconds()
    seconds = seconds < 10 ? '0' + seconds : seconds

    const relogioFormatado = `${hours}:${minutes}:${seconds}`
    relogio.innerHTML = relogioFormatado
}

const intervalo = setInterval(functionRelogio, 1000)