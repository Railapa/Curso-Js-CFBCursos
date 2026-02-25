class Dispositivo{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar = function(){
        this.ligado = true
        this.ligado = 'Aparelho ligado'
    }
}

class Celular extends Dispositivo{
    constructor(nome, numero){
        super(nome)
        this.numero =  numero 
    }
}

const dispositivo2 = new Celular('Iphone', '9999-8888')
dispositivo2.ligar()
console.log(`Nome: ${dispositivo2.nome}`)
console.log(`Numero: ${dispositivo2.numero}`)
console.log(`Ligado: ${dispositivo2.ligado}`)