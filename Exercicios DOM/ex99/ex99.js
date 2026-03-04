const input_cupom = document.querySelector('#input_cupom')
const btn_aplicar = document.querySelector('#btn_aplicar')
const mensagem = document.querySelector('#mensagem')

const cumpomDesconto = () => {

    return new Promise((ok, rej) => {
        setTimeout(() => {
            if (input_cupom.value == 'JS10') {
                ok('CUMPOM ADICIONADO')
            } else {
                rej('CUMPOM NÃO ENCONTRADO')
            }
        }, 1500);
    })
}

btn_aplicar.addEventListener('click', () => {
    btn_aplicar.disabled = true
    mensagem.innerHTML = 'PROCESSANDO CUMPOM...'

    mensagem.classList.remove('sucesso', 'erro');

    cumpomDesconto()

    .then((msgSucesso) => {
        mensagem.classList.add('sucesso')
        mensagem.innerHTML = msgSucesso
    })

    .catch((msgErro) => {
        mensagem.classList.add('erro')
        mensagem.innerHTML = msgErro

    })

    .finally(() => {
        btn_aplicar.disabled = false
    })
})