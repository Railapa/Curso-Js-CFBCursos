const in_cidade = document.querySelector('#in_cidade')
const btn_consultar = document.querySelector('#btn_consultar')
const msg_status = document.querySelector('#msg_status')
const temp_valor = document.querySelector('#temp_valor')
const cond_valor = document.querySelector('#cond_valor')
const dados_cidade = document.querySelector('#dados_cidade')

const consultarClima = () => {
    msg_status.innerHTML = 'Aguardando Consulta...'
    return new Promise((ok, rej) => {
        setTimeout(() => {
            if (in_cidade.value == 'Lisboa') {
                ok({
                    temp: 22,
                    condicao: "Ensolarado"
                })
            } else {
                rej('Cidade não encontrada')
            }
        }, 2000)
    })
}

btn_consultar.addEventListener('click', () => {
    consultarClima()

    .then((msgOK) => {
        temp_valor.innerHTML = msgOK.temp
        cond_valor.innerHTML = msgOK.condicao
    })

    .catch((msgErro) => {
        msg_status.innerHTML = msgErro
    })
})