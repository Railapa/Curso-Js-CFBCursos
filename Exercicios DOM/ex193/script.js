const mensagem = document.querySelector('#mensagem')
const contador = document.querySelector('#contador')

mensagem.addEventListener('input', () => {
    const totalCaracter = mensagem.value.length
    contador.innerHTML = `Caracteres: ${totalCaracter}`

    if(totalCaracter >= 30){
        mensagem.classList.add('limite')
    } else {
        mensagem.classList.remove('limite')
    }
})