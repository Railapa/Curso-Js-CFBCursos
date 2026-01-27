const primeiroCurso = document.querySelector('.curso')
const c1 = document.querySelector('#c1')
c1.style.color = 'red'
primeiroCurso.innerHTML += ' - Raí'

const todosOsCursos = document.querySelectorAll('.curso')
for(c of todosOsCursos){
    c.style.border = '2px solid black'
}