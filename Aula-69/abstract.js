class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError('Está classe não pode ser instanciada')
        } if (this.ligar == undefined) {
            throw new TypeError('É obrigatorio implementar o metodo ligar')
        } if(this.desligar == undefined){
            throw new TypeError('É obrigatorio implementar o metodo desligar')
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = 'Normal'
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = 'Esportivo'
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = 'Super Esportivo'
        }


        this.velMax += this.turbo.pot
    }

    info = function () {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log('--------------------')
    }

    ligar() {
        this.ligado = true
    }
    desligar() {
        this.ligado = false
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 50
        } else if (e == 2) {
            this.pot = 75
        } else if (e == 3) {
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(tipo, estagioTurbo) {
        super(tipo, estagioTurbo)
        this.velMax = 300 + this.turbo.pot
        this.nome = 'Carro Especial'
    }

    info = function () {
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel.Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log('--------------------')
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(1)


c1.info()
c2.info()
c3.info()

/* 
1. O que é uma Classe Abstrata?
É uma classe que não pode ser instanciada (ou seja, você não pode dar um new nela diretamente).

Ela serve exclusivamente como uma classe base ou "pai" para outras classes herdarem suas características.

Exemplo real: Você pode ter uma classe Animal, mas você nunca vê um "animal" andando na rua; você vê um "Cachorro" ou um "Gato". Logo, Animal seria a classe abstrata (base) e Cachorro seria a classe concreta (real).

2. Como impedir a criação da classe (Simular o Abstract)
Para evitar que alguém crie um objeto da classe base por engano, o professor usa uma verificação dentro do construtor:

JavaScript
class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada diretamente!");
        }
    }
}
Se alguém tentar fazer new CarroPadrao(), o código dispara um erro proposital e para a execução.

3. Métodos Obrigatórios
O professor também ensina como "obrigar" as classes filhas a criarem certos métodos. Por exemplo, se todo carro deve ter os métodos ligar e desligar, você pode verificar no construtor da classe base se esses métodos foram criados nas filhas:

JavaScript
if (this.ligar === undefined) {
    throw new TypeError("É obrigatório implementar o método ligar!");
}
Isso garante que qualquer programador que use sua classe base no futuro não esqueça de implementar as funções essenciais.

📊 Resumo Visual:
Classe Abstrata: O "molde do molde". Serve apenas para organizar o que as outras classes devem ter.

Classe Concreta: É a classe que você realmente usa para criar objetos (new).
*/