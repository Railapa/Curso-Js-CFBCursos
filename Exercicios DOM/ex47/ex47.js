const quadrados = [...document.querySelectorAll('.quadrado')]
const btn = document.querySelector('#btn-mostrar')

btn.addEventListener('click', () => {
    const azuis = quadrados.filter((val) => {
        return val.classList.contains('azul')
    })

    azuis.map((el) => {
        el.style.border = '3px solid black'
        el.style.padding = '0.5rem'
    })
})
