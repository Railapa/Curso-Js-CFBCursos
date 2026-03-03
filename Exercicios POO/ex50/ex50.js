const painel_sensores = document.querySelector('#painel_sensores')

class Sensor{
    constructor(nome, temperatura){
        this.nome = nome
        this.temperatura = temperatura
    }

    redenrizar(){
        const div = document.createElement('div')
        div.setAttribute('class', 'sensor-card')
        if(this.temperatura > 60){
            div.classList.add('alerta')
        } else {
            div.classList.add('normal')
        }
        painel_sensores.appendChild(div)
        div.innerHTML = `Sensor: ${this.nome} <br/> Temperatura ${this.temperatura}°C`
    }
}

let meusSensores = [new Sensor('Sensor1', 40), new Sensor('Sensor2', 85), new Sensor('Sensor3', 70), new Sensor('Sensor4', 30)]

meusSensores.map((el) => {
    el.redenrizar()
})