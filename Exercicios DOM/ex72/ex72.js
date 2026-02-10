const status = [...document.querySelectorAll('.status-epi')]
const btn = document.querySelector('#btn-validar-epi')
const msg = document.querySelector('#feedback-epi')

const removerClasse = () => {
    msg.classList.remove('perigo-epi')
}

btn.addEventListener('click', () => {
    const statusVerdadeiro = status.every((el) => {
        return el.value === 'sim' 
    })

    if(statusVerdadeiro){
        removerClasse()
        msg.innerHTML = 'Acesso Liberado!" com a classe de sucesso'
        msg.classList.add('sucesso-epi')
    } else {
        msg.innerHTML = "ERRO: Verifique os itens de segurança!"
        msg.classList.add('perigo-epi')
    }
})