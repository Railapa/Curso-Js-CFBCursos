const input_codigo = document.querySelector('#input-codigo')
const btn = document.querySelector('#btn-consultar')
const produto = document.querySelector('#nome-p')
const preco = document.querySelector('#preco-p')
const msg_erro = document.querySelector('#msg-erro')
const codigos = ["P01", "P02", "P03"]

const removerDestaque = () => {
    produto.classList.remove('msg-erro')
}

btn.addEventListener('click', () => {
    const codigosEncontrados = codigos.find((el) => {
        return el.toUpperCase() == input_codigo.value.toUpperCase()
    })

    if(codigosEncontrados){
        removerDestaque()
        produto.innerHTML = ` ${codigosEncontrados} `
    } else {
        produto.innerHTML = 'Código não encontrado'
        produto.classList.add('msg-erro')
    }

    input_codigo.focus()
})