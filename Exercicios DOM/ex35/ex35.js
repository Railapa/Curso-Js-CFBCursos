const frutas = [...document.querySelectorAll('.fruta')]
const container = document.querySelector('#container-frutas')

frutas.map((el) => {
    el.addEventListener('click', (evt) => {
        container.removeChild(el)
    })
})