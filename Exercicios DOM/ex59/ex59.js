const temperaturas = [25, 28, 45, 30]
const btn = document.querySelector('#btn-checar')
const resultado = document.querySelector('#msg-alerta')

btn.addEventListener('click', () => {
    const temperatura40 = temperaturas.some((el, ind) => {
        return el >= 40
    })

    if(temperatura40){
        resultado.innerHTML = `ALERTA: Sensor detectou temperatura acima de 40°C!`
        resultado.classList.add('perigo')
    } else {
        resultado.innerHTML = `Ambiente Estável`
    }
})