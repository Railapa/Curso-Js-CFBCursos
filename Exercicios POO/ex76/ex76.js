const vitrine = document.querySelector('#vitrine')

const biblioteca = [
    {
        titulo: 'Malala', preco: 180,

        gerarHTML() {
            return `Titulo: ${this.titulo} <br/> Preço: R$ ${this.preco} <br/>`
        },

        getCategoria(){
            if(this.preco >= 150){
                return 'Premium'
            } else {
                return 'Promoção'
            }
        }
    },

    {
        titulo: 'Capitães da Areia', preco: 210,
        gerarHTML() {
            return `Titulo: ${this.titulo} <br/> Preço: R$ ${this.preco} <br/>`
        },

        getCategoria(){
            if(this.preco >= 150){
                return 'Premium'
            } else {
                return 'Promoção'
            }
        }

    },
    {
        titulo: 'Diario de um Banana', preco: 130,
        gerarHTML() {
            return `Titulo: ${this.titulo} <br/> Preço: R$ ${this.preco} <br/>`
        },

        getCategoria(){
            if(this.preco >= 150){
                return 'Premium'
            } else {
                return 'Promoção'
            }
        }
    }
]

biblioteca.forEach((bi) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'jogo-card')
    div.innerHTML = bi.gerarHTML()
    div.innerHTML += bi.getCategoria()
    vitrine.appendChild(div)
})