class ItemBiblioteca{
    constructor(titulo, ano_publicacao){
        this.titulo = titulo
        this.ano_publicacao = ano_publicacao
        this.disponivel = true
        this.disponivel = 'Livro Disponivel'
    }

    emprestar(){
        this.disponivel = false
        this.disponivel = 'Livro Indisponivel'
    }

    devolver(){
        this.disponivel = true
        this.disponivel = 'Livro Disponivel'
    }
}

class Livro extends ItemBiblioteca{
    constructor(titulo, ano_publicacao, autor){
        super(titulo, ano_publicacao)
        this.autor = autor
    }

    info(){
        console.log(`${this.titulo} - Autor: ${this.autor} (${this.ano_publicacao}) - Status: ${this.disponivel}`)
    }
}

const livro1 = new Livro('Malala', 1985, 'Bruno')
const livro2 = new Livro('Capitães da Areia', 1980, 'Elias')
const livro3 = new Livro('Capitão Cueca', 200, 'Ronaldo')

livro1.emprestar()
livro3.emprestar()
const livros = [livro1, livro2, livro3]

livros.map((el) => {
    el.info()
})