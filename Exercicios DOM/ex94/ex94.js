const btn_aba = document.querySelector('#btn_aba')
const painel = document.querySelector('#painel')

btn_aba.addEventListener('click', (evt) => {
    painel.classList.toggle('painel_exibir')
    if(painel.classList.contains('painel_exibir')){
        evt.target.setAttribute('src', 'seta13.svg')
    } else {
        evt.target.setAttribute('src', 'seta22.svg')
    }
})