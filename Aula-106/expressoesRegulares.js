let nome = 'Bruno Pinho Campos 1978'
let nome2 = 'Brunoooooo Pinho Campossssss 1978'
let numeros = '1, 10, 100, 1000'
let email = 'bruno@bruno.com.br'

// Procura 'pinho' ignorando se o 'p' é maiusculo ou minusculo
// Resultado: 6 (posição de Pinho)
console.log(nome.search(/pinho/i))

// Procura TODAS as letras 'o' na string
//Resultado: Array ['o', 'o', 'o']
console.log(nome.match(/o/g))

// Subistitui TODAS as letras 'o' por 'teste'
// Resultado: 'Brunteste Pinhteste Camptestes' 
console.log(nome.replace(/o/g, 'teste'))

// Uso de colchetes: Busca qualquer 'o' ou 'h' globalmente e ignorando caixa 
// Resultado: Array com todos os 'o' e 'h' encontrados
console.log(nome.match(/[oh]/ig))

// Faixas: Busca letras de 'a' até 'm' e numeros de '0' a '9'
// O 'Traço' signifca OU, ex: encontre de 'a' ate 'n' OU (|) encontre de 0 ate 9
console.log(nome.match(/[a-n|0-9]/ig))
console.log(nome.match(/[0-9]/ig))

/* ----- METACARACTERES ------ */

// Busca apenas digitos numericos
console.log(nome.match(/\d/g))

// Busca espaços em brancos 
console.log(nome.match(/\s/g))

// Representa uma "fronteira" ou limite de palavra. Ele garante que o motor de busca só encontre o caractere se ele estiver no início ou no fim de uma palavra isolada, e não no meio de outra. No exemplo /\bP/ig, ele busca a letra "P" apenas quando ela inicia uma palavra.
console.log(nome.match(/\bP/ig))


/* ----- QUANTIFICADORES ------ */

// Agrupa caracetres iguais que aparecem em sequencia 
// Se houver 'ooo', ele caotura como um unico item 'ooo' em vez de tres 'o'
console.log(nome2.match(/o+/ig))
console.log(numeros.match(/10+/ig))

// Significa "zero ou mais". Ele é ganancioso; se encontrar o caractere, pega todos os que estiverem em sequência, mas se não encontrar, ele não quebra o código, apenas retorna que encontrou "zero".
console.log(numeros.match(/10*/ig))

// Significa "zero ou um". Ele torna o caractere anterior opcional. É muito usado para palavras que podem ter plural ou variações (ex: /carros?/ encontraria tanto "carro" quanto "carros").
console.log(numeros.match(/10?/ig))



/* 
i (Ignore Case): Faz com que a busca não diferencie maiúsculas de minúsculas. [03:05]

g (Global): Faz com que a busca encontre todas as ocorrências do padrão, não apenas a primeira. [04:45]
*/