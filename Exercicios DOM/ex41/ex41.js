
const btn = document.querySelector('#btn-filtrar')
btn.addEventListener('click', () => {
    const idades = [12, 18, 25, 10, 33, 45, 15, 80, 17]
    const maiores = idades.filter((valor) => {
        if (valor >= 18) {
            return valor
        }
    })
    console.log(idades)
    console.log(maiores)
})

