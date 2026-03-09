const input_cupom = document.querySelector('#input_cupom')
const btn_aplicar = document.querySelector('#btn_aplicar')
const msg_cupom = document.querySelector('#msg_cupom')

const cupons = [
    { codigo: "DESC10", desconto: 10, ativo: true },
    { codigo: "PROMO50", desconto: 50, ativo: true },
    { codigo: "EXPIROU", desconto: 20, ativo: false }
]

btn_aplicar.addEventListener('click', () => {
    const aplicarCupom = cupons.find((val) => {
        return input_cupom.value.toUpperCase() === val.codigo
    })

    if(aplicarCupom && aplicarCupom.ativo === true){
        msg_cupom.innerHTML = `Cumpom "${aplicarCupom.codigo}" aplicado. <br/> Valor do desconto: $${aplicarCupom.desconto.toFixed(2)}`
    } else {
        msg_cupom.innerHTML = 'Cumpom não encontrado ou indisponivel no momento'
    }
})