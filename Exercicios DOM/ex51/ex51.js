const tarefa = document.querySelector('#input-tarefa')
const btnTopo = document.querySelector('#btn-urgente')
const btnFinal = document.querySelector('#btn-final')
const btnRemover = document.querySelector('#btn-remover')
const lista = document.querySelector('#lista-tarefas')

const getSelecionado = (evt) => {
    return document.querySelector('.selecionado')
}

const tirarSelecao = (evt) => {
    const itemTarefa = [...document.querySelectorAll('.item-tarefa')]
    itemTarefa.map((el) => {
        el.classList.remove('selecionado')
    })
}




btnTopo.addEventListener('click', (evt) => {
    if (tarefa.value !== '') {
        const novaTarefa = document.createElement('div')
        novaTarefa.setAttribute('class', 'item-tarefa')
        novaTarefa.innerHTML = tarefa.value
        lista.insertBefore(novaTarefa, lista.firstChild)

        novaTarefa.addEventListener('click', (evt) => {
            tirarSelecao()
            evt.target.classList.add('selecionado')
        })
    } else {
        alert('Digite uma tarefa')
    }

    tarefa.value = ''
    tarefa.focus()
})

btnFinal.addEventListener('click', (evt) => {
    if (tarefa.value !== '') {
        const novaTarefa = document.createElement('div')
        novaTarefa.setAttribute('class', 'item-tarefa')
        novaTarefa.innerHTML = tarefa.value
        lista.insertBefore(novaTarefa, lista.lastChild)

        novaTarefa.addEventListener('click', (evt) => {
            tirarSelecao()
            evt.target.classList.add('selecionado')
        })
    } else {
        alert('Digite uma tarefa')
    }
    tarefa.value = ''
    tarefa.focus()
})

btnRemover.addEventListener('click', () => {
    if (getSelecionado() !== null) {
        const selecionado = getSelecionado()
        selecionado.remove()
    } else {
        alert('Selecione uma tarefa para a remoção')
    }
})