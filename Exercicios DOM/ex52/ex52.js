const nomeCurso = document.querySelector('#input-busca')
const btnPesquisar = document.querySelector('#btn-buscar')
const resultado = document.querySelector('#resultado')

const cursos = ["HTML", "CSS", "Javascript", "PHP", "React"]

btnPesquisar.addEventListener('click', () => {
    resultado.innerHTML = 'Curso não encontrado'
    cursos.find((el, ind) => {
        if (el.toUpperCase() === nomeCurso.value.toUpperCase()) {
            resultado.innerHTML = `Curso encontrado: ${el}`
            return el
        }

    })
    nomeCurso.value = ''
    nomeCurso.focus()
})
