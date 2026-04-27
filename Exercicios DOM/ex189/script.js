const valorConta = document.querySelector('#valorConta')
const porcentagem = document.querySelector('#porcentagem')
const resGorjeta = document.querySelector('#resGorjeta')
const resTotal = document.querySelector('#resTotal')

porcentagem.addEventListener('change', () => {
    if(porcentagem.value === '0.10'){
        resTotal.innerHTML = `Total: R$ ${Number(valorConta.value * 1.10).toFixed(2)}`
        resGorjeta.innerHTML = `Gorjeta: R$ ${Number(valorConta.value * 0.10).toFixed(2)}`
    } else if(porcentagem.value === '0.15'){
        resTotal.innerHTML = `Total: R$ ${Number(valorConta.value * 1.15).toFixed(2)}`
        resGorjeta.innerHTML = `Gorjeta: R$ ${Number(valorConta.value * 0.15).toFixed(2)}`
    } else{
        resTotal.innerHTML = `Total: R$ ${Number(valorConta.value * 1.20).toFixed(2)}`
        resGorjeta.innerHTML = `Gorjeta: R$ ${Number(valorConta.value * 0.20).toFixed(2)}`
    }
})