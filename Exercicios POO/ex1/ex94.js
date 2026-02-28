class Carro{
    constructor(p_marca, p_modelo){
        this.marca = p_marca
        this.modelo = p_modelo
    }
}

const carro1 = new Carro('Fiat', 'Uno')
const carro2 = new Carro('Volkswagen', 'Gol')

console.log(carro1.marca, carro1.modelo)
console.log(carro2.marca, carro2.modelo)