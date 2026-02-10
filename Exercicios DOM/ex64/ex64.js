const btn = document.querySelector('#btn-media')
const resultado = document.querySelector('#res-bimestre')
const notas = [8, 7, 10, 9]
btn.addEventListener('click', () => {
    const somaNotas = notas.reduce((ant, atu) => {
        return ant + atu
    })

    const mediaNotas = somaNotas / notas.length

    resultado.innerHTML = `Média: ${mediaNotas.toFixed(1)}`
})