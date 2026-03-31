let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campos')
let canal = new String('CFB Cursos')

// Verifica se começa com 'Bruno' -> retorna true
console.log(nome.startsWith('Bruno'))

// Verifica se termina com 'Campos' -> retorna true
console.log(nome.endsWith('Campos'))

// Verifica se a sequencia 'Pinho' existe em qualquer lugar
console.log(nome.includes('Pinho'))

// Repete a string conforme ao informado em aspas, nesse caso: repete a string 3 vezes
console.log(nome.repeat(3))

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5))

// Transforma codigos em letras, justamente ao contrario do charCodeAt, que retorna o codigo da letra
console.log(String.fromCodePoint(66))
console.log(String.fromCodePoint(114))
console.log(String.fromCodePoint(117))
console.log(String.fromCodePoint(110))
console.log(String.fromCodePoint(111))
console.log(String.fromCodePoint(32))