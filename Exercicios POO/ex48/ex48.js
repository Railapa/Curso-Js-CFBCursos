const input_tarefa = document.querySelector('#input_tarefa')
const btn_adicionar = document.querySelector('#btn_adicionar')
const lista_tarefas = document.querySelector('#lista_tarefas')

btn_adicionar.addEventListener('click', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'tarefa')
    div.innerHTML = input_tarefa.value
    lista_tarefas.appendChild(div)
    const btnRemover = document.createElement('button')
    btnRemover.setAttribute('class', 'btn-excluir')
    btnRemover.innerHTML = 'Remover'
    div.appendChild(btnRemover)
    btnRemover.addEventListener('click', () => {
        div.remove()
    })
    input_tarefa.value = ''
    input_tarefa.focus()
})