const Aviao = function(nome, tipo){
    this.nome = nome
    this.tipo = tipo
}

const av1 = new Aviao('Boeing 747', 'Comercial')
const av2 = new Aviao('F-22', 'Militar')

Aviao.prototype.voando = false

Aviao.prototype.decolar = function(){
    this.voando = true
    this.voando = `${this.nome} decolou!`
}


av1.decolar()

console.log(av1.voando)
console.log(av2.voando)