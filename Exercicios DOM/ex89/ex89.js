const btn_topo = document.querySelector('#btn-topo')
const btn_fundo = document.querySelector('#btn-fundo')
const btn_tirar_topo = document.querySelector('#btn-tirar-topo')
const btn_tirar_fundo = document.querySelector('#btn-tirar-fundo')
const input_fruta = document.querySelector('#input-fruta')
const display_lista = document.querySelector('#display-lista')
let frutas = []

const mostrar = () => {
    display_lista.innerHTML = frutas.join(" - ")
}

btn_topo.addEventListener('click', () => {
    if(input_fruta.value != ''){
       frutas.unshift(input_fruta.value)
       mostrar()
    }

    input_fruta.value = ''
    input_fruta.focus()
})

btn_fundo.addEventListener('click', () => {
    if(input_fruta.value != ''){
        frutas.push(input_fruta.value)
        mostrar()
    }

    input_fruta.value = ''
    input_fruta.focus()
})

btn_tirar_topo.addEventListener('click', () => {
        frutas.shift()
        mostrar()

    input_fruta.value = ''
    input_fruta.focus()
})

btn_tirar_fundo.addEventListener('click', () => {
        frutas.pop()
        mostrar()

    input_fruta.value = ''
    input_fruta.focus()
})