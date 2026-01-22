/* 
1. O Conceito de querySelector e querySelectorAll
Seletor Genérico: Diferente dos métodos anteriores que são específicos para IDs, classes ou tags, estes métodos são genéricos. Você pode usar qualquer seletor CSS válido (ex: div > p, .classe, #id).

Sintaxe CSS: É obrigatório usar os prefixos de CSS: # para IDs e . para classes. Exemplo: document.querySelector("#c1") ou document.querySelector(".curso").

2. Manipulação e Retorno
NodeList: O querySelectorAll retorna uma NodeList. Embora pareça um array, para usar métodos modernos como .map(), muitas vezes ainda é necessário converter ou usar loops.

Especificidade: Você pode fazer buscas aninhadas, como pegar um parágrafo que está dentro de uma div específica: document.querySelector("div p").

Comparativo: getElementById vs querySelector
A aula ajuda a entender quando usar cada um:

getElementById: É mais rápido e direto para quando você sabe o nome único (ID) do elemento. Não precisa de #.

querySelector: É muito mais flexível. Use quando precisar de seletores complexos (ex: "o primeiro item da lista com a classe X que está dentro de uma DIV").

Dica para os seus estudos: Como você já está familiarizado com o +=, o querySelector será seu melhor amigo para encontrar exatamente o lugar onde você quer "somar" um novo texto na tela.
*/

const divTodas = [...document.getElementsByTagName('div')]
const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

const query_divTodas = [...document.querySelectorAll('div > p')] // divs que tem o elemento p dentro delas
const query_cursoTodos = [...document.querySelectorAll('.curso')]
const query_cursoC1 = [...document.querySelectorAll('.c1')]
const query_cursosC2 = [...document.querySelectorAll('.c2')]
const query_cursoEspecial = [...document.querySelectorAll('#c1, p')]

 console.log(query_cursoEspecial)