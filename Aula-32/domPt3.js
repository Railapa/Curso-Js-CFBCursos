/* 
1. O Método getElementsByClassName
Seleção por Classe: Este método permite capturar todos os elementos do HTML que possuem uma classe CSS específica (parâmetro class).
Coleção de Elementos: Assim como o getElementsByTagName, ele retorna uma HTML Collection, que é um conjunto de elementos, já que múltiplos itens podem compartilhar a mesma classe na página.

2. Conversão para Array (Spread Operator)
O professor reforça a importância de transformar a HTML Collection em um Array real para ter acesso a métodos mais poderosos como .map().
Como fazer: Utiliza-se o operador spread (...) dentro de colchetes: const cursos = [...document.getElementsByClassName("curso")].
Vantagem: Isso permite iterar sobre os elementos de forma muito mais simples e profissional.

3. Manipulação Prática (Adicionando Classes)
A aula demonstra como usar o JavaScript para alterar o visual da página dinamicamente:
classList.add(): O professor usa este método para adicionar uma nova classe CSS chamada "destaque" aos elementos selecionados.
Seletividade: É mostrado como você pode escolher aplicar a mudança a todos os elementos de uma classe ou apenas a um subgrupo (por exemplo, apenas elementos que possuem a classe "C1").

4. Acessando Elementos Específicos
Por ser uma coleção (e posteriormente um Array), você pode acessar um elemento único usando o seu índice:
Exemplo: document.getElementsByClassName("curso")[0] pegaria o primeiro elemento que usa a classe "curso".

Dica para os seus estudos: Esta aula é o "pulo do gato" para criar interfaces dinâmicas. Imagine um botão "Modo Noturno" que, ao ser clicado, usa o getElementsByClassName para encontrar todos os elementos da página e adicionar uma classe de fundo escuro a eles.
*/

const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[0]

cursoC2.map((el) =>{
    el.classList.add('destaque')
})