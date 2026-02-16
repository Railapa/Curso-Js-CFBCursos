class Lutador{
    constructor(pNome, pEstilo, pCartel){
        this.nome = pNome
        this.estilo = pEstilo
        this.cartel = pCartel
    }
}

const lutador1 = new Lutador('Ilia Topuria','Wrestling', '17/0')
const lutador2 = new Lutador('Islam Makhachev', 'Grappling', '28/1')

console.log(lutador1)
console.log(lutador2)