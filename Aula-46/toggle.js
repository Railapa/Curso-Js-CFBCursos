const caixaCursos = document.querySelector('#caixaCursos')
const cursos = [...document.querySelectorAll('.curso')]
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')

    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

tecnologias.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', () => {
    try {
        alert(`Você selecionou o curso de ${cursoSelecionado().innerHTML}`)
    } catch(ex) {
        alert('Selecione algum curso.')
    }
})

btnRemoverCurso.addEventListener('click', () => {
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()
    } else {
        alert('Selecione algum curso.')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', () => {
    try {
        if (nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }
    nomeCurso.value = ''
    nomeCurso.focus()
})

btnAdicionarNovoCursoDepois.addEventListener('click', () => {
    try {
        if (nomeCurso.value != '') {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }

    nomeCurso.value = ''
    nomeCurso.focus()
})