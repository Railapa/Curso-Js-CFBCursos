let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campos')
let canal = new String('CFB Cursos')

// Extrai do indice 0 ate ANTES do 5, resultado: 'Bruno'
console.log(nome.substring(12, 17))

//Retorna a string toda em MAIUSCULAS
console.log(nome.toUpperCase())

// Retorna a string toda em minusculas
console.log(nome.toLowerCase())

// Retorna o valor do texto puro do objeto String
console.log(nome.valueOf())

const n1 = 10
// Converte 10 (number) para '10' (string)
console.log(typeof(n1.toString()))