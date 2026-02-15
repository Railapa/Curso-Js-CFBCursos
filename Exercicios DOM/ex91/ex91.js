const input_convidados = document.querySelector('#input-convidado')
const btn_adicionar = document.querySelector('#btn-adicionar')
const lista_visual = document.querySelector('#lista-visual')
const total_convidados = document.querySelector('#total-convidados')

const clube = new Set()

btn_adicionar.addEventListener('click', () => {
    const nome = input_convidados.value.toLowerCase()
    if(input_convidados.value != ''){
        clube.add(nome)
        lista_visual.innerHTML = [...clube].join(" - ")
        total_convidados.innerHTML = `Total de pessoas únicas: ${clube.size}`
    }

    input_convidados.value = ''
    input_convidados.focus()
})