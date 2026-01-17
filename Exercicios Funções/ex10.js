function carro(marca, modelo){
    this.marca = marca
    this.modelo = modelo
}

const meuCarro = new carro("BMW", "X6")

//console.log(meuCarro.marca)
//console.log(meuCarro.modelo)

function produto(nome, preco){
    this.nome = nome
    this.preco = preco

    this.detalhes = () => {
        console.log(this.nome)
        console.log(this.preco)
    }
}

const det = new produto('Mouse', 50)
//det.detalhes()

function calculadora(valor){
    this.valor = valor

    this.exibir = function(){
        let valor = 100
        console.log(valor)
        console.log(this.valor)
    }
}

const calc = new calculadora(50)
calc.exibir()