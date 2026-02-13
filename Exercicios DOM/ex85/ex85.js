const input_tarefa = document.querySelector('#input-tarefa')
const btn_comum = document.querySelector('#btn-comum')
const btn_urgente = document.querySelector('#btn-urgente')
const lista_visual = document.querySelector('#lista-visual')
const btn_rem_primeiro = document.querySelector('#btn-rem-primeiro')
const btn_rem_ultimo = document.querySelector('#btn-rem-ultimo')

let tarefas = []

const redenrizar = () => {
    lista_visual.innerHTML = tarefas.join(' | ') 
}

btn_comum.addEventListener('click', () => {
    if (input_tarefa.value !== "") {
        tarefas.push(input_tarefa.value) 
        redenrizar() 
        
        input_tarefa.value = ""
        input_tarefa.focus()
    }
})

btn_urgente.addEventListener('click', () => {
    if(input_tarefa.value != ''){
        tarefas.unshift(input_tarefa.value)
        redenrizar()
    }
    input_tarefa.value = ""
        input_tarefa.focus()
})

btn_rem_primeiro.addEventListener('click', () => {
    tarefas.shift()
    redenrizar()
})

btn_rem_ultimo.addEventListener('click', () => {
    tarefas.pop()
    redenrizar()
})