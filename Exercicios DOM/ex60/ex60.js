const inputID = document.querySelector('#id-busca')
const btn = document.querySelector('#btn-buscar')
const sensores = [...document.querySelectorAll('.sensor')]
const resultado = document.querySelector('#feedback')

const removerDestaque = () => {
    sensores.map((el) => {
        el.classList.remove('destaque')
    })
}

btn.addEventListener('click', () => {
    const sensorEncontrado = sensores.find((el) => {
        return el.dataset.id == inputID.value 
    })

    if(sensorEncontrado){
        removerDestaque()
        resultado.innerHTML = `Sensor ${sensorEncontrado.innerHTML} encontrado!`
        sensorEncontrado.classList.add('destaque')
    } else {
        resultado.innerHTML = 'ID invalido'
    }

    inputID.focus()
})