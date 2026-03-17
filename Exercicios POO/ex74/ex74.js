const txt_titular = document.querySelector('#txt_titular')
const txt_saldo = document.querySelector('#txt_saldo')
const in_valor = document.querySelector('#in_valor')
const btn_depositar = document.querySelector('#btn_depositar')

class Conta{
    constructor(nome,saldo){
        this.nome = nome
        this.saldo = saldo
    }

    depositar(deposito){
        return this.saldo += deposito
    }
}

const c1 = new Conta('Raí', 1000)
txt_saldo.innerHTML = c1.saldo
txt_titular.innerHTML = c1.nome

btn_depositar.addEventListener('click', () => {
    txt_saldo.innerHTML = c1.depositar(Number(in_valor.value))


})