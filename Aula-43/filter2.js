const caixaCursos = document.querySelector('#caixaCursos')
const cursos = [...document.querySelectorAll('.curso')]
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

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

btnCursoSelecionado.addEventListener('click', (evt) => {
    const todosRadio = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadio.filter((ele,ind,arr) => {
        return ele.checked 
    })
    radioSelecionado = radioSelecionado[0]
    const cursosSelecionados = radioSelecionado.parentNode.previousSibling.textContent
    alert(`Curso selecionado ${cursosSelecionados}` )
    console.log(todosRadio)
    console.log(radioSelecionado)
    console.log(cursosSelecionados)
})
