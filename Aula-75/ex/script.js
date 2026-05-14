const statusMsg = document.querySelector('#status')
const btnPagar = document.querySelector('#btn-pagar')

btnPagar.addEventListener('click', () => {
    let promessa = new Promise((ok, erro) => {
        let resultado = Math.floor(Math.random() * 2 + 1)
        setTimeout(() => {
            if (resultado === 2) {
                ok('Pagamento Aprovado')
            } else {
                erro('Pagamento Rejeitado')
            }
        }, 2000)
    })

    promessa.then((ret) => {
        statusMsg.classList.remove('processando')
        statusMsg.innerHTML = ret
        statusMsg.classList.add('sucesso')
    })

    promessa.catch((ret) => {
        statusMsg.classList.remove('processando')
        statusMsg.innerHTML = ret
        statusMsg.classList.add('erro')
    })

    statusMsg.classList.remove('sucesso')
    statusMsg.classList.remove('erro')
    statusMsg.innerHTML = 'Processando...'
    statusMsg.classList.add('processando')
})