const exibicao_data = document.querySelector('#exibicao_data')
const btn_curto = document.querySelector('#btn_curto')
const btn_longo = document.querySelector('#btn_longo')

btn_curto.addEventListener('click', () => {
    const data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1

    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes

    exibicao_data.innerHTML = `${dia}/${mes}`
})

btn_longo.addEventListener('click', () => {
    const data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    dia = dia < 10 ? '0' + dia : dia
    mes = mes < 10 ? '0' + mes : mes

    exibicao_data.innerHTML = `${dia}/${mes}/${ano}`
})