class Jogador{
    constructor(nome){
        this.id = Symbol()
        this.nome = nome
    }
}

let jogadores = [
    new Jogador('j1'),
    new Jogador('j2'), 
    new Jogador('j3'), 
    new Jogador('j4'), 
    new Jogador('j1'), 
    new Jogador('j3')
]

let s = []

let s1 = jogadores[0].id

let s_jogadores = jogadores.filter((j) => {
    return j.nome != 'j1'
})

jogadores = jogadores.filter((j) => {
    return j.id != s1
})

s = s_jogadores.map((j) => {
    return j.id
})

console.log(s)