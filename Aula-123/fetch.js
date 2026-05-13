const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_press = document.querySelector('#p_press')

const obterDados = () => {
    const endpoint = "http://localhost:3000"
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML = `Temperatura: ${dados.nivel}`
        p_press.innerHTML = `Temperatura: ${dados.pressao}`
    })
}

setInterval(obterDados, 1000)