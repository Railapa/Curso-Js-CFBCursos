const caixa1 = document.querySelector('#caixa1')

console.log(caixa1.children) //Retorna uma coleção apenas com os elementos HTML filhos (ignora textos e espaços).

console.log(caixa1.firstChild) //Pega diretamente o primeiro elemento filho da lista.
console.log(caixa1.firstElementChild)

console.log(caixa1.lastChild) //Pega o último elemento filho.
console.log(caixa1.lastElementChild)

console.log(document.getRootNode()) //Método que retorna o nó raiz, que geralmente é o próprio document.

console.log(document.parentElement) //Sobe um nível na árvore para encontrar o pai do elemento atual.

console.log(document.parentNode) // Sobe um nível na árvore para encontrar o pai do elemento atual.

console.log(document.nextSibling) //Encontra o próximo "irmão" na lista.

console.log(document.ownerDocument) //Propriedade que aponta para o documento ao qual o elemento pertence.

/*
1. A Árvore de Relações (Parentesco)
O professor explica que o DOM funciona como uma árvore genealógica:

Parent (Pai): É o elemento que contém outros dentro dele. Se você tem uma div com cursos, a div é o parent.

Child (Filho): São os elementos que estão dentro de um pai. Cada curso é um child da div principal.

Siblings (Irmãos): São elementos que compartilham o mesmo pai. Todos os cursos na mesma lista são siblings entre si.

2. Propriedades de Navegação no JS
Para navegar por essa árvore, ele apresenta propriedades específicas que você usará muito:

children: Retorna uma coleção apenas com os elementos HTML filhos (ignora textos e espaços).

firstElementChild: Pega diretamente o primeiro elemento filho da lista.

lastElementChild: Pega o último elemento filho.

parentElement ou parentNode: Sobe um nível na árvore para encontrar o pai do elemento atual.

nextElementSibling: Encontra o próximo "irmão" na lista.

3. Diferença Crucial: Element vs Node
O professor faz um alerta importante sobre como o JavaScript "enxerga" a página:

Se você usar apenas firstChild ou lastChild, o JavaScript pode retornar um texto (como um espaço em branco ou quebra de linha no seu código HTML).

Para garantir que você está pegando uma tag HTML (como uma div), você deve sempre preferir as propriedades que contêm a palavra Element (ex: firstElementChild).

4. Métodos de Raiz
Ele também mostra como identificar o dono do elemento:

getRootNode(): Método que retorna o nó raiz, que geralmente é o próprio document.

ownerDocument: Propriedade que aponta para o documento ao qual o elemento pertence.
*/