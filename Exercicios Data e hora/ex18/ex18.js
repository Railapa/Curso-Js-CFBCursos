const btn_registrar = document.querySelector('#btn_registrar')
const res_data = document.querySelector('#res_data')
const res_hora = document.querySelector('#res_hora')

const relogio = () => {
    const data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    const ano = data.getFullYear()

    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes

    res_data.innerHTML = `${dia}/${mes}/${ano}`

    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    horas = horas < 10 ? '0' + horas : horas
    minutos = minutos < 10 ? '0' + minutos : minutos
    segundos = segundos < 10 ? '0' + segundos : segundos

    const horaFormatada = `${horas}:${minutos}:${segundos}`
    res_hora.innerHTML = horaFormatada
}


btn_registrar.addEventListener('click', () => {
    relogio()
    const intervalo = setInterval(relogio, 1000)
})
