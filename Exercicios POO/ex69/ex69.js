const in_nome = document.querySelector('#in_nome')
const in_salario = document.querySelector('#in_salario')
const in_linguagem = document.querySelector('#in_linguagem')
const btn_contratar = document.querySelector('#btn_contratar')
const painel_rh = document.querySelector('#painel_rh')
const res_rh = document.querySelector('#res_rh')

class Funcionario{
    constructor(nome, salario){
        this.salario = salario
        this.nome = nome
    }

    calcularBonus(){
        return this.salario = this.salario * 0.10
    }
}

class Programador extends Funcionario{
    constructor(nome, salario, linguagem){
        super(nome, salario)
        this.linguagem = linguagem
    }

    msgFuncionario(){
        return `Bem-vindo ${this.nome}! <br/> Especialista em ${this.linguagem} <br/>` 
    }
}

btn_contratar.addEventListener('click', () => {
    const novoDev = new Programador(in_nome.value, Number(in_salario.value), in_linguagem.value)

    painel_rh.style.display = 'block'
    
    res_rh.innerHTML = novoDev.msgFuncionario()
    res_rh.innerHTML += `Salário: R$ ${Number(in_salario.value) + novoDev.calcularBonus()}`
})