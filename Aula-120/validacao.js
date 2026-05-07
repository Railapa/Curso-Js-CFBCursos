const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')
const btn_validar = document.querySelector('#btn_validar')


btn_validar.addEventListener('click', (evt) => {
    let msg;

    if(!f_nota.checkValidity()){
        msg = f_nota.validationMessage
    }  else if (!f_nome.checkValidity()){
        msg = f_nome.validationMessage
    }

    f_msg.innerHTML = msg

    evt.preventDefault()
})