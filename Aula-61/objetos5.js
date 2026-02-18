const pessoa = {
    nome: document.querySelector('#f_nome'),
    idade: document.querySelector('#f_idade'),

    obterNome: function () {
        return this.nome.value
    },

    obterIdade: function () {
        return this.idade.value
    }
}

const btn = document.querySelector('#btn_add')
const input_nome = document.querySelector('#f_nome')
const input_idade = document.querySelector('#f_idade')
const res = document.querySelector('.res')

const addPessoa = () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'pessoa')
    div.innerHTML = `Nome: ${pessoa.obterNome()} <br/> Idade: ${pessoa.obterIdade()}`
    res.appendChild(div)
}

btn.addEventListener('click', () => {
    addPessoa()
})

/* 
1. O Conceito de Objeto Literal
Independência vs. Unicidade: Ao contrário do operador new (que cria instâncias independentes na memória), o objeto literal é um objeto único.

Mesmo Endereço: Se você atribuir um objeto literal a várias variáveis, todas elas apontarão para o mesmo endereço de memória. Se alterar o nome na "Pessoa 2", o nome na "Pessoa 1" e "Pessoa 3" também mudará automaticamente.

2. Sintaxe dos Objetos Literais
Utiliza-se a abertura de chaves {} diretamente para definir o objeto.

Atribuição: Em vez de = ou de um construtor, usa-se dois pontos (:) para definir propriedades e métodos.

Acesso: Pode-se aceder às propriedades usando a sintaxe de ponto (pessoa.nome) ou a sintaxe de colchetes (pessoa["nome"]).

3. Métodos em Objetos Literais
Os métodos seguem uma estrutura semelhante às classes, mas são definidos como propriedades que recebem uma função.

O uso do this continua a ser necessário para referenciar as propriedades do próprio objeto.
*/