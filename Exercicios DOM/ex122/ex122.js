class Celular{
    constructor(marca, modelo){
        this.marca = marca 
        this.modelo = modelo 
    }
}

class Smartphone extends Celular{
    constructor(marca, modelo, ram){
        super(marca, modelo)
        this.ram = ram
    }
}

const celular1 = new Celular('Iphone', '16',)
console.log(celular1)

const celular2 = new Smartphone('Sansung', 'S24', '120')
console.log(celular2)