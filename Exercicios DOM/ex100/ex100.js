const input_tarefa = document.querySelector('#input_tarefa')
const btn_add = document.querySelector('#btn_add')
const lista_tarefas = document.querySelector('#lista_tarefas')

const tarefas = []

const addTarefas = () => {
    lista_tarefas.innerHTML = ''

    tarefas.map((el) => {
        const li = document.createElement('li')
        li.innerHTML = el
        lista_tarefas.appendChild(li)
    })
}

btn_add.addEventListener('click', () => {
    if(input_tarefa.value !== ''){
        tarefas.push(input_tarefa.value)
    } else {
        alert('Adicione uma tarefa')
    }

    input_tarefa.value = ''
    input_tarefa.focus()
    addTarefas()
})