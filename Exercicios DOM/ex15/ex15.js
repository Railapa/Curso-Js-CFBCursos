const campoTexto = document.querySelector('#campo-texto')
const contador = document.querySelector('#contador')

campoTexto.addEventListener('input', (evt) => {
    contador.innerHTML = evt.target.value.length
    
})