class Produto{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}

let estoque = [
    new Produto('Teclado'),
    new Produto('Monitor'),
    new Produto('Mouse'), 
    new Produto('Teclado')
]

console.log(estoque)

const s1 = estoque[3].id

const filtroEstoque = estoque.filter((e) => {
    return e.id != s1
})

console.log(filtroEstoque)

const s = estoque.map((el) => {
    return el.id
})

console.log(s)