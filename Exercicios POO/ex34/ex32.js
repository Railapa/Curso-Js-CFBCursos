class Heroi{
    constructor(nome, nivel){
        this.nome = nome
        this.nivel = nivel
        this.vida = nivel * 100
    }
}

const h1 = new Heroi('Guerreiro', 1)
const h2 = new Heroi('Mago', 1)

Heroi.prototype.ganharXP = function(){
    this.nivel += 1
    this.vida = this.nivel * 100
}

Heroi.prototype.status = 'Ativo'

console.log(h1.nome, ', ' + h2.nome)
console.log(h1.nivel, ', ' + h2.nivel)
console.log(h1.vida, ', ' + h2.vida)
h1.ganharXP()
console.log(h1.nivel, ', ' + h2.nivel)
console.log(h1.vida, ', ' + h2.vida)