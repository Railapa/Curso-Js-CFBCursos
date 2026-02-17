class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }

    obterNome() {
        return this.nome
    }

    obterIdade() {
        return this.idade
    }
}

let pessoas = []

const btn = document.querySelector('#btn_add')
const input_nome = document.querySelector('#f_nome')
const input_idade = document.querySelector('#f_idade')
const res = document.querySelector('.res')


const addPessoa = () => {
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.obterNome()} <br/> Idade: ${p.obterIdade()}`
        res.appendChild(div)
    })
}

btn.addEventListener('click', () => {
    const novaPessoa = new Pessoa(input_nome.value, input_idade.value)
    pessoas.push(novaPessoa)
    addPessoa()
    input_nome.value = ''
    input_idade.value = ''
    input_nome.focus()
})

/* 
1. Criação Dinâmica de Objetos
O professor demonstra como capturar dados de inputs de texto (nome e idade) e usá-los para instanciar novos objetos da classe Pessoa toda vez que um botão é clicado.

Utiliza-se o operador new para criar cada nova instância, garantindo que cada pessoa adicionada tenha seus próprios dados independentes.

2. Gerenciamento com Arrays
Para organizar os objetos criados, o professor utiliza um Array. Cada novo objeto pessoa é inserido no array através do método .push().

Isso permite que o sistema mantenha uma lista completa de todos os objetos criados durante a execução do programa.

3. Renderização no DOM
A aula mostra como percorrer o array de objetos (usando .map() ou .forEach()) para criar elementos HTML dinamicamente (como divs) e exibi-los na tela.

É ensinado como limpar o container de resultados antes de renderizar a lista novamente para evitar duplicatas na tela.
*/