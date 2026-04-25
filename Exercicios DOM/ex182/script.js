const planoBásico = document.querySelector('#planoBásico')
const planoPremium = document.querySelector('#planoPremium')

planoBásico.addEventListener('click', () => {
    planoPremium.classList.remove('selecionado')
    planoBásico.classList.add('selecionado')
})

planoPremium.addEventListener('click', () => {
    planoBásico.classList.remove('selecionado')
    planoPremium.classList.add('selecionado')
})