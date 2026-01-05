/*
Operador Spread (...)
O termo spread significa "espalhar". Este operador (representado por três pontos ...) é usado para "quebrar" coleções de dados e entregar os seus elementos individualmente.

Cópia e Junção de Arrays:
Permite copiar o conteúdo de um array para outro de forma simples: const n3 = [...n1].
Facilita a concatenação (junção) de múltiplos arrays em um só: const n3 = [...n1, ...n2].

Concatenação de Objetos:
Pode fundir objetos. Se houver propriedades com o mesmo nome, o valor do último objeto espalhado prevalecerá.
Exemplo: const jogador3 = {...jogador1, ...jogador2} criará um novo objeto com todas as propriedades de ambos.

Uso em Funções:
Permite passar um array como argumento para uma função que espera múltiplos parâmetros independentes. O spread "espalha" os valores do array nos parâmetros da função.
Transformação de HTML Collection em Array:
Esta é uma das maiores utilidades práticas. Elementos capturados do DOM (como por getElementsByTagName) retornam uma HTML Collection, que possui poucos métodos de manipulação.
Ao usar o spread: const lista = [...document.getElementsByTagName("div")], você transforma essa coleção num Array real, ganhando acesso a métodos poderosos como .map(), .filter() e .forEach().

*/


const p1 = [1, 2]
const p2 = [4, 5]
console.log(...p1, 3, ...p2)

const produto = { id: 1, nome: 'Teclado', preco: 100 };
const produtoComDesconto = { ...produto, preco: 80 }; 

console.log(produtoComDesconto);