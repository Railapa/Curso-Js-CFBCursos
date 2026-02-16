class Personagem{
    constructor(nome, vida){
        this.nome = nome
        this.vida = vida
    }
    receberDano(quantidade){ 
        this.vida -= quantidade
        if(this.vida <= 0){
            console.log(`${this.nome} morreu!`)
        } else {
           console.log(`${this.nome} agora tem ${this.vida} de vida.`)
        }
    }
}

const personagem1 = new Personagem('Raí', 100)
personagem1.receberDano(100)
