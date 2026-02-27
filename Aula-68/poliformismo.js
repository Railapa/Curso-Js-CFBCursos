class Carro {
    constructor(tipo, estagioTurbo) {
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
        console.log('--------------------')
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

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velMax = 300 + this.turbo.pot
        this.nome = 'Carro Especial'
    }

    info = function(){
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
1. O que é Polimorfismo?
É a capacidade de um mesmo método ter ações diferentes dependendo do objeto que o chama.

Geralmente ocorre em situações de herança, onde a classe pai tem um método (ex: info()) e a classe filha também possui um método com o mesmo nome, mas com um comportamento personalizado.

2. Como funciona na prática?
No exemplo do vídeo, o Professor Bruno cria um sistema de carros:

Classe Pai (Carro): Possui um método info() padrão que imprime as informações básicas.

Classe Filha (CarroEspecial): Estende a classe pai, mas define seu próprio método info().

Sobrescrita: Quando você chama C3.info(), o JavaScript executa a versão da classe filha, "escondendo" a versão da classe pai. Isso é o polimorfismo em ação.

3. O uso do super no Polimorfismo
O professor mostra que, dentro do método polimórfico da classe filha, você ainda pode invocar o comportamento original do pai usando super.info().

Isso permite que você aproveite a lógica base e apenas adicione ou modifique o que for necessário para o objeto especial.

4. Resumo Visual
Mesmo Nome: O método se chama info tanto no pai quanto no filho.

Comportamentos Diferentes: O pai imprime de um jeito, o filho imprime com Template Strings ou informações extras.

Seleção Automática: O sistema sabe qual método usar com base no tipo do objeto que você instanciou.
*/