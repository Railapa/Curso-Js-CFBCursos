class Robo{
    constructor(nome){
        this.nome = nome
        this.energia = 100
    }
}

Robo.prototype.bracos = 2

Robo.prototype.trabalhar = function(){
    this.energia -= 10
}

Robo.prototype.recarregar = function(){
    this.energia = 100
}

const r1 = new Robo('Alpha')
const r2 = new Robo('Beta')

r1.trabalhar()
r1.trabalhar()
r1.trabalhar()
console.log(r1.energia, r2.energia)
console.log(r1.bracos, r2.bracos)
r1.recarregar()
console.log(r1.energia, r2.energia)