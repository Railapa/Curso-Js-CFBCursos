const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const target = evt.target
        target.classList.toggle('selecionado')
    })
})