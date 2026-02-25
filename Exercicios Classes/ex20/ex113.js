class Personagem{
    constructor(nome, nivel){
        this.nome = nome
        this.nivel = nivel
        this.vida = 100
    }

    info = function(){
        console.log(`Nome: ${this.nome} \n Nível: ${this.nivel} \n Vida atual: ${this.vida}`)
    }
}

class Guerreiro extends Personagem{
    constructor(nome, nivel, forca){
        super(nome, nivel)
        this.forca = forca
    }

    atacar = function(){
        this.dano = (this.forca * this.nivel)
        console.log(`${this.nome} atacou e causou ${this.dano} de dano`)
    }

    receberDano = function(quantidade){
        this.vida -= quantidade
        if(this.vida <= 0){
            console.log('O guerreiro foi derrotado')
        }
    }
}

const guerreiro1 = new Guerreiro('Artur', 5, 10)
guerreiro1.info()
guerreiro1.atacar()
guerreiro1.receberDano(50)
guerreiro1.info()