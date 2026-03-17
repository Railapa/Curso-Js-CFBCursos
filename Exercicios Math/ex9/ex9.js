const res_oraculo = document.querySelector('#res_oraculo')
const btn_pergunta = document.querySelector('#btn_pergunta')

btn_pergunta.addEventListener('click', () => {
    const gerarNum = Math.round(Math.random() * 2)

    if(gerarNum === 1){
        res_oraculo.innerHTML = 'SIM!'
        res_oraculo.style.color = 'green'
    } else if(gerarNum === 2){
        res_oraculo.innerHTML = 'NÃO!'
        res_oraculo.style.color = 'red'
    } else {
        res_oraculo.innerHTML = 'TALVEZ...'
        res_oraculo.style.color = 'orange'
    }
})