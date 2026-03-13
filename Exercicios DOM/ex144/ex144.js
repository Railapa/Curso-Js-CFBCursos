const in_arquivo = document.querySelector('#in_arquivo')
const in_tamanho = document.querySelector('#in_tamanho')
const btn_download = document.querySelector('#btn_download')
const statusMsg = document.querySelector('#status')

const arquivo = () => {
    statusMsg.innerHTML = 'Verificando Arquivo...'
    return new Promise((ok, rej) => {
        setTimeout(() => {
            if(in_tamanho.value <= 50){
                ok(`Arquivo ${in_arquivo.value} baixado com sucesso!`)
            } else {
                rej(`Erro: O arquivo ${in_arquivo.value} é muito grande!`)
            }
        }, 2000)
    })
}

btn_download.addEventListener('click', () => {
    arquivo()

    .then((msgOk) => {
        statusMsg.innerHTML = msgOk
    })

    .catch((msgErro) => {
        statusMsg.innerHTML = msgErro
    })
})