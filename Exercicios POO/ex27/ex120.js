class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar = function(valorDepositar){
        this.saldo += valorDepositar
        console.log(this.saldo)
    }

    sacar = function(valorSacar){
        this.valorSaque = valorSacar
        if(valorSacar > this.saldo){
            console.log('Saldo Indisponivel')
        } else {
            this.saldo -= valorSacar
            console.log(this.saldo)
        }
    }
}

const usuario1 = new ContaBancaria('Raí', 100)
console.log(usuario1.saldo)
usuario1.depositar(30)
usuario1.sacar(100)
usuario1.sacar(50)