const data = new Date()

let dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()

let mes = data.getMonth() < 10 ? '0' + data.getMonth() : data.getMonth()

const dataDia = dia + '/' + mes + '/' + data.getFullYear()

const div_data = document.querySelector('#div_data')

div_data.innerHTML = dataDia

console.log(data.toLocaleDateString("pt-BR"))

// console.log(data.getDate()) - Dia do mes

// console.log(data.getDay()) - Dia da semana (numero)

// console.log(data.getFullYear()) - Ano com 4 digitos

// console.log(data.Hours()) - Horas

// console.log(data.getMilliseconds()) - Milisegundos

// console.log(data.Minutes()) - Minutos

// console.log(data.Mounth()) - Mes

// console.log(data.Seconds()) - Segundos

// console.log(data.getTime()) - Timestamp (milisegundos desde 1 de janeira de 1970, 00:00:00 UTC)

// console.log(data.Date.now()) - Timestamp (milisegundos desde 1 de janeira de 1970, 00:00:00 UTC)

// console.log(data.TimezonaOffset()) - Timezone da localidade

// console.log(setDate()) - Define um dia do mes para a data

// console.log(data.setMounth()) - Define um mes para a data

// console.log(data.setFullYear()) - Define um ano para a data 


// console.log(setHours()) - Define horas 

// console.log(setMinutes()) - Define minutos

// console.log(setSeconds()) - Define segundos 

// console.log(setMiliseconds()) - Define Milisegundos 


// console.log(data.toDate.String()) - Retorna somente a data 