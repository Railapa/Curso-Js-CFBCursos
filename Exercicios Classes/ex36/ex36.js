class Veiculo{
    constructor(nome){
        this.nome = nome
    }

    info = function(){
        return this.nome
    }
}

class CarroEsportivo extends Veiculo{
    constructor(nome){
        super(nome)
    }

    info = function(){
        console.log(`Carro Esportivo: ${this.nome} | Status: Turbo Ativado`)
    }
}

class Caminhao extends Veiculo{
    constructor(nome){
        super(nome)
    }

    info = function(){
        console.log(`Caminhão: ${this.nome} | Status: Carga Pesada`)
    }
}

Veiculo.prototype.buzinar = function(){
    console.log(`${this.nome} fez: Beep Beep!`)
}

const v1 = new CarroEsportivo('Ferrari')
const v2 = new Caminhao('Volvo')

const veiculos = [v1, v2]

veiculos.map((el) => {
    el.info()
    el.buzinar()
})