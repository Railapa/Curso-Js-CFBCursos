
const btn = document.querySelector('#btn-criar-lista')
const container = document.querySelector('#container-lista')
const linguagens = ['HTML', 'CSS', 'JavaScript', 'React']

btn.addEventListener('click', () => {
    linguagens.map((el, chave) => {
        const novaDiv = document.createElement('div')
        novaDiv.setAttribute('class', 'item-estudo')
        novaDiv.setAttribute('id', 'item'+chave)
        novaDiv.innerHTML = el
        container.appendChild(novaDiv)
    })
})