const caixaCursos = document.querySelector('#caixaCursos')
const cursos = [...document.querySelectorAll('.curso')]
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')

    novoElemento.innerHTML = curso
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1')

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}

tecnologias.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
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
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert(`Você selecionou o curso de ${cursoSelecionado}`)
    } else {
        alert('Selecione algum curso.')
    }
})

btnRemoverCurso.addEventListener('click', () => {
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert('Selecione algum curso.')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', () => {
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', () => {
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != '') {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }
})