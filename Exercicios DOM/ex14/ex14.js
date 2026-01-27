const corDeFundo = document.querySelector('#selecao-cor')
corDeFundo.addEventListener('change', (evt) => {
    document.body.style.backgroundColor = evt.target.value
})