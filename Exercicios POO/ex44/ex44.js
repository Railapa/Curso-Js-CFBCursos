class Conteudo{
    constructor(titulo, categoria){
        this.titulo = titulo
        this.categoria = categoria

        if(this.constructor === Conteudo){
            throw new TypeError('A classe "Conteudo" não pode ser implementada')
        }
        if(this.reproduzir === undefined){
            throw new TypeError('O metodo reprozir deve ser implementado')
        }
    }

    detalhes(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`<br/> Categoria: ${this.categoria}`)
    }
}

class Filme extends Conteudo{
    constructor(titulo, categoria, duracao){
        super(titulo, categoria)
        this.duracao = duracao
    }

    reproduzir(){
        console.log(`🎬 A reproduzir o filme ${this.titulo}... Duração: ${this.duracao} min.`)
    }
}

class Serie extends Conteudo{
    constructor(titulo, categoria, episodios){
        super(titulo, categoria)
        this.episodios = episodios
    }

    reproduzir(){
        console.log(`📺 A iniciar a série ${this.titulo}... Esta temporada tem ${this.episodios} episódios.`)
    }
}

class Podcast extends Conteudo{
    constructor(titulo, categoria){
        super(titulo, categoria)
    }
}

const f1 = new Filme('Gente Grande', 'Comédia', 100)
const s1 = new Serie('breaking bad', 'Drama', 62)

const lista_conteudos = [f1, s1]

lista_conteudos.map((el) => {
    el.reproduzir()
})

const p1 = new Podcast('Flow Podcast', 'Entretenimento')
const c1 = new Conteudo('teste', 'teste')