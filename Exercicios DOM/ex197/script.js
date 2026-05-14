const idProduto = document.querySelector('#id-produto')
const btnBuscar = document.querySelector('#btn-buscar')
const msg = document.querySelector('#msg-padrao')

const promisseFunction = () => {
    const id = '101'

    let promessa = new Promise((ok, erro) => {

        setTimeout(() => {
            if (idProduto.value === id) {
                ok('Produto: Placa de Vídeo RTX 4060 <br/> preco: R$ 2.500,00')
            } else {
                erro('Produto não encontrado')
            }
        }, 2000)
    })

    promessa.then((ok) => {
        msg.innerHTML = ok
    })

    promessa.catch((erro) => {
        msg.innerHTML = erro
    })

    msg.innerHTML = 'Procurando...'
}

btnBuscar.addEventListener('click', () => {
    promisseFunction()
})