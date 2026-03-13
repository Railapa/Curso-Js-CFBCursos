const btn_iniciar = document.querySelector('#btn_iniciar')
const mensagem = document.querySelector('#mensagem')

btn_iniciar.addEventListener('click', () => {
    mensagem.innerHTML = 'Contando...'

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🔔 Hora de fazer uma pausa!')
        }, 2000)
    })

    .then((msgSucesso) => {
        mensagem.innerHTML = msgSucesso
    })
})