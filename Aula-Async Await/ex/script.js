const in_cupom = document.querySelector('#input-cupom')
const btnCupom = document.querySelector('#btn-cupom')
const mensagem = document.querySelector('#mensagem')

const promessa = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(in_cupom.value == 'COMPRA10'){
                resolve('Cupom aplicado!')
            } else {
                reject('Cupom invalido ou ja expirado')
            }
        },2000)
    })
} 

const cupom = async () => {
    mensagem.className = 'painel carregando'
    mensagem.innerHTML = 'Verificando cupom...'

    try{
        const res = await promessa()
        mensagem.className = 'painel sucesso'
        mensagem.innerHTML = res
    } catch (erro){
        mensagem.className = 'painel erro'
        mensagem.innerHTML = erro
    }
}

btnCupom.addEventListener('click', cupom)