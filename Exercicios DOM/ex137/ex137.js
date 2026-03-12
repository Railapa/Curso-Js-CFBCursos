const input_item = document.querySelector('#input_item')
const btn_engadir = document.querySelector('#btn_engadir')
const lista_visual = document.querySelector('#lista_visual')
const total_itens = document.querySelector('#total_itens')

const itensMochila = new Set()
let contador = 0

btn_engadir.addEventListener('click', () => {
    const item = input_item.value 

    if(itensMochila.has(item)){
        alert(`O item ${item} já está na mochila.`)
    } else if(item === ''){
        alert('Por favor, digite um item')
    } else {
        itensMochila.add(item)
        lista_visual.innerHTML += `<li>${item}</li> <br/>`
        total_itens.innerHTML = ++contador
    }

    input_item.value = ''
    input_item.focus()
})