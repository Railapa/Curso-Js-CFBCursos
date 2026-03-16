const post_view = document.querySelector('#post_view')
const res_titulo = document.querySelector('#res_titulo')
const res_conteudo = document.querySelector('#res_conteudo')
const res_status = document.querySelector('#res_status')
const res_likes = document.querySelector('#res_likes')
const in_titulo = document.querySelector('#in_titulo')
const in_texto = document.querySelector('#in_texto')
const btn_publicar = document.querySelector('#btn_publicar')
const btn_like = document.querySelector('#btn_like')

class Postagem{
    constructor(){
        this.like = 0
    }

    postar(titulo,conteudo){
        this.titulo = titulo
        this.conteudo = conteudo
        res_titulo.innerHTML = this.titulo
        res_status.innerHTML = 'Original'
        return res_conteudo.innerHTML = this.conteudo
    }

    darLike(){
        return ++this.like
    }
}

const novoPost = new Postagem()

btn_publicar.addEventListener('click', () => {
    novoPost.postar(in_titulo.value, in_texto.value)
})

btn_like.addEventListener('click', () => {
    res_likes.innerHTML = novoPost.darLike()
})