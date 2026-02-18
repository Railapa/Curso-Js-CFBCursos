function Pessoa(pnome, pidade) {
    this.nome = pnome,
    this.idade = pidade,

    this.obterNome = function() {
        return this.nome
    }

    this.obterIdade = function() {
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
