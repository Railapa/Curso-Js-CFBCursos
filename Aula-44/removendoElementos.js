const caixaCursos = document.querySelector('#caixaCursos')
const cursos = [...document.querySelectorAll('.curso')]
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')

tecnologias.map((el, chave) => {
    const novoElemento = document.createElement('div')

    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1') 

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
 
    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
    
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radiosSelecionado = todosRadios.filter((val) => {
        return val.checked
    })
    return radiosSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', () => {
    const rs = radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert(`Você selecionou o curso de ${cursoSelecionado}`)
    } else {
        alert('Selecione algum curso.')
    }
    
})

btnRemoverCurso.addEventListener('click', () => {
    const rs = radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert('Selecione algum curso.')
    }
})