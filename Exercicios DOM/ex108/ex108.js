const arCondicionado = {
    temperatura: 22,
    ligado: true,

    power: function(){
        if(this.ligado == false){
            this.ligado = true
        } else if (this.ligado == true){
            this.ligado = false
        }
    },
    
    ajustarTemp: function(valor){
        const novoValor = this.temperatura += valor
        if(novoValor >= 16 && novoValor <= 28){
            this.temperatura = `${novoValor}°C`
        } else {
            this.temperatura = 'Temperatura indisponivel'
        }
    },

    exibirStatus: function(){
        console.log(`Ligado: ${this.ligado}, Temperatura: ${this.temperatura}`)
    }
}

const arCondicionado1 = arCondicionado
const arCondicionado2 = arCondicionado
const arCondicionado3 = arCondicionado

arCondicionado1.power()
arCondicionado2.ajustarTemp(1)
arCondicionado3.exibirStatus()