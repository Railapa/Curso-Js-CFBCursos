const tempo_sessao = document.querySelector('#tempo_sessao')

let horas = 0
let minutos = 0
let segundos = 0

const contador = () => {
    segundos++ 

    if(segundos == 60){
        segundos = 0 
        minutos++
    } if(minutos == 60){
        minutos = 0
        horas++
    }

    const h = horas < 10 ? '0' + horas : horas 
    const m = minutos < 10 ? '0' + minutos : minutos 
    const s = segundos < 10 ? '0' + segundos : segundos 

    const hora_formatada = `${h}:${m}:${s}`

    tempo_sessao.innerHTML = hora_formatada
}

const intervalo = setInterval(contador, 1000)