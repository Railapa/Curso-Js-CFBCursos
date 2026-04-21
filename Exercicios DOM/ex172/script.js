const contador = document.querySelector('#contador')
const btnLimpar = document.querySelector('#btnLimpar')
const cards = document.querySelectorAll('.card')
const grade = document.querySelector('#grade')

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selecionado')
        contador.innerHTML = document.querySelectorAll('.card.selecionado').length
    })
})

btnLimpar.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.remove('selecionado')
        contador.innerHTML = 0
    })
})