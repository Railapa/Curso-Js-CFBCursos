const in_pergunta = document.querySelector('#in_pergunta')
const btn_perguntar = document.querySelector('#btn_perguntar')
const res_oraculo = document.querySelector('#res_oraculo')

btn_perguntar.addEventListener('click', () => {
    const pergunta = in_pergunta.value
    const destino = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    
    if(destino <= 60){
        res_oraculo.classList.remove('raro')
        res_oraculo.innerHTML = 'Sim, com certeza!'
    } else if (destino >= 61 && destino <= 90){
        res_oraculo.classList.remove('raro')
        res_oraculo.innerHTML = 'Não conte com isso.'
    } else {
         res_oraculo.innerHTML = 'O DESTINO É INCERTO!'
         res_oraculo.classList.add('raro')
    }
})