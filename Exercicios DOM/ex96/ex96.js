class Heroi{
    constructor(pNome, pPoder, pNivel){
        this.nome = pNome
        this.poder = pPoder
        this.nivel = pNivel
    }

    falar(){
        console.log(`Olá eu sou o ${this.nome}`)
    }

    treinar(){
        return this.nivel += 5
    }
}

const Heroi1 = new Heroi('Superman', 'Voo', 100)
Heroi1.falar()
console.log(Heroi1.treinar())