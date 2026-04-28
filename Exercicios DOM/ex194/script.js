const valorDolar = document.querySelector('#valorDolar')
const btnConverter = document.querySelector('#btnConverter')
const resultado = document.querySelector('#resultado')

btnConverter.addEventListener('click', () => {
    resultado.innerHTML = 'R$ ' + Number(valorDolar.value) * 5.50.toFixed(2)
})