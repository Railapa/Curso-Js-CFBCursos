const proibidas = ["festa", "viagem", "feriado"]
const comentario = document.querySelector('#texto-comentario')
const btn = document.querySelector('#btn-postar')
const resultado = document.querySelector('#status-comentario')

btn.addEventListener('click', () => {
    const comentarioInvalido = proibidas.some((el) => {
        return el.toUpperCase() == comentario.value.toUpperCase() 
    }) 

    if(comentarioInvalido){
        resultado.innerHTML = `Comentário bloqueado! A palavra '${comentarioInvalido.innerHTML}' é proibida.`
        resultado.classList.add('alerta-chat')
    } else {
        resultado.innerHTML = 'Comentário postado com sucesso!'
        resultado.classList.add('aprovado-chat')
    }
})