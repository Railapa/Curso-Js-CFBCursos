const in_cupom = document.querySelector('#input-cupom')
const btnCupom = document.querySelector('#btn-cupom')
const mensagem = document.querySelector('#mensagem')

const promessa = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(in_cupom.value == 'COMPRA10' || in_cupom.value == 'compra10'){
                resolve('Cupom Aplicado!')
            } else {
                reject('Cupom invalido ou ja expirado')
            }
        }, 2000)
    })
}

const validarCupom = async () => {
    mensagem.classList.remove('valido')
    mensagem.classList.remove('invalido')
    mensagem.innerHTML = 'Verificando Cupom...'
    mensagem.classList.add('validando')

    try{
        const res = await promessa()
        mensagem.innerHTML = res
        mensagem.classList.add('valido')
    } catch (erro) {
        mensagem.innerHTML = erro
        mensagem.classList.add('invalido')
    }
}

btnCupom.addEventListener('click', validarCupom)