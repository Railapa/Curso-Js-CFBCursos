const busca = document.querySelector('#busca')
const contador = document.querySelector('#contador')
const grade = document.querySelector('#grade')


const destinos = [
    {
        nome: 'Salvador',
        preco: 200
    },

    {
        nome: 'Rio de Janeiro',
        preco: 300
    },

    {
        nome: 'Refice',
        preco: 170
    },

    {
        nome: 'Natal',
        preco: 220
    },
]

const gerarCards = (lista) => {
    grade.innerHTML = ''

    lista.forEach(item => {
        const div = document.createElement('div')
        div.setAttribute('class', 'card')
        div.innerHTML += `<h3>${item.nome}</h3> <br/> <span>Preço: ${item.preco}</span>`

        div.addEventListener('click', () => {
            div.classList.toggle('selecionado')
            contador.innerHTML = document.querySelectorAll('.card.selecionado').length
        })

        grade.appendChild(div)

    })
}

const buscar = () => {
    let textFilter = busca.value.toLowerCase()

    const filtro = destinos.filter(el => {
        return el.nome.toLowerCase().includes(textFilter)
    })

    gerarCards(filtro)
}

gerarCards(destinos)
busca.addEventListener('input', buscar)