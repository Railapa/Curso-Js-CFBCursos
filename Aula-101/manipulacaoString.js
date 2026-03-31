let nome = 'Bruno'
let canal = new String('CFB Cursos')

// Retorna o caractere na posição informada nas aspas
console.log(nome.charAt(0)) 

// Retorna o codigo ASCII/Unicode do caractere na posição informada nas aspas
console.log(nome.charCodeAt(0))

// Junta o 'nome' com o 'canal'
//IMPORTANTE: Isso não muda a variavel 'nome', apenas gera um novo textp temporario
console.log(nome.concat(canal))

//Para realmente alterar o valor da variavel, precisamos atribuir o retorno:
nome = nome.concat(canal) // Agora 'nome' passara a valer 'BrunoCFB Cursos'

let nomeCompleto = 'Bruno Pinho Campos'

// Procura a PRIMEIRA vez que a letra 'o' aparece
console.log(nomeCompleto.indexOf('o'))

// Procura a ULTIMA vez que a letra 'o' aparece 
console.log(nomeCompleto.lastIndexOf('o'))

// Se pesquisarb algo que NAO existe, o retorno é sempre -1
console.log(nomeCompleto.lastIndexOf('y'))