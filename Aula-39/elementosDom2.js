const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.curso')]

console.log(cursos[0].hasChildNodes()) // Verifica se o elemento possui filhos


console.log(cursos[0].children.length > 0 ? 'Possui filhos' : 'Não possui filhos') // Forma mais eficiente para verificar se um elemnto possui filhos

caixa1.firstElementChild.innerHTML = 'HTML5'
caixa1.children[1].innerHTML = 'CSS3'
caixa1.lastElementChild.innerHTML = 'Node JS'

/* 
1. Verificando a Existência de Filhos
O professor apresenta formas de checar se um elemento possui conteúdo interno:

hasChildNodes(): Este método retorna true se o elemento possuir filhos. Contudo, ele pode retornar true mesmo que o "filho" seja apenas um texto ou espaço em branco (nó de texto).

children.length > 0: Esta é uma forma mais eficiente para verificar especificamente por elementos HTML. Se o comprimento da coleção children for maior que zero, significa que existem tags filhas dentro do elemento.

2. Navegação em Múltiplos Níveis (Pai e Avô)
Uma das partes mais interessantes da aula é como "subir" na árvore do DOM para encontrar ancestrais:

parentElement ou parentNode: Retornam o pai direto do elemento atual.

Encadeamento: É possível encadear essas propriedades para ir mais longe. Por exemplo, el.parentNode.parentNode permite acessar o "avô" de um elemento.

Navegação Complexa: O professor demonstra que, a partir de um elemento filho, você pode subir até o avô e, a partir daí, descer novamente para encontrar um "tio" ou "primo" usando children[indice].

3. Manipulação Direta via Relação
Você pode alterar o conteúdo ou estilo de um elemento baseando-se na sua posição relativa:

firstElementChild.innerHTML: Permite mudar o conteúdo do primeiro filho de um container.

children[n]: Permite acessar e modificar um filho específico através do seu índice na lista (lembrando que a contagem começa em 0).

4. Uso de Condição Ternária
Para simplificar o código de verificação, o professor utiliza a operação ternária para exibir mensagens no console sobre a existência de filhos, tornando o código mais limpo do que um if tradicional.
*/