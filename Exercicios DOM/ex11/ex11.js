const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const tgt = evt.target
        tgt.style.color = 'white'
        tgt.style.backgroundColor = 'black'
    })
})