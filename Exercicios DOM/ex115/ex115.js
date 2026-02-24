class Usuario{
    static totalUsuarios = 0
    constructor(nome){
        this.nome = nome
        Usuario.totalUsuarios++
        console.log(`Usuario ${this.nome} criado!`)
    }
}

const u1 = new Usuario('Raí')
const u2 = new Usuario('Bruno')
const u3 = new Usuario('Giovanna')

console.log(Usuario.totalUsuarios)