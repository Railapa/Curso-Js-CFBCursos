/* 
1. O que é o DOM e a Árvore de Elementos?
O professor explica que o DOM é uma representação da sua página HTML em forma de árvore.
Hierarquia: O HTML é a raiz (root), que tem como filhos diretos o head e o body. Dentro do body, você tem outros elementos como div, h1, script, etc..
Cada elemento nessa árvore é chamado de nó (node).

2. O Método getElementById
Esta é a sua primeira ferramenta para "pescar" um elemento do HTML e trazê-lo para o JavaScript.
Funcionamento: Você usa document.getElementById("ID_DO_ELEMENTO"). O JavaScript vai até a página, procura o elemento com aquele ID específico e o armazena em uma variável ou constante.
Importância do Console: O professor enfatiza que agora você deve testar tudo no console do navegador, pois o ambiente Node.js (VS Code puro) não possui um DOM para ser manipulado.

3. Manipulando o Elemento Capturado
Uma vez que você tem o elemento em uma variável, você pode acessar e alterar suas propriedades:
.id: Retorna o ID do elemento.
.innerHTML: É a propriedade mais usada para ler ou alterar o conteúdo de texto/HTML que está dentro daquela tag. No vídeo, o professor altera o texto de várias divs de "HTML" para "cfb cursos" dinamicamente.

4. Integração com Arrays e Loops (Revisão Prática)
A aula faz uma ponte perfeita com o que você já estudou:
Você pode capturar vários elementos individualmente e colocá-los dentro de um Array.
Loops: O professor mostra como usar o for...of e, principalmente, o .map() (que você achou confuso na aula anterior) para percorrer esse array de elementos e alterar o conteúdo de todos eles de uma só vez.
*/

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

const array = [dc1, dc2, dc3, dc4, dc5, dc6]
for(a of array){
    a.innerHTML='CFB Cursos'
}