const cards = [...document.querySelectorAll('.card')]
const container = document.querySelector('#container')
const btns = [...document.querySelectorAll('.btn-fechar')]

cards.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.target.classList.toggle('selecionado')
    })
})

btns.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.target.parentElement.style.display = 'none'
    })
})