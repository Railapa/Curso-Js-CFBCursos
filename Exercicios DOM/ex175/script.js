const anoNascimento = document.querySelector('#anoNascimento')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

btnVerificar.addEventListener('click', () => {
    const nascimento = anoNascimento.value
    const ano = 2026
    const idade = ano - nascimento
    
    if(nascimento == '' || nascimento > 2026 || nascimento < 1916){
        alert('erro')
    } else if (idade < 18){
        resultado.style.color = 'orange'
        resultado.innerHTML = idade
    } else {
        resultado.style.color = 'green'
        resultado.innerHTML = idade
    }
})