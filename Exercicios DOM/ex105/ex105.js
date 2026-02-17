const input_titulo = document.querySelector('#input_titulo')
const input_autor = document.querySelector('#input_autor')
const input_paginas = document.querySelector('#input_paginas')
const btn_adicionar_livro = document.querySelector('#btn_adicionar_livro')
const estante_visual = document.querySelector('#estante_visual')

class Livro{
    constructor(pnome,pautor,ppaginas){
        this.nome = pnome
        this.autor = pautor
        this.paginas = ppaginas
    }

    obterNome(){
        return this.nome
    }

    obterAutor(){
        return this.autor
    }

    obterPaginas(){
        return this.paginas
    }

    tempoEstimado(){
        return this.paginas * 2
    }
}

let livros = []

const addLivro = () => {
    estante_visual.innerHTML = ''
    livros.map((el) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'card-livro')
        div.innerHTML = `Titulo: ${el.obterNome()} <br/> <br/> Autor: ${el.obterAutor()} <br/> <br/> Numero de páginas: ${el.obterPaginas()}  <p class="tempo-leitura">Leitura estimada: ${el.tempoEstimado()} minutos</p>`
        estante_visual.appendChild(div)
    })
}

btn_adicionar_livro.addEventListener('click', () => {
    const novoLivro = new Livro(input_titulo.value, input_autor.value, input_paginas.value)
    livros.push(novoLivro)
    addLivro()
})