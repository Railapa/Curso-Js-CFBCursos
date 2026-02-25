class FabricaVeiculos{
    static frotaTotal = 0
    constructor(veiculo){
        this.veiculo = veiculo
        FabricaVeiculos.frotaTotal ++
    }

    static exibirFrota = function(){
        console.log(FabricaVeiculos.frotaTotal)
    }
}

const veiculo1 = new FabricaVeiculos('Carro')
const veiculo2 = new FabricaVeiculos('Moto')
const veiculo3 = new FabricaVeiculos('Tanque')
const veiculo4 = new FabricaVeiculos('Jato')

FabricaVeiculos.exibirFrota()