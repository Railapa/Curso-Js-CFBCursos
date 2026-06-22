const in_cupom = document.querySelector('#input-cupom')
const btnCupom = document.querySelector('#btn-cupom')
const mensagem = document.querySelector('#mensagem')

const promessa = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(in_cupom.value === 'COMPRA10' || in_cupom.value === 'compra10'){
                resolve('Cupom aplicado com sucesso')
            } else {
                reject('Cupom invalido ou ja expirado')
            }
        }, 3000)
    })
}

async function cupom(){
    mensagem.innerHTML = 'Verificando cupom...'

    try{
        await promessa()
        mensagem.innerHTML = 'Cupom aplicado!'
    } catch(err){
        mensagem.innerHTML = err
    }
}

btnCupom.addEventListener('click', () => {
    cupom()
})