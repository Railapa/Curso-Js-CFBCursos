const input_tarefa = document.querySelector('#input_tarefa')
const btn_adicionar = document.querySelector('#btn_adicionar')
const lista_tarefas = document.querySelector('#lista_tarefas')

class GerenciadorTarefas {
    constructor(lista_tarefas) {
        this.lista_tarefas = lista_tarefas
    }

    adicionar(texto) {
        this.texto = texto
        btn_adicionar.addEventListener('click', () => {
            const div = document.createElement('div')
            div.setAttribute('class', 'tarefa')
            div.innerHTML = input_tarefa.value
            lista_tarefas.appendChild(div)
            const btnRemover = document.createElement('button')
            btnRemover.setAttribute('class', 'btn-excluir')
            btnRemover.innerHTML = 'remover'
            div.appendChild(btnRemover)
            btnRemover.addEventListener('click', () => {
                div.remove()
            })
            input_tarefa.value = ''
            input_tarefa.focus()
        })

    }
}

const tarefas = new GerenciadorTarefas('#lista-tarefas')
tarefas.adicionar('arroz')