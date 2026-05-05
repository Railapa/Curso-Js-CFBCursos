const email = document.querySelector('#email')
const nota = document.querySelector('#nota')
const btn_enviar = document.querySelector('#btn-enviar')
const msgStatus = document.querySelector('#mensagem-status')

btn_enviar.addEventListener('click', (evt) => {
    let msg;

    if (!email.checkValidity()) {
        msg = email.validationMessage
        msgStatus.style.color = 'red'
    } else if (!nota.checkValidity()) {
        msg = nota.validationMessage
        msgStatus.style.color = 'red'
    } else {
        msg = 'Validação Concluida'
        msgStatus.style.color = 'green'
    }

    msgStatus.innerHTML = msg
    evt.preventDefault()
})