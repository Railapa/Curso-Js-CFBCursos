const depositos = [10, 5, 15, 20]
const btn = document.querySelector('#btn-reduzir')
const resultado = document.querySelector('#resultado-total')

btn.addEventListener('click', () => {
    const reducao = depositos.reduce((ant, atu) => {
        console.log(`Anterior: ${ant} | Atual: ${atu}`)
        return ant + atu
    })

    resultado.innerHTML = reducao
    resultado.style.display = 'block'
})