class Contato{
    constructor(pnome, pcontato){
        this.nome = pnome
        this.contato = pcontato
    }

    obterNome(){
        return this.nome
    }

    obterContato(){
        return this.contato
    }
}

const input_nome = document.querySelector('#input-nome')
const input_fone = document.querySelector('#input-fone')
const btn = document.querySelector('#btn-salvar')
const lista_contatos = document.querySelector('#lista-contatos')

let contatos = []

const addContato = () => {
    lista_contatos.innerHTML = ''
    contatos.map((el) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'card-contato')
        div.innerHTML = `Nome: ${el.obterNome()} <br/> Telefone: ${el.obterContato()}`
        lista_contatos.appendChild(div)
    })
}

btn.addEventListener('click', () => {
    const novoContato = new Contato(input_nome.value, input_fone.value) 
    contatos.push(novoContato)
    addContato()
    input_nome.value = ''
    input_fone.value = ''
    input_nome.focus()
})