class Carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if(ptipo == 2){
            this.tipo = 'Utilitario'
            this.velmax = 100
        } else if(ptipo == 3){
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    
    getTipo(){
        return this.tipo
    }
    
    getVelmax(){
        return this.velmax
    }
    
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    
    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelmax(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade maxima: ${this.velmax}`)
        console.log(`--------------------------`)
    }
}

const c1 = new Carro('Rapidão', 1)
const c2 = new Carro('Super Luxo', 2)
const c3 = new Carro('Bombadão', 4)
const c4 = new Carro('Carrego Tudo', 3)

// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

// c1.info()
// c2.info()

// console.log(c1.getNome())
// console.log(c1.getInfo())
// console.log(c1.getInfo()[1])

c1.setNome('Super Veloz')
c1.setVelmax(500)
c1.info()

/*
1. Métodos: As Ações do Objeto
Definição: Métodos são funções criadas dentro da classe que permitem que o objeto execute ações ou processe dados.

Método de Informação (info): O professor demonstra como criar um método para reunir e exibir todas as propriedades do objeto (como nome, tipo e velocidade) de uma só vez.

Integração com Template Strings: Os métodos podem usar Template Strings (com crases `) para formatar a saída de dados de forma mais legível e moderna.

2. Métodos Get e Set
Get (Obter): Métodos que retornam valores das propriedades do objeto. Exemplo: get nome() retorna o nome armazenado. Eles podem até retornar vários dados organizados em um Array.

Set (Definir): Métodos usados para alterar os valores das propriedades após o objeto já ter sido criado. Exemplo: set nome("Novo Nome") atualiza o nome original.

3. Propriedades Dinâmicas no Construtor
O professor mostra como usar lógica (if/else) dentro do constructor para definir automaticamente valores como a velocidade máxima baseada no tipo de carro escolhido (Esportivo, Passeio, etc.).
*/