const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.target.remove()
    })
})