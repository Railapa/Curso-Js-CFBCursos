const btn_saudar = document.querySelector('#btn_saudar')
const mensagem_saudacao = document.querySelector('#mensagem_saudacao')

btn_saudar.addEventListener('click', () => {
    let data = new Date()
    let horas = data.getHours()

    if(horas < 12){
        mensagem_saudacao.innerHTML = `Bom Dia! São ${horas} horas!`
    } else if(horas >= 12 && horas < 18){
        mensagem_saudacao.innerHTML = `Boa Tarde! São ${horas} horas!`
    } else {
        mensagem_saudacao.innerHTML = `Boa Noite! São ${horas} horas!`
    }
})