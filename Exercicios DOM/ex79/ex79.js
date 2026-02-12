let mochila = [
    ["Espada", "Escudo"], // Linha 0: Combate
    ["Poção", "Comida"]   // Linha 1: Consumíveis
]
const btn = document.querySelector('#btn-trocar')
const msg = document.querySelector('#item-mao')
mochila.shift()
mochila.unshift(["Cajado", "Pergaminho"])

btn.addEventListener('click', () => {
    msg.innerHTML = mochila[0][1]
})