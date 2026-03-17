const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const n3 = document.querySelector('#n3')
const res_analise = document.querySelector('#res_analise')
const btn_analisar = document.querySelector('#btn_analisar')

btn_analisar.addEventListener('click', () => {
    const num1 = Number(n1.value)
    const num2 = Number(n2.value)
    const num3 = Number(n3.value)

    const numMaior = Math.max(num1, num2, num3)
    const numMenor = Math.min(num1, num2, num3)

    res_analise.innerHTML = `Maior Numero inserido: ${numMaior} <br/> Menor Numero inserido: ${numMenor}`

    n1.value = ''
    n2.value = ''
    n3.value = ''
})