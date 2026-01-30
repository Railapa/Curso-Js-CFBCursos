const lista = document.querySelector('#lista-tarefas')
const btn = document.querySelector('#btn-remover')

btn.addEventListener('click', () => {
    const filho1 = lista.firstElementChild
    lista.children.length > 0 ? lista.removeChild(filho1) : alert('A lista ja está vazia')
})

