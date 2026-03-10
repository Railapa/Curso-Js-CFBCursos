const btn_verificar = document.querySelector('#btn_verificar')
const msg_cinema = document.querySelector('#msg_cinema')

const assentos = [
    { id: 1, status: "ocupado" },
    { id: 2, status: "ocupado" },
    { id: 3, status: "livre" },
    { id: 4, status: "ocupado" }
]

btn_verificar.addEventListener('click', () => {
    const assentoLivre = assentos.some((val) => {
        return val.status == 'livre'
    })

    if(assentoLivre){
        msg_cinema.innerHTML = `Temos assentos disponiveis`
        msg_cinema.classList.add('disponivel')
    } else {
        msg_cinema.classList.remove('disponivel')
        msg_cinema.innerHTML = 'Seção lotada!'
        msg_cinema.classList.add('lotado')
    }
})