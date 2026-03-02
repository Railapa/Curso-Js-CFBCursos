class Veiculo{
    constructor(nome, tipoCombustivel){
        this.nome = nome
        this.tipoCombustivel = tipoCombustivel
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Combustivel: ${this.tipoCombustivel}`)
    }

    mover(){
        console.log(`O veículo está se movendo...`)
    }
}

class Aviao extends Veiculo{
    constructor(nome, tipoCombustivel){
        super(nome, tipoCombustivel)
    }

    info(){
        super.info()
    }

    mover(){
        console.log(`O avião ${this.nome} está a descolar para voar!`)
    }
}

class Carro extends Veiculo{
     constructor(nome, tipoCombustivel){
        super(nome, tipoCombustivel)
    }

    info(){
        super.info()
    }

    mover(){
        console.log(`O carro ${this.nome} está a acelerar pelas estradas!`)
    }
}

const aviao = new Aviao('boeing', 'gasolina')
const carro = new Carro('savero', 'disel')

const veiculos = [aviao, carro]

veiculos.map((el) => {
    el.info()
})