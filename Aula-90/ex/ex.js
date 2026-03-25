const display_frutas = document.querySelector('#display-frutas')

const frutas = {
    nome: 'Abacaxi', 
    cor: 'Amarelo', 
    preco: 'R$ 10,00',

    detalhes(){
        return `Nome: ${this.nome} <br/> ${this.cor} <br/> ${this.preco}`
    }
}

const cesto = [
    {nome: 'Banana', cor: 'Amarela', preco: 'R$ 8,30'},
    {nome: 'Uva', cor: 'Roxa', preco: 'R$ 12,50'},
    {nome: 'Laranja', cor: 'Laranja', preco: 'R$ 6,60'}
]

cesto.forEach((f) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'fruta-card')
    div.innerHTML += `${f.nome}, <br/> ${f.cor}, <br/> ${f.preco} <br/>`
    display_frutas.appendChild(div)
})