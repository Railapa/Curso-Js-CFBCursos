const res_saldo = document.querySelector('#res_saldo')
const in_saque = document.querySelector('#in_saque')
const btn_sacar = document.querySelector('#btn_sacar')
const msg_banco = document.querySelector('#msg_banco')

class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

    sacarDinheiro(saque){
         if(saque > this.saldo){
            return 'Saque reprovado: sem saldo suficiente na conta'
         } else {
            return `Saque aprovado. Saldo restante: ${this.saldo - saque}`
         }
    }
}

const novaConta = new Conta(1000)
btn_sacar.addEventListener('click', () => {

    msg_banco.innerHTML = novaConta.sacarDinheiro(in_saque.value)
})