const btn_verificar = document.querySelector('#btn_verificar')
const resultado_ano = document.querySelector('#resultado_ano')

btn_verificar.addEventListener('click', () => {
    let data = new Date()
    let ano = data.getFullYear()

    if(ano%4==0){
        resultado_ano.innerHTML = `O ano ${ano} é BISESTO (366 días)! 🎉`
        resultado_ano.classList.add('bisesto')
    } else {
        resultado_ano.innerHTML = `O ano ${ano} é um ano normal (365 dias). 📅`
        resultado_ano.classList.add('normal')
    }
})