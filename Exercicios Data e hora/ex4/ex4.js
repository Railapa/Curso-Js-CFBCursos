const btn_gerar = document.querySelector('#btn_gerar')
const resultado_data = document.querySelector('#resultado_data')

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

btn_gerar.addEventListener('click', () => {
    const data = new Date()

    const diaNumero = data.getDate()
    const diaNome = data.getDay()
    const mes = data.getMonth()
    const ano = data.getFullYear()

    const nomeDia = diasSemana[diaNome]
    const nomeMes = meses[mes]

    resultado_data.innerHTML = `Hoje é ${nomeDia}, ${diaNumero} de ${nomeMes}, de ${ano}`
})