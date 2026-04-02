const postagem = {
    usuario: "Bruno_Pinho",
    comentario: "Este curso de JAVASCRIPT é muito bom! javascript é fácil, JavascripT é vida!",
    palavraChave: "javascript",
    numeros: 'Bruno Pinho Campos 122385821'
}


console.log(postagem.comentario.search(/javascript/i)) 
console.log('--------------------')

console.log(postagem.comentario.match(/javascript/ig))
console.log('--------------------')

console.log(postagem.comentario.replace(/a/ig, '@'))
console.log('--------------------')

console.log(postagem.comentario.replace(/javascript/ig, 'JS'))
console.log('--------------------')

console.log(postagem.comentario.match(/[oc]/ig))
console.log('--------------------')

console.log(postagem.comentario.match(/[a-c]/ig))
console.log('--------------------')

console.log(postagem.numeros.match(/[1-4]/ig))
console.log('--------------------')

console.log(postagem.numeros.match(/\d/ig))
console.log('--------------------')

console.log(postagem.comentario.match(/\s/ig))
console.log('--------------------')

console.log(postagem.comentario.match(/\bj/ig))
console.log('--------------------')

console.log(postagem.comentario.match(/javascript?/ig))