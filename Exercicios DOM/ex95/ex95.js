const suporte = document.querySelector('.suporte')
const janela_chat = document.querySelector('.janela_chat')
const aba_suporte = document.querySelector('.aba_suporte')

aba_suporte.addEventListener('click', (evt) => {
    suporte.classList.toggle('suporte_aberto')
})