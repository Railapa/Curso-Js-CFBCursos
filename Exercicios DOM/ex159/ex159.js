const status_lote = document.querySelector('#status_lote')
const lista_produtos = document.querySelector('#lista_produtos')
const btn_verificar = document.querySelector('#btn_verificar')

const lote = [
    { id: "A1", nome: "Vitamina C", vencido: false },
    { id: "A2", nome: "Cálcio", vencido: false },
    { id: "A3", nome: "Ferro", vencido: true }, 
    { id: "A4", nome: "Magnésio", vencido: false }
]

btn_verificar.addEventListener('click', () => {
    status_lote.innerHTML = ''
    const loteVencido = lote.some((val) => {
        return val.vencido === true
    })

    if(loteVencido){
        status_lote.classList.add('perigo')
        status_lote.innerHTML = `LOTE REPROVADO ❌`
    } else {
        status_lote.classList.remove('perigo')
        status_lote.innerHTML = 'LOTE SEGURO ✅'
        status_lote.classList.add('sucesso')
    }
})