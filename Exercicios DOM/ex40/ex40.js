const titulo = document.querySelector('#nota-titulo')
const texto = document.querySelector('#nota-texto')
const btn = document.querySelector('#btn-salvar')
const mural = document.querySelector('#mural-notas')

btn.addEventListener('click', () => {
    const nota = document.createElement('div')
    nota.setAttribute('class', 'nota')

    const h3 = document.createElement('h3')
    h3.innerHTML = titulo.value

    const p = document.createElement('p')
    p.innerHTML = texto.value

    mural.appendChild(nota)
    nota.appendChild(h3)
    nota.appendChild(p)

    const btnApagar = document.createElement('button')
    btnApagar.setAttribute('class', 'btn-apagar')
    btnApagar.innerHTML = 'Apagar nota'
    nota.appendChild(btnApagar)

    titulo.value = ""
    texto.value = ""
    titulo.focus()

    btnApagar.addEventListener('click', () => {
        mural.removeChild(nota)
    })
})
