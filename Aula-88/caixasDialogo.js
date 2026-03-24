const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click', () => {
    alert('Olá! Tudo bem?')
})

btn_confirm.addEventListener('click', () => {
    confirm('Está conseguindo evoluir em JavaScript?')
})

btn_prompt.addEventListener('click', () => {
    prompt('Qual o seu nome?')
})