class Personagem{
    static personagensCriados = 0
    constructor(nome,nivel){
        this.nome = nome
        this.nivel = nivel
        Personagem.personagensCriados++
    }
}

class Mago extends Personagem{
    constructor(nome,nivel,mana){
        super(nome,nivel)
        this.mana = mana
    }
}

class Guerreiro extends Personagem{
    constructor(nome,nivel,forca){
        super(nome,nivel)
        this.forca = forca
    }
}

const mago1 = new Mago('Bruno', 10, 5)
console.log(mago1)

const guerreiro1 = new Guerreiro('Raí', 15, 100)
console.log(guerreiro1)

console.log(Personagem.personagensCriados)