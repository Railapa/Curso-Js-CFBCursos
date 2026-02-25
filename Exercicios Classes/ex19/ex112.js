class Maquina{
    constructor(nome, combustivel){
        this.nome = nome
        this.combustivel = combustivel
    }

    status = function(){
        console.log(this.nome)
        console.log(this.combustivel = `Combustivel restante: ${this.combustivel}`)
        
    }
}

class Escavadeira extends Maquina{
    constructor(nome, combustivel, capacidadeCarga){
        super(nome, combustivel)
        this.cargaAtual = 0
        this.capacidadeCarga = capacidadeCarga
    }

    cavar = function(quantidade){
        if(this.combustivel > 10){
            this.cargaAtual += quantidade
            this.combustivel -= 10
        } else {
            console.log(this.combustivel = `Combustivel baixo`)
            
        }
    }
}

const escavadeira1 = new Escavadeira('Escavadeira', 50, 100)
escavadeira1.cavar(30)
escavadeira1.cavar(30)
escavadeira1.status()
console.log(escavadeira1.cargaAtual)