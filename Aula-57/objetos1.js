class Pessoa{
    constructor(pnome){
        this.nome = pnome
        this.canal = 'CFB Cursos'
        this.curso = 'JavaScript'
        this.aula = 'Objetos'
    }
}

const p1 = new Pessoa('Bruno')
const p2 = new Pessoa('Bruna')
const p3 = new Pessoa('Raí')
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(p1.canal)
console.log(p1.curso)
console.log(p1.aula)

/* 
1. O que é uma Classe?
Imagine uma classe como uma instrução ou um molde. Ela define quais propriedades (informações) e métodos (ações) um objeto terá.

Exemplo: Se você tem uma classe Pessoa, ela é o projeto que diz que toda pessoa terá um nome.

2. O Operador new e a Instanciação
Para criar um objeto real a partir do molde (classe), usamos o operador new. Esse processo de criar um objeto a partir de uma classe chama-se instanciação.

Cada objeto criado é independente: alterar o nome da Pessoa 1 não afeta o nome da Pessoa 2.

3. O Método constructor
Este é o método mais importante da aula. O constructor é uma função especial que:

É executada automaticamente assim que você usa o new.

Serve para inicializar as propriedades do objeto.

Pode receber parâmetros para que cada objeto comece com valores diferentes.

4. A Palavra-chave this
Dentro da classe, usamos o this para fazer referência ao próprio objeto que está sendo criado.

this.nome = "Bruno" significa: "A propriedade nome deste objeto específico vai receber o valor Bruno".
*/