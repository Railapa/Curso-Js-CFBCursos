let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campos')
let canal = new String('CFB Cursos')

// Compara dois objetos string, retorna 0 porque o conteudo é identico
console.log(nome.localeCompare(nome2))

// Subistitui "Pinho" por "Carvalho"
console.log(nome.replace('Pinho', 'Carvalho'))

// Procura a posição da palavra "Pinho", retorna 6(indice onde a palavra começa)
console.log(nome.search('Pinho'))

// Recorta a string do indice 6 ao 11, retorna apenas a palvra 'Pinho'
console.log(nome.slice(6, 11))

// Divide a string em pedaços onde houver um espaço (" "), transforma em um array: ['Bruno', 'Pinho', 'Campos']
console.log(nome.split(' '))

console.log(nome.split('n')) // [ 'Bru', 'o Pi', 'ho Campos' ]