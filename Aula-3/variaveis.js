/*

DIFEREÇAS ENTRE 'VAR' E 'LET'

1. O Escopo (Scope)
Essa é a diferença mais crítica. O escopo define onde a variável está "viva" e acessível no código.

var tem escopo de função: Se você declara uma var dentro de uma função, ela só existe ali. Mas, se declarar dentro de um if ou um for, ela "vaza" para fora do bloco e fica acessível em toda a função.

let tem escopo de bloco: O let respeita as chaves { }. Se você criar um let dentro de um if, for ou while, ele só existirá dentro daquele par de chaves específico.

2. Hoisting (Elevação)
O Hoisting é o comportamento do JavaScript de "puxar" as declarações para o topo do código antes da execução.

var: É elevada e inicializada com undefined. Você pode tentar usar a variável antes da linha onde ela foi declarada e não receberá um erro, apenas o valor undefined.

let: Também é elevada, mas não é inicializada. Se você tentar usá-la antes da declaração, o JavaScript lançará um erro (ReferenceError). Esse período entre o início do bloco e a declaração é chamado de Temporal Dead Zone.

3. Redeclaração
var: Permite que você declare a mesma variável várias vezes no mesmo escopo sem erro nenhum. Isso pode causar bugs difíceis de encontrar em sistemas grandes.

let: Não permite a redeclaração no mesmo escopo. Se você tentar declarar let nome duas vezes, o motor do JS avisará que a variável já foi identificada.

*/