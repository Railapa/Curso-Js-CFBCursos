const taskInput = document.querySelector('#taskInput')
const addBtn = document.querySelector('#addBtn')
const taskList = document.querySelector('#taskList')

addBtn.addEventListener('click', () => {
    if(taskInput.value != ''){
        const li = document.createElement('li')
    li.innerHTML = taskInput.value 
    taskList.appendChild(li)

    const btn_remove = document.createElement('button')
    btn_remove.innerHTML = 'X'
    btn_remove.setAttribute('class', 'remove-btn')
    li.appendChild(btn_remove)

    btn_remove.addEventListener('click', () => {
        li.remove()
    })

    taskInput.value = ''
    taskInput.focus()
    } else{
        alert('Erro')
    }
})