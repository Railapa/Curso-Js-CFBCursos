const themeBtn = document.querySelector('#themeBtn')

themeBtn.addEventListener('click', () => {
    window.document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Ativar Modo Claro'
    } else {
        themeBtn.textContent = 'Ativar Modo Escuro'
    }
})