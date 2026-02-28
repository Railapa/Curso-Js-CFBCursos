class Animal{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`${this.nome} faz um som genérico`)
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome)
    }

    falar(){
        console.log(`${this.nome} diz: Au au!`)
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome)
    }

    falar(){
        console.log(`${this.nome} diz: Miau!`)
    }
}

class Passaro extends Animal{
    constructor(nome){
        super(nome)
    }

    falar(){
        console.log(`${this.nome} diz: Piu piu!`)
    }
}

const animal = new Animal('Bruno')
const cachorro = new Cachorro('Rex')
const gato = new Gato('Garfield')
const passaro = new Passaro('Bobo')

const lista_animais = [animal, cachorro, gato, passaro]

lista_animais.map((el) => {
    el.falar()
})