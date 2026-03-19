const btn_lendarios = document.querySelector('#btn_lendarios')
const btn_usaveis = document.querySelector('#btn_usaveis')
const btn_todos = document.querySelector('#btn_todos')
const lista_itens = document.querySelector('#lista_itens')

const inventario = [
    { nome: "Espada de Madeira", nivel: 1, raridade: "comum" },
    { nome: "Escudo de Ferro", nivel: 3, raridade: "comum" },
    { nome: "Arco de Safira", nivel: 6, raridade: "raro" },
    { nome: "Armadura de Dragão", nivel: 10, raridade: "lendario" },
    { nome: "Anel do Infinito", nivel: 5, raridade: "lendario" },
    { nome: "Poção de Cura", nivel: 1, raridade: "comum" }
]

btn_lendarios.addEventListener('click', () => {
    lista_itens.innerHTML = ''
    const filtrarLendarios = inventario.filter((el) => {
        return el.raridade === 'lendario'
    })

    if(filtrarLendarios){
        filtrarLendarios.map((val) => {
            lista_itens.innerHTML += `<span>${val.nome}</span> <small>Nível: ${val.nivel}</small> <br/>`
        })
    }
})

btn_usaveis.addEventListener('click', () => {
    lista_itens.innerHTML = ''
    const filtrarUsaveis = inventario.filter((val) => {
        return val.nivel <= 5
    })

    if(filtrarUsaveis){
        filtrarUsaveis.map((el) => {
            lista_itens.innerHTML += `<span>${el.nome}</span> <small>Nível: ${el.nivel}</small> <br/>`
        })
    }
})

btn_todos.addEventListener('click', () => {
    lista_itens.innerHTML = ''
})