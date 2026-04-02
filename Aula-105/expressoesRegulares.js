let nome = 'Bruno Pinho Campos'

// Procura 'pinho' ignorando se o 'p' é maiusculo ou minusculo
// Resultado: 6 (posição de Pinho)
console.log(nome.search(/pinho/i))

// Procura TODAS as letras 'o' na string
//Resultado: Array ['o', 'o', 'o']
console.log(nome.match(/o/g))

// Subistitui TODAS as letras 'o' por 'teste'
// Resultado: 'Brunteste Pinhteste Camptestes' 
console.log(nome.replace(/o/g, 'teste'))

/* 
i (Ignore Case): Faz com que a busca não diferencie maiúsculas de minúsculas. [03:05]

g (Global): Faz com que a busca encontre todas as ocorrências do padrão, não apenas a primeira. [04:45]
*/