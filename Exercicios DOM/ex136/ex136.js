const input_nome = document.querySelector('#input_nome')
const btn_registrar = document.querySelector('#btn_registrar')
const total_tentativas = document.querySelector('#total_tentativas')
const total_unicos = document.querySelector('#total_unicos')
let contador = 0

const listaSet = new Set()
btn_registrar.addEventListener('click', () => {

    if(input_nome.value === ''){
        alert('Por favor, digite um nome')
    }

    contador++
    total_tentativas.innerHTML = contador

    if(listaSet.has(input_nome.value)){
        alert(`O ${input_nome.value} já está na lista`)
    } else {
        listaSet.add(input_nome.value)
    }

    total_unicos.innerHTML = listaSet.size
})