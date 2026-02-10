const equipe = ["Ana", "Bruno", "Carlos", "Diana"]
const btn = document.querySelector('#btn-gerar')
const resultado = document.querySelector('#txt-creditos')

btn.addEventListener('click', () => {
    const juntarEquipe = equipe.reduce((ant, atu) => {
        return ant + ', ' + atu
    })

    resultado.innerHTML = `Agradecimentos especiais a: ${juntarEquipe}`
})