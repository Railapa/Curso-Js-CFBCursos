const seletor = document.querySelector('#seletor')
const quadrado = document.querySelector('#quadrado')
const codigoCor = document.querySelector('#codigoCor')

seletor.addEventListener('input', () => {
    quadrado.style.backgroundColor = seletor.value
    codigoCor.innerHTML = seletor.value
})