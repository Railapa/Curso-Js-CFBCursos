const btn_agendar = document.querySelector('#btn_agendar')
const resultado = document.querySelector('#resultado')

const diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"]

btn_agendar.addEventListener('click', () => {
    let data = new Date()
    
    let dia = data.getDay()
    let horas = data.getHours()
    
    let podeAgendar = true
    
    if(dia == 0  || dia == 6){
        podeAgendar = false
    } if(horas < 9 || horas >= 17){
        podeAgendar = false
    }
    
    if(podeAgendar == true){
        resultado.innerHTML = `Agendamento realizado com sucesso para o dia ${dia}, às ${horas} horas`
        resultado.classList.add('valido')
    } else {
        resultado.innerHTML = 'Desculpe, estamos fora do horario de funcionamento (Seg-Sex, 09h às 17h)'
        resultado.classList.add('invalido')
    }

})