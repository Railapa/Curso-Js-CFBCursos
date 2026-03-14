
const in_peso = document.querySelector('#in_peso')
const in_altura = document.querySelector('#in_altura')
const btn_calcular = document.querySelector('#btn_calcular')
const painel_imc = document.querySelector('#painel_imc')
const res_imc = document.querySelector('#res_imc')

class IMC{
    constructor(peso,altura){
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura)
    }
}

btn_calcular.addEventListener('click', () => {
    const novoIMC = new IMC(in_peso.value, in_altura.value)

    painel_imc.style.display = 'block'
    res_imc.innerHTML = novoIMC.calcularIMC().toFixed(2)
})