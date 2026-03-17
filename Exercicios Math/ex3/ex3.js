const in_valor = document.querySelector('#in_valor')
const res_viagem = document.querySelector('#res_viagem')
const btn_calcular = document.querySelector('#btn_calcular')

btn_calcular.addEventListener('click', () => {
    const valor = Number(in_valor.value)

    const valorMinimo = Math.floor(valor)
    const valorMax = Math.ceil(valor)
    const valorPositivo = Math.abs(valor)

    res_viagem.innerHTML = `Valor Minimo: ${valorMinimo} <br/> Valor Maximo: ${valorMax} <br/> Valor Positivo: ${valorPositivo}`
})  