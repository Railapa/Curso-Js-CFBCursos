const btnStart = document.querySelector('#btnStart')
const btnStop = document.querySelector('#btnStop')
const visor = document.querySelector('#visor')
const btnZerar = document.querySelector('#btnZerar')

let tempo = 0
let cronometro;

btnStart.addEventListener('click', () => {
    clearInterval(cronometro)

    cronometro = setInterval(() => {
        tempo++
        visor.innerHTML = tempo
    }, 1000)
})

btnStop.addEventListener('click', () => {
    clearInterval(cronometro)
})

btnZerar.addEventListener('click', () => {
    clearInterval(cronometro)
    tempo = 0
    visor.innerHTML = tempo
})