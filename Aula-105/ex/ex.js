const postagem = {
    usuario: "Bruno_Pinho",
    comentario: "Este curso de JAVASCRIPT é muito bom! javascript é fácil, JavascripT é vida!",
    palavraChave: "javascript"
}

console.log(postagem.comentario.search(/javascript/i)) 

console.log(postagem.comentario.match(/javascript/ig))

console.log(postagem.comentario.replace(/a/ig, '@'))

console.log(postagem.comentario.replace(/javascript/ig, 'JS'))