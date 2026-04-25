const seletor = document.querySelector('#seletor')
const quadrado = document.querySelector('#quadrado')
const codigoCor = document.querySelector('#codigoCor')

seletor.addEventListener('input', () => {
    const seletorValor = seletor.value
    quadrado.style.backgroundColor = seletorValor
    codigoCor.innerHTML = seletorValor
})