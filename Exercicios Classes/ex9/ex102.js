function Smartwatch(marca) {

    this.marca = marca
    this.passos = 0
    this.calorias = 0
    this.monitorando = false

    this.botaoTreino = function(){
        if (this.monitorando == false) {
            this.monitorando = true
        } else {
            this.monitorando = false
        }
    }

    this.caminhar = function(qtdPassos){
        if (this.monitorando == true) {
            this.passos += qtdPassos
            return this.calorias += (qtdPassos * 0.04)
        }
    }

    this.exibirResumo = function(){
        return console.log(`Marca: ${this.marca}, Total de passos: ${this.passos}, Calorias queimadas: ${this.calorias}`)
    }
}

const relogio = new Smartwatch('Apple')
relogio.botaoTreino()
relogio.caminhar(5000)
relogio.exibirResumo()