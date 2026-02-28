const arCondicionado = {
    temperatura: 22,
    ligado: true,

    power: function () {
        if (this.ligado == false) {
            this.ligado = 'desligado'
        } else if (this.ligado == true) {
            this.ligado = 'ligado'
        }
    },

    ajustarTemp: function (valor) {
        const novoValor = this.temperatura += valor
        if (novoValor >= 16 && novoValor <= 28) {
            this.temperatura = `${novoValor}°C`
        } else {
            this.temperatura = 'O ar condicionado não permite esse nivel de temperatura'
        }
    },

    exibirStatus: function () {
        console.log(` O ar condicionado está ${this.ligado} \n Temperatura: ${this.temperatura}`)
    }
}

const arcondicionado1 = arCondicionado
const arcondicionado2 = arCondicionado
const arcondicionado3 = arCondicionado

arcondicionado3.power()
arcondicionado1.ajustarTemp(10)
arcondicionado2.exibirStatus()