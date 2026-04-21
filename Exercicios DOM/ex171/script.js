const inputPeca = document.querySelector('#inputPeca')
const btnAdicionar = document.querySelector('#btnAdicionar')
const listaPerifericos = document.querySelector('#listaPerifericos')

const addLista = () => {
    const div = document.createElement('li')
    div.setAttribute('class', 'produto')
    div.innerHTML = inputPeca.value
    listaPerifericos.appendChild(div)

    const btnRemove = document.createElement('button')
    btnRemove.setAttribute('class', 'btnRemove')
    btnRemove.innerHTML = 'X'
    btnRemove.style.cursor = 'pointer'
    div.appendChild(btnRemove)

    btnRemove.addEventListener('click', () => {
        div.remove()
    })

    inputPeca.value = ''
    inputPeca.focus()
}

btnAdicionar.addEventListener('click', () => {
    addLista()
})