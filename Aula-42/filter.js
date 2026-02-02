
const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((valor, indice, array) => {
    if (valor >= 18) {
        return valor
    }
})

console.log(idades)
console.log(maior)

/*
1. O que é o filter()?
O filter() é um método que percorre (itera) todos os elementos de um array e cria um novo array contendo apenas os elementos que passarem por um "teste" ou critério definido por você.

Ele não altera o array original.

Ele retorna um novo array filtrado.

2. Como ele funciona?
Para cada elemento do array, o filter() executa uma função. Se essa função retornar true (verdadeiro) para o elemento, ele é incluído no novo array; se retornar false, ele é descartado.

A função que o filter() executa pode receber três parâmetros:

Valor (val): O conteúdo do elemento atual (ex: um número ou um texto).

Índice (i): A posição do elemento no array (0, 1, 2...).

Array (arr): O array completo que está a ser filtrado. Normalmente, usamos apenas o primeiro parâmetro (o valor).

3. Exemplo Prático da Aula
O professor utiliza um array de idades para ilustrar o conceito:

JavaScript
    const idades = [15, 21, 30, 17, 18, 44, 12, 50];

// Filtrando apenas quem tem 18 anos ou mais
    const maior = idades.filter((val) => {
        if (val >= 18) {
            return val; // O elemento passa no teste
        }
    });

Neste exemplo, o novo array maior conterá apenas os números que são maiores ou iguais a 18.

4. Formas de Escrever
O professor mostra que você pode:

Criar uma função separada e passá-la para o filter.

Usar uma Arrow Function diretamente dentro do método, o que torna o código muito mais curto e limpo.

Dica de Ouro: O filter() é como um "peneira". Você define o tamanho dos furos da peneira (a lógica do if) e ele te entrega apenas o que ficou retido (o que é verdadeiro).
*/