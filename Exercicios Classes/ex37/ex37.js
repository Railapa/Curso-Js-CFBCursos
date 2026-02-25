class Funcionario{
    static totalFuncionarios = 0
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
        Funcionario.totalFuncionarios++
    }

    baterPonto = function(){
        console.log(`${this.nome} bateu o ponto.`)
    }
}

class Gerente extends Funcionario{
    constructor(nome,salario){
        super(nome, salario)
    }

    baterPonto = function(){
        console.log(`${this.nome} (Gerente) bateu o ponto e abriu o setor.`)
    }
}

class Programador extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }

    baterPonto = function(){
        console.log(`${this.nome} (Programador) bateu o ponto e iniciou o VS Code`)
    }
}

Funcionario.prototype.receberSalario = function(){
    console.log(`O funcionario ${this.nome} recebeu R$${this.salario}`)
}

const gerente1 = new Gerente('Raí', '10.000')
const programador1 = new Programador('Bruno', '4.500')

const equipe = [gerente1, programador1]

const equipemap = equipe.forEach((el) => {
    el.baterPonto()
    el.receberSalario()
})

console.log(equipemap)
console.log(Funcionario.totalFuncionarios)