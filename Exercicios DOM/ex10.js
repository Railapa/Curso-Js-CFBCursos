const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const c4 = document.querySelector('#c4')

c1.addEventListener('click', (evt) => {
    const target = evt.target
    target.innerHTML = 'O ID do elemento clicado é: ' + c1.id
})

c2.addEventListener('click', (evt) => {
    const target = evt.target
    target.innerHTML = 'O ID do elemento clicado é: ' + c2.id
})

c3.addEventListener('click', (evt) => {
    const target = evt.target
    target.innerHTML = 'O ID do elemento clicado é: ' + c3.id
})

c4.addEventListener('click', (evt) => {
    const target = evt.target
    target.innerHTML = 'O ID do elemento clicado é: ' + c4.id
})