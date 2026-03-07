const data_extenso = document.querySelector('#data_extenso')
const relogio_digital = document.querySelector('#relogio_digital')
const mensagem_dia = document.querySelector('#mensagem_dia')

let dias_array = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

let meses_array = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


const data_completa = () => {
    const data =  new Date()
    
    let dia = data.getDate()
    dia = dia < 10 ? '0' + dia : dia

    let day = data.getDay()

    let mes = data.getMonth()

    let ano = data.getFullYear()

    const data_formatada = `${dias_array[day]}, ${dia} de ${meses_array[mes]} de ${ano}`

    data_extenso.innerHTML = data_formatada
}
data_completa()

const relogio = () => {
    const data = new Date()
    
    let horas = data.getHours()
    horas = horas < 10 ? '0' + horas : horas
    
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos
    
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos
    
    const hora_formatada = `${horas}:${minutos}:${segundos}`
    relogio_digital.innerHTML = hora_formatada

    if(horas < 12){
        mensagem_dia.innerHTML = 'Tenha um excelente dia!'
    } else if (horas < 18){
        mensagem_dia.innerHTML = 'Aproveite sua tarde!'
    } else {
        mensagem_dia.innerHTML = 'Tenha uma ótima noite!'
    }
}
const intervalo = setInterval(relogio, 1000)

