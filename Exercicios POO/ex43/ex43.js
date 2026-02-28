class Funcionario{
    constructor(nome, salario_base){
        this.nome = nome
        this.salario_base = salario_base
        if(this.constructor === Funcionario){
            throw new TypeError('A classe "Funcionario" não pode ser instanciada')
        }
        if(this.calcular_salario === undefined){
            throw new TypeError('O metodo calcular_salario deve ser implementado')
        }
    }

    bater_ponto(){
        console.log(`Funcionário ${this.nome} registrou presença.`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, salario_base){
        super(nome, salario_base)
    }

    calcular_salario(){
        console.log(`O salário do ${this.nome} é ${this.salario_base} + um bônus de ${this.salario_base * 0.20} produtividade.`)
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario_base){
        super(nome, salario_base)
    }

    calcular_salario(){
        console.log(`O salário do ${this.nome} é ${this.salario_base} + um bônus fixo de ${this.salario_base * 0.20} por cargo de confiança`)
    }
}

class Estagiario extends Funcionario{
    constructor(nome, salario_base){
        super(nome, salario_base)
    }
}

const g1 = new Gerente('Bruno', 10000)
const dev1 = new Desenvolvedor('Raí', 4000)

const lista_funcionarios = [g1, dev1]

lista_funcionarios.map((el) => {
    el.calcular_salario()
})

//  const f1 = new Funcionario('Ronaldo', 'R$1.700')
//  const stag1 = new Estagiario('Allan', 'R$1.000')