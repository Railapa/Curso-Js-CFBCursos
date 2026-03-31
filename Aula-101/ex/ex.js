const dadosUsuario = {
    nome: "Bruno Pinho Campos",
    email: "professor@cfbcursos.com.br"
};

console.log(dadosUsuario.email.indexOf('@'))
console.log(dadosUsuario.email.lastIndexOf('.'))

console.log(dadosUsuario.nome.charAt(0))

console.log(dadosUsuario.nome.charCodeAt(0))

console.log(dadosUsuario.nome.concat(', seu email é: ' + dadosUsuario.email))