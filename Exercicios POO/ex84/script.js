const nomePeca = document.querySelector('#nomePeca')
const freqPeca = document.querySelector('#freqPeca')
const btnAdicionar = document.querySelector('#btnAdicionar')
const listaHardware = document.querySelector('#listaHardware')

class Peca{
    constructor(nome, frequencia){
        this.nome = nome
        this.frequencia = Number(frequencia)
    }

    aplicarOverclock = () => {
        this.frequencia += 500
    }
}

btnAdicionar.addEventListener('click', () => {
    const peca = new Peca(nomePeca.value, freqPeca.value)

    const li = document.createElement('li')
    const spanInfo = document.createElement('span')
    spanInfo.innerHTML = `Nome: ${peca.nome} <br/> Frequência: ${peca.frequencia}MHz `
   
    li.appendChild(spanInfo)

    const btnOver = document.createElement('button')
    btnOver.setAttribute('class', 'btn-overclock')
    btnOver.innerHTML = 'Overclock'
    li.appendChild(btnOver)
    
    btnOver.addEventListener('click', () => {
        peca.aplicarOverclock()
        spanInfo.innerHTML = `Nome: ${peca.nome} <br/> Frequência: ${peca.frequencia}MHz `
    })
    listaHardware.appendChild(li)
})