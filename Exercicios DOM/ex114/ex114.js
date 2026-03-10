const btn_verificar = document.querySelector('#btn_verificar')
const status_seguranca = document.querySelector('#status_seguranca')
const mala = ["Telemóvel", "Faca", "Casaco", "Livro"];

btn_verificar.addEventListener('click', () => {
    const scan = mala.some((val) => {
        const itemFormatado = val.toLowerCase()
        return itemFormatado == 'faca' || itemFormatado == 'explosivo'
    })

    if(scan){
        status_seguranca.innerHTML = `EMBARQUE NEGADO! Item perigoso detetado.`
        status_seguranca.classList.add('perigo')
    } else {
        status_seguranca.classList.remove('perigo')
        status_seguranca.innerHTML = '✅ MALA LIMPA. Boa viagem!'
        status_seguranca.classList.add('limpo')
    }
})