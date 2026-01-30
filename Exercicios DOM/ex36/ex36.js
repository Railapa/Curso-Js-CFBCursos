const btn = [...document.querySelectorAll('.btn-lixeira')]
const produto = [...document.querySelectorAll('.card-produto')]
const vitrine = document.querySelector('#vitrine')

btn.map((el) => {
    el.addEventListener('click', (evt) => {
        const cardParaRemover = evt.target.parentNode
        vitrine.removeChild(cardParaRemover)
    })
})