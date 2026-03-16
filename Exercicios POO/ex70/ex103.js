const in_titular = document.querySelector('#in_titular')
const in_saldo = document.querySelector('#in_saldo')
const btn_corrente = document.querySelector('#btn_corrente')
const btn_poupanca = document.querySelector('#btn_poupanca')
const painel_banco = document.querySelector('#painel_banco')
const res_banco = document.querySelector('#res_banco')

class Conta{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    exibirInfo(){
        return `Titular: ${this.titular} <br/> Saldo: ${this.saldo}`
    }
}

class ContaPoupanca extends Conta{
    constructor(titular, saldo){
        super(titular,saldo)
    }

    simularRendimento(){
        return this.saldo = this.saldo * 1.05
    }
}

btn_corrente.addEventListener('click', () => {
    const novaConta = new Conta(in_titular.value, Number(in_saldo.value))
    painel_banco.style.display = 'block'
    res_banco.innerHTML = novaConta.exibirInfo()
})

btn_poupanca.addEventListener('click', () => {
    const novaConta = new ContaPoupanca(in_titular.value, Number(in_saldo.value))
    painel_banco.style.display = 'block'
    res_banco.innerHTML = novaConta.exibirInfo()
    const saldoComJuros = novaConta.simularRendimento();
    res_banco.innerHTML += `<br/> Saldo com rendimento (5%): ${saldoComJuros.toFixed(2)}`
})