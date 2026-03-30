const id_interno = Symbol('id_unico')

class Jogador{
    constructor(){
        this.nome = this.nome
        this[id_interno] = Math.floor(Math.random() * 1000000)
    }
}

const j1 = new Jogador('Bruno')
const j2 = new Jogador('CFB Cursos')

console.log("Chaves visiveis de J1: ", Object.keys(j1))

for(prop in j1){
    console.log('Propriedade encontrada: ', prop)
}

console.log(`O ID real de ${j1.nome} é: ${j1[id_interno]}`)