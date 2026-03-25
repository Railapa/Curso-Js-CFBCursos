const btn_clonar = document.querySelector('#btn_clonar')
const btn_herdar = document.querySelector('#btn_herdar')
const vitrine = document.querySelector('#vitrine')

const modelo = {
    nome: 'Base',
    cor: 'Cinza',
    level: 1,

    info(){
        return `Nome: ${this.nome} <br/> Cor: ${this.cor} <br/> Level: ${this.level}`
    }
}

btn_clonar.addEventListener('click', () => {
    const clone1 = Object.assign({}, modelo)

    vitrine.innerHTML = clone1.info()
})

btn_herdar.addEventListener('click', () => {
    const clone2 = Object.create(modelo)
    clone2.cor = 'Azul'

    vitrine.innerHTML = clone2.info()
})

delete(modelo.level)