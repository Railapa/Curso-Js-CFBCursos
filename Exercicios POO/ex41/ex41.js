class Dispositivo {
    constructor() {
        this.ligado = false
        if (this.constructor === Dispositivo) {
            throw new TypeError('Essa classe não pode ser instanciada.')
        }

        if (this.ligar === undefined) {
            throw new TypeError('É obrigatorio implementar o metodo ligar. ')
        }
        if (this.reiniciar === undefined) {
            throw new TypeError('É obrigatorio implementar o metodo reiniciar. ')
        }
        
    }

    status(){
        console.log(`O dispositivo está ${this.ligado}`)
    }

}

class Smartphone extends Dispositivo {
    constructor() {
        super()
    }

    ligar() {
        this.ligado = true
        console.log(`Smartphone inicializando...`)
    }

    reiniciar() {
        console.log("Smartphone reiniciando...");
    }
}

class Televisao extends Dispositivo {
    constructor() {
        super()
    }

    ligar() {
        this.ligado = true
        console.log('TV Ligada no último canal.')
    }
}

const smartphone = new Smartphone()
smartphone.ligar()
smartphone.status()
smartphone.reiniciar()