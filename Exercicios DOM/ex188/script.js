const checkTermos = document.querySelector('#checkTermos')
const btnEnviar = document.querySelector('#btnEnviar')

checkTermos.addEventListener('click', () => {
    if(checkTermos.checked){
        btnEnviar.disabled = false
    } else {
         btnEnviar.disabled = true
    }
})