const lista = document.querySelector('#lista-dinamica')
const btn = document.querySelector('#btn-adicionar')
const input = document.querySelector('#campo-tarefa')

btn.addEventListener('click', () => {
    const li = document.createElement('li')
    li.setAttribute('class', 'item-tarefa')

    li.innerHTML = input.value

    li.addEventListener('click', () => {
        lista.removeChild(li)
    })

    lista.appendChild(li)
    input.value = ''
    input.focus()
})