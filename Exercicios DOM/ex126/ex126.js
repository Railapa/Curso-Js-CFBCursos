const btn_buscar = document.querySelector('#btn_buscar')
const msg_reserva = document.querySelector('#msg_reserva')

const quartos = [
    { numero: 101, capacidade: 2, status: "livre" },
    { numero: 102, capacidade: 4, status: "ocupado" },
    { numero: 103, capacidade: 4, status: "livre" },
    { numero: 104, capacidade: 2, status: "ocupado" }
]

btn_buscar.addEventListener('click', () => {
    const quartoLivre = quartos.some((val) => {
        return val.capacidade == 4 && val.status == 'livre'
    })

    if(quartoLivre){
        msg_reserva.classList.add('disponivel')
        msg_reserva.innerHTML = '✅ Sucesso! Encontramos um quarto disponível para sua família.'
    } else {
        msg_reserva.classList.remove('disponivel')
        msg_reserva.innerHTML = '❌ Desculpe, não há quartos livres com essa capacidade no momento.'
        msg_reserva.classList.add('indisponivel')
    }
})