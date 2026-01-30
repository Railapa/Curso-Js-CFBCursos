const caixa1 = document.querySelector('#caixa1')
const cursos = document.querySelectorAll('.curso')
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']

tecnologias.map((el, chave) => {
    const novoElemento = document.createElement('div')

    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1') 

    const btnLixeira = document.createElement('img')
    btnLixeira.setAttribute('src', 'lixeira.png')
    novoElemento.appendChild(btnLixeira)
    btnLixeira.setAttribute('class', 'icone-lixeira')

    btnLixeira.addEventListener('click', (evt) => {
        caixa1.removeChild(novoElemento)
    })

    caixa1.appendChild(novoElemento)
})

/* 
1. O Método removeChild()
Diferente de apenas esconder um elemento, o removeChild remove o nó completamente da árvore do DOM.

Funcionamento: Ele deve ser chamado a partir do elemento pai.

Sintaxe: pai.removeChild(filho). O JavaScript precisa saber exatamente quem é o pai e quem é o filho que será removido.

2. Identificando o Alvo com evt.target
O professor mostra como usar o objeto de evento para identificar qual item o usuário clicou.

Inicialmente, ele adiciona um evento de clique diretamente no elemento que será removido.

Ao clicar, o evt.target captura o elemento exato, que é então passado para o removeChild.

3. Navegação com parentNode para Remoção
Um desafio comum surge quando clicamos em um ícone (como uma lixeira) dentro de um card para remover o card inteiro.

Se clicarmos na lixeira, o evt.target é a imagem da lixeira, mas o que queremos remover é o card (o pai da lixeira).

Solução: O professor utiliza evt.target.parentNode para subir um nível na árvore e identificar o card que deve ser excluído do container principal.

4. Exemplo Prático: Lista de Cursos com Ícone de Lixeira
A aula demonstra a criação dinâmica de uma lista onde cada item possui um ícone de lixeira.

O ícone é criado com document.createElement('img').

Um evento de clique é adicionado especificamente à imagem da lixeira.

Ao clicar na lixeira, o código identifica o pai dela (o item da lista) e solicita ao container principal que remova esse filho específico.

Dica de Fixação: A principal dificuldade dessa aula é entender que o removeChild precisa ser chamado pelo pai direto do elemento que você quer apagar. Se tentar remover um elemento chamando o método em um avô ou em um nó que não é o pai, o JavaScript retornará um erro.
*/