const inputNumero = document.querySelector('#inputNumero')
const mensagem = document.querySelector('#mensagem')
const btn_tentar = document.querySelector('#btn_tentar')

const gerarNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1
btn_tentar.addEventListener('click', () => {
    
    if(inputNumero.value == gerarNum){
        mensagem.innerHTML = 'Acertou!'
    } else if(inputNumero.value < gerarNum){
        mensagem.innerHTML = 'Mais alto'
    } else {
        mensagem.innerHTML = 'Mais baixo'
    }
})