const btn_verificar = document.querySelector('#btn_verificar')
const txt_seculo = document.querySelector('#txt_seculo')

btn_verificar.addEventListener('click', () => {
    const data = new Date()
    let seculo = data.getFullYear()

    if(seculo >= 2001){
        txt_seculo.innerHTML = `${seculo} - Estamos no seculo XXI`
    } else {
        txt_seculo.innerHTML = `Outro seculo`
    }
})