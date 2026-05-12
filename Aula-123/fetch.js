const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_press = document.querySelector('#p_press')

const obeterDados = () => {
const endpoint = "http://localhost:3000"
fetch(endpoint)
.then(res => res.json())
.then(dados => {
    console.log(dados)
    p_temp.innerHTML = 'Temperatura: ' + dados.temperatura
    p_nivel.innerHTML = 'Nível: ' + dados.nivel
    p_press.innerHTML = 'Preesão: ' + dados.pressao
})
}

let intervalo = setInterval(obeterDados, 2000)