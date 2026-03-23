const relogio = document.querySelector('#relogio')
const btn_ponto = document.querySelector('#btn_ponto')
const res_entrada = document.querySelector('#res_entrada')
const res_saida = document.querySelector('#res_saida')
const res_data = document.querySelector('#res_data')

const relogioPonto = () => {
    const data = new Date()

    let horas = data.getHours()
    horas = horas < 10 ? '0' + horas : horas

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos

    const relogioFormatado = `${horas}:${minutos}:${segundos}`

    relogio.innerHTML = relogioFormatado
}

const relogioIntervalo = setInterval(relogioPonto, 1000)

const dataRegistrada = () => {
    const data = new Date()

    let dia = data.getDate()
    dia = dia < 10 ? '0' + dia : dia

    let mes = data.getMonth() + 1
    mes = mes < 10 ? '0' + mes : mes

    let ano = data.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`

    res_data.innerHTML = dataFormatada
}

btn_ponto.addEventListener('click', () => {
    const data = new Date()

    let horas = data.getHours()
    horas = horas < 10 ? '0' + horas : horas

    let dataSaida = new Date()
    dataSaida.setHours(dataSaida.getHours() + 8)
    let horasSaida = dataSaida.getHours()

    horasSaida = horasSaida < 10 ? '0' + horasSaida : horasSaida

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos

    const relogioFormatado = `${horas}:${minutos}:${segundos}`
    const relogioFormatado2 = `${horasSaida}:${minutos}:${segundos}`

    res_entrada.innerHTML = relogioFormatado
    res_saida.innerHTML = relogioFormatado2

    dataRegistrada()
})

