class SalaCinema{
    constructor(nomeFilme, capacidadeMaxima){
        this.lugaresOcupados = 0
        this.nomeFilme = nomeFilme
        this.capacidadeMaxima = capacidadeMaxima
    }

    venderIngressos(quantidade){
        if(this.lugaresOcupados + quantidade <= this.capacidadeMaxima){
            this.lugaresOcupados += quantidade
            return console.log('Positivo')
        } else {
            return console.log('Seção Lotada!')
        }
    }

    statusSecao(){
        return console.log(`Filme ${this.nomeFilme} | Ocupação: ${this.lugaresOcupados}`) 
    }
}

const salaCinema1 = new SalaCinema('Batman', 5)

salaCinema1.venderIngressos(3)
salaCinema1.statusSecao()
