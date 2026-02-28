const gerenciadorPerfil = {
    nome: document.querySelector('#display_nome'),
    idade: document.querySelector('#display_idade'),

    setDados(n, i){
        this.nome = n
        this.idade = i
    },
}

const display_nome = document.querySelector('#display_nome')
const display_idade = document.querySelector('#display_idade')
const input_nome = document.querySelector('#in_nome')
const input_idade = document.querySelector('#in_idade')
const btn = document.querySelector('#btn_atualizar')

btn.addEventListener('click', () => {
    gerenciadorPerfil.setDados(input_nome.value, input_idade.value)
    display_nome.innerHTML = `Nome: ${gerenciadorPerfil.nome}`
    display_idade.innerHTML = `Idade: ${gerenciadorPerfil.idade}`
    input_nome.value = ''
    input_idade.value = ''
    input_nome.focus()
})
