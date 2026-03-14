const in_reais = document.querySelector('#in_reais')
const in_cotacao = document.querySelector('#in_cotacao')
const btn_converter = document.querySelector('#btn_converter')
const painel_resultado = document.querySelector('#painel_resultado')
const res_dolar = document.querySelector('#res_dolar')

class Conversor{
    constructor(valor, cotacao){
        this.valor = valor
        this.cotacao = cotacao
    }

    converterDolar() {
        return this.valor / this.cotacao
    }
}

btn_converter.addEventListener('click', () => {
    const novoConversor = new Conversor(in_reais.value, in_cotacao.value)

    painel_resultado.style.display = 'block'
    res_dolar.innerHTML = novoConversor.converterDolar().toFixed(2)
    
})