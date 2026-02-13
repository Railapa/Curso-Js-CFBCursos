const input_nome = document.querySelector('#input-nome')
const btn_registrar = document.querySelector('#btn-registrar')
const lista_alunos = document.querySelector('#lista-alunos')
const total_alunos = document.querySelector('#total-alunos')

let presenca = new Set()
btn_registrar.addEventListener('click', () => {
    presenca.add(input_nome.value.toLowerCase())
    lista_alunos.innerHTML = ''
    presenca.forEach((el) => {
        const novo_aluno = document.createElement('p')
        novo_aluno.classList.add('nome-aluno')
        novo_aluno.innerHTML = el
        lista_alunos.appendChild(novo_aluno)
        
    })
    total_alunos.innerHTML = `Total de alunos confirmados: ${presenca.size}`

    input_nome.value = '' 
    input_nome.focus()    
})
