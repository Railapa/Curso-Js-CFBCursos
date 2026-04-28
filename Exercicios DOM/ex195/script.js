const in_peso = document.querySelector('#peso')
const in_altura = document.querySelector('#altura')
const btnCalcular = document.querySelector('#btnCalcular')
const valorImc = document.querySelector('#valorImc')
const mensagem = document.querySelector('#mensagem')

btnCalcular.addEventListener('click', () => {
    const peso = Number(in_peso.value)
    const altura = Number(in_altura.value)
    const imc = peso / (altura * altura)
    if(imc >= 18.5 && imc <= 24.9){
        mensagem.classList.remove('alerta')
        mensagem.classList.add('sucesso')
        mensagem.innerHTML = 'Peso normal'
        valorImc.innerHTML = imc.toFixed(2)
    } else {
        mensagem.classList.remove('sucesso')
        mensagem.classList.add('alerta')
        mensagem.innerHTML = 'Acima do peso'
        valorImc.innerHTML = imc.toFixed(2)
    }
})