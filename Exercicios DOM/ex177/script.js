const reais = document.querySelector('#reais')
const res = document.querySelector('#res')
const aviso = document.querySelector('#aviso')

reais.addEventListener('input', () => {
    const real = reais.value / 5.00
    if (reais.value > 1000) {
        res.classList.add('aviso')
        res.innerHTML = 'Conversão muito alta'
        reais.value = 1000
    } else if (reais.value < 0) {
        res.classList.add('aviso')
        res.innerHTML = 'Digite um valor positivo'
        reais.value = 0
    } else {
        res.innerHTML = `US$ ${real.toFixed(2)}`
    }

})