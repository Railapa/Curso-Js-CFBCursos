const inputTarefa = document.querySelector('#inputTarefa')
const btnAdd = document.querySelector('#btnAdd')
const listaTarefas = document.querySelector('#listaTarefas')

btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerHTML = inputTarefa.value

    const btn_remove = document.createElement('button')
    btn_remove.innerHTML = 'X'
    btn_remove.setAttribute('class', 'btnExcluir')

    btn_remove.addEventListener('click', () => {
        li.remove()
    })

    const btnConcluida = document.createElement('button')
    btnConcluida.setAttribute('class', 'btnConcluida')
    btnConcluida.innerHTML = 'ok'

    btnConcluida.addEventListener('click', () => {
        li.classList.toggle('concluida')
    })
    
    li.appendChild(btnConcluida)
    li.appendChild(btn_remove)
    listaTarefas.appendChild(li)

    inputTarefa.value = ''
    inputTarefa.focus()
})