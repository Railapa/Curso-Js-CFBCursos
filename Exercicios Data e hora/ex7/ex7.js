const btn_checar = document.querySelector('#btn_checar')
const msg = document.querySelector('#msg')
const circulo = document.querySelector('#circulo')

btn_checar.addEventListener('click', () => {
    let data = new Date()
    let horas = data.getHours()

    if(horas < 12){
        circulo.classList.add('manha')
        msg.innerHTML = `Bom Dia! São ${horas} horas.`
        document.body.style.backgroundColor = '#f1c40f'
    } else if(horas >= 12 && horas < 18){
        circulo.classList.add('tarde')
        msg.innerHTML = `Boa Tarde! São ${horas} horas.`
        document.body.style.backgroundColor = '#e67e22'
    } else {
        circulo.classList.add('noite')
        msg.innerHTML = `Boa Noite! São ${horas} horas.`
        document.body.style.backgroundColor = '#2c3e50'
    }
})