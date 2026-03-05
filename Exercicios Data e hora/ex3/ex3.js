const btn_verificar = document.querySelector('#btn_verificar')
const status_dia = document.querySelector('#status_dia')

btn_verificar.addEventListener('click', () => {
    let data = new Date()
    let dia = data.getDay()

    if(dia >= 1 && dia <= 5){
        status_dia.innerHTML = "Dia de trabalho! Foco nos estudos! 💻"
    } else {
        status_dia.innerHTML = "Hoje é fim de semana! Descansa! 😴"
    }
})