const vitrine = document.querySelector('#vitrine')

class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    gerarCard(local){
        this.local = document.querySelector(local)
        const div = document.createElement('div')
        div.setAttribute('class', 'novadiv')
        div.innerHTML = `Nome: ${this.nome} <br/> Preço ${this.preco}`
        vitrine.appendChild(div)
        const btnComprar = document.createElement('button')
        btnComprar.setAttribute('class', 'btnComprar')
        btnComprar.innerHTML = 'Comprar'
        div.appendChild(btnComprar)
        btnComprar.addEventListener('click', () => {
            div.style.backgroundColor = 'yellow'
            btnComprar.innerHTML = 'No Carrinho'
        })
    }
}

const produtos = [new Produto('teclado', 200), new Produto('mouse', 120), new Produto('monitor', 650)]

produtos.map((el) => [
    el.gerarCard()
])