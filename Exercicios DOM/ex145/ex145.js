const btn_conectar = document.querySelector('#btn_conectar')
const statusMsg = document.querySelector('#status')
const in_ping = document.querySelector('#in_ping')

const verificarConexao = () => {
    statusMsg.innerHTML = 'Verificando seu ping...'
    return new Promise((ok, rej) => {
        setTimeout(() => {
            if(in_ping.value <= 250){
                ok(`Seu ping (${in_ping.value}) está normal!`)
            } else {
                rej(`Seu ping (${in_ping.value}) está muito acima`)
            }
        }, 2000)
    })
}

btn_conectar.addEventListener('click', () => {
    verificarConexao()

    .then((msgOk) => {
        statusMsg.innerHTML = msgOk
    })

    .catch((msgErro) => {
        statusMsg.innerHTML = msgErro
    })
})