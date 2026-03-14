const data_extenso = document.querySelector('#data_extenso')
const relogio_digital = document.querySelector('#relogio_digital')
const mensagem_dia = document.querySelector('#mensagem_dia')

let dias_array = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

let meses_array = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const data = new Date()

let dia = data.getDate()
let mes = data.getMonth()
const ano = data.getFullYear()
const day = data.getDay()
dia = dia < 10 ? '0' + dia : dia

const dataFormatada = `${dias_array[day]}, ${dia} de ${meses_array[mes]} de ${ano}`
data_extenso.innerHTML = dataFormatada

const relogio = () => {
    const data = new Date()

    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    horas = horas < 10 ? '0' + horas : horas 
    minutos = minutos < 10 ? '0' + minutos : minutos 
    segundos = segundos < 10 ? '0' + segundos : segundos 

    const horaFormatada = `${horas}:${minutos}:${segundos}`
    relogio_digital.innerHTML = horaFormatada

    if(horas < 12){
        mensagem_dia.innerHTML = 'Tenha um excelente dia!'
    } else if(horas < 18){
        mensagem_dia.innerHTML = 'Tenha uma excelente tarde!'
    } else {
        mensagem_dia.innerHTML = 'Tenha uma excelente noite!'
    }
}

const intervaloRelogio = setInterval(relogio, 1000)