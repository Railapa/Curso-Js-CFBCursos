const statusArquivo = document.querySelector('#status')
const btn_download = document.querySelector('#btn_download')

const arquivo = () => {
    statusArquivo.innerHTML = 'Aguardando Download'

    const sucesso = false

    return new Promise((ok,rej) => {
        setTimeout(() => {
            if(sucesso === true){
                ok('Arquivo Pronto!')
            } else {
                rej('Arquivo muito pesado para download')
            }
        }, 2000)
    })
}

btn_download.addEventListener('click', () => {
    arquivo()

    .then((msgOk) => {
        statusArquivo.innerHTML = msgOk
    })

    .catch((msgErro) => {
        statusArquivo.innerHTML = msgErro
    })
})