const resultado_dado = document.querySelector('#resultado_dado')
const btn_lanzar = document.querySelector('#btn_lanzar')
const maior_valor = document.querySelector('#maior_valor')

let recorde = 0

btn_lanzar.addEventListener('click', () => {
    const dado = Math.floor(Math.random() * 6 + 1)
    resultado_dado.innerHTML = dado

    recorde = Math.max(recorde, dado)
    maior_valor.innerHTML = recorde
})