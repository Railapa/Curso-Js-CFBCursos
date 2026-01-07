let peso = Number(prompt('Qual o seu peso'))
let altura = Number(prompt('Qual a sua altura'))
let imc = peso / (altura * altura)

if (imc < 18.5){
    alert('Abaixo de peso')
} else if (imc >= 18.5 && imc <= 24.9){
    alert('Peso Normal')
} else {
    alert('Sobrepeso')
}