class Personagem {
    constructor(nome) {
        this.nome = nome
        this.vida = 100
        if (this.constructor === Personagem) {
            throw new TypeError('Essa classe não pode ser instanciada')
        }
        
        if (this.atacar === undefined || this.defender === undefined) {
            throw new TypeError('O metodo atacar e defender deve ser implementado na classe filha');
        }
    }

    morrer() {
        console.log(`${this.nome} foi derrotado e renascerá no ponto inicial.`)
    }
}

class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome)
    }

    atacar() {
        console.log(`O Guerreiro ${this.nome} atacou com a espada! (Dano: 20)`)
    }

    defender() {
        this.vida += 15
        console.log(`O Guerreiro ${this.nome} usou o escudo! (Defesa: 15)`)
    }
}

class Mago extends Personagem {
    constructor(nome) {
        super(nome)
    }

    atacar() {
        console.log(`O Mago ${this.nome} lançou uma bola de fogo! (Dano: 35)`)
    }

    defender() {
        this.vida += 5
        console.log(`O Mago ${this.nome} criou uma barreira mágica! (Defesa: 5)`)
    }
}

class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome)
    }
}

const g1 = new Guerreiro('Aragorn')
const m1 = new Mago('Gandalf')

const lista_personagens = [g1, m1]

lista_personagens.map((el) => {
    el.atacar()
    el.defender()
})

const heroiErro = new Arqueiro("Legolas")