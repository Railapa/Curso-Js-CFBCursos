const cursos = [...document.querySelectorAll('.curso')]
const btn = document.querySelector('#btn_limpar')

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const tar = evt.target
        tar.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', (evt) => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((el) => {
        el.classList.remove('selecionado')
    })
})