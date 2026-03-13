const btn_gerar = document.querySelector('#btn_gerar')
const painel_info = document.querySelector('#painel_info')
const data_compra = document.querySelector('#data_compra')
const data_vencimento = document.querySelector('#data_vencimento')

btn_gerar.addEventListener('click', () => {
    const data = new Date()

    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let mesVencimento = data.getMonth() + 1 + 1
    const ano = data.getFullYear()

    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes
    mesVencimento = mesVencimento < 10 ? '0' + mesVencimento : mesVencimento

    painel_info.style.display = 'block'

    data_compra.innerHTML = `${dia}/${mes}/${ano}`
    data_vencimento.innerHTML = `${dia}/${mesVencimento}/${ano}`
})