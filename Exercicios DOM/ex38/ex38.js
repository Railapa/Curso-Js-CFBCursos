const btn = document.querySelector('#btn-alerta')
const container = document.querySelector('#container-alertas')
let contador = 1

btn.addEventListener('click', () => {
    const alerta = document.createElement('div')
    alerta.setAttribute('class', 'alerta')
    alerta.innerHTML = `Alerta numero ${contador}`
    contador++
    container.appendChild(alerta)

    alerta.addEventListener('click', () => {
        container.removeChild(alerta)
    })
})
