const input_filme = document.querySelector('#input_filme')
const btn_consultar = document.querySelector('#btn_consultar')
const detalhes_filme = document.querySelector('#detalhes_filme')

const filmes = [
    { titulo: "Matrix", sinopse: "Um programador descobre que a realidade é uma simulação." },
    { titulo: "Shrek", sinopse: "Um ogro tem sua paz invadida por personagens de contos de fadas." },
    { titulo: "Nemo", sinopse: "Um peixe-palhaço cruza o oceano para encontrar seu filho." }
];

btn_consultar.addEventListener('click', () => {
    const sinopseFilme = filmes.find((val) => {
        return input_filme.value.toUpperCase() === val.titulo.toUpperCase()
    })

    if(sinopseFilme){
        detalhes_filme.innerHTML = sinopseFilme.sinopse
    } else {
        detalhes_filme.innerHTML = 'Filme não disponivel'
    }
})