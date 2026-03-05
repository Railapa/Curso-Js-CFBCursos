const btn_registrar = document.querySelector('#btn_registrar')
const log_acesso = document.querySelector('#log_acesso')

btn_registrar.addEventListener('click', () => {
    let agora = new Date()
    let dia = agora.getDate() < 10 ? '0' + agora.getDate() : agora.getDate()
    let mes = agora.getMonth() + 1
    let ano = agora.getFullYear()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    log_acesso.innerHTML = `Acesso registrado em: ${dia}/${mes}/${ano} às ${horas}:${minutos}:${segundos}`
})