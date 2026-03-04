const btn_comprar = document.querySelector('#btn_comprar')
const Divstatus = document.querySelector('#status')

const verificarEstoque = () => {
    return new Promise((resulte, reject) => {
        setTimeout(() => {
            const quantidade = Math.floor(Math.random() * 10)
            if(quantidade > 0){
                resulte(`Produto disponível! ${quantidade} unidades em estoque.`)
            } else {
                reject(`Desculpe, produto fora de estoque.`)
            }
        }, 3000)
    })
}

btn_comprar.addEventListener('click', () => {
    btn_comprar.disabled = true
    Divstatus.innerHTML = `Consultando estoque...`
    Divstatus.classList.add('processando')
    verificarEstoque()

    .then((mensagemSucesso) => {
        Divstatus.innerHTML = mensagemSucesso
    })

    .catch((mensagemErro) => {
        Divstatus.innerHTML = mensagemErro
    })

    .finally(() => {
        btn_comprar.disabled = false
    })
})