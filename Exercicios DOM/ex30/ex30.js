const caixa_a = document.querySelector('#caixa-a')


caixa_a.addEventListener('click', () => {
    caixa_a.nextElementSibling.classList.toggle('selecionado')
})
