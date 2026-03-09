const lista_precos = document.querySelector('#lista_precos')
const btn_reajuste = document.querySelector('#btn_reajuste')
const precosAntigos = [100, 250, 500, 1000];

precosAntigos.map((el) => {
    lista_precos.innerHTML += `$ ${el} <br/>`
})

btn_reajuste.addEventListener('click', () => {
    lista_precos.innerHTML = ''
    precosAntigos.map((el) => {
        lista_precos.innerHTML += `$ ${(el * 1.10).toFixed(2)} <br/>`
    })
})