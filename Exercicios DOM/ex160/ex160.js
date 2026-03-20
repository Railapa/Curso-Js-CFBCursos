const status_missao = document.querySelector('#status_missao')
const lista_sistemas = document.querySelector('#lista_sistemas')
const btn_lancar = document.querySelector('#btn_lancar')

const sistemas = [
    { nome: "Oxigênio", status: "OK" },
    { nome: "Propulsão", status: "OK" },
    { nome: "Comunicação", status: "Crítico" },
    { nome: "Navegação", status: "OK" }
]

btn_lancar.addEventListener('click', () => {
    lista_sistemas.innerHTML = ''
    const critico = sistemas.every((val) => {
        return val.status === 'OK'
    })

    if (critico) {
        lista_sistemas.classList.remove('critico')
        lista_sistemas.innerHTML = `<div class="sistema-item"> DECOLAGEM AUTORIZADA! 🚀 </div>`
        lista_sistemas.classList.add('ok')
    } else {
        lista_sistemas.classList.add('critico')
        lista_sistemas.innerHTML = ` <div class="sistema-item"> LANÇAMENTO ABORTADO: FALHA NO SISTEMA! 🛑 </div>`
    }
})