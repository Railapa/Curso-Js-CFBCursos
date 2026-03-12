const input_nome = document.querySelector('#input_nome')
const btn_adicionar = document.querySelector('#btn_adicionar')
const lista_vip = document.querySelector('#lista_vip')

const listaSet = new Set()

btn_adicionar.addEventListener('click', () => {
    const nome = input_nome.value.trim()

    if(listaSet.has(nome)){
        alert(`${nome} Já está na lista!`)
    } else if(input_nome.value == ''){
        alert('Por favor, digite um nome')
    } else {
        listaSet.add(nome)
        lista_vip.innerHTML += `${nome} <br/>`
    }
})