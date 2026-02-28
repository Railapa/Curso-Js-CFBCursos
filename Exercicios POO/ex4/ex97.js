class ContaBancaria{
    constructor(titular, saldoInicial){
        this.titular = titular
        this.saldo = saldoInicial
    }

    obterSaldo(){
        return this.saldo
    }

    depositar(valor){
        return this.saldo += valor
    }

    sacar(valor){
        return this.saldo -= valor
    }
}

const minhaConta = new ContaBancaria('Raí', 1000)

minhaConta.depositar(500)
console.log(`Novo saldo: ${minhaConta.saldo}`)
minhaConta.sacar(150)
console.log(`Novo saldo: ${minhaConta.saldo}`)