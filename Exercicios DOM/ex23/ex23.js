const btn1 = document.querySelector('#btn-primeiro')
const btn2 = document.querySelector('#btn-ultimo')
const cursos = document.querySelector('#lista-cursos')


btn1.addEventListener('click', () => {
    cursos.firstElementChild.classList.toggle('borda-azul')
})

btn2.addEventListener('click', () => {
    cursos.lastElementChild.classList.toggle('borda-vermelha')
})