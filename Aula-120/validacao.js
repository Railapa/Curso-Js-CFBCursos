const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')
const btn_validar = document.querySelector('#btn_validar')

btn_validar.addEventListener('click', (evt) => {
    let msg;

    if(!f_nota.checkValidity()){ // checkValidity() -> Retorna a mensagem de validação padrão que está definida nos elementos caso a validação nao seja satisfeita
        msg = f_nota.validationMessage  // mensagem padrao do sistema caso a validação seja rejeitada, podemos utlizar uma mensagem propria utlizando msg = 'Campo Invalido' por exemplo
    }

    f_msg.innerHTML = msg

    evt.preventDefault() // Não executa o "Subimit" ao clicar no botao
}) 