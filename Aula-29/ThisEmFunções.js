/* 
Parte 1: O Conceito de this (O foco da sua dúvida)
O professor Bruno começa explicando que o this é um operador usado para fazer referência ao próprio elemento ou contexto onde ele está inserido.
A Distinção Necessária: Ele mostra que, dentro de uma função, você pode receber um parâmetro chamado nome e ter uma variável interna também chamada nome. Para o JavaScript não se confundir, usamos o this.nome para dizer: "esta variável pertence a esta função (objeto)".
Como um "RG" do Objeto: Pense no this como se a função estivesse apontando para si mesma. No exemplo this.nome = nome, o this.nome é a "propriedade" da função, enquanto o segundo nome é apenas o valor que veio lá de fora (o parâmetro).

Parte 2: O Problema das Funções Tradicionais (A parte mais complexa)
O professor avança para mostrar um problema comum: quando usamos funções anônimas tradicionais dentro de outras funções (como em um setTimeout), o this se perde.
O "Sombreamento": Uma função tradicional cria seu próprio "clima" (contexto). Se você colocar um cronômetro (setTimeout) com uma função normal dentro, o this daquela função interna vai procurar variáveis dentro do cronômetro, e não na função pai (aluno), resultando em undefined.

Parte 3: A Solução com Arrow Functions
É aqui que o professor prova a superioridade das Arrow Functions para funções anônimas:
Contexto Pai: Diferente das funções normais, a Arrow Function não cria um novo contexto. Ela usa o contexto de quem a criou (o "pai").
Resultado Prático: Por causa disso, ela consegue "enxergar" o this.nome da função principal sem problemas, resolvendo o erro que a função tradicional causou.

Dica extra para não confundir:
Se você achou a parte do New aluno() ou do setTimeout confusa, não se preocupe agora. O que você realmente precisa levar dessa aula é:
O this serve para acessar propriedades que pertencem àquela função específica.
Arrow Functions são mágicas porque elas mantêm o acesso ao this do pai, enquanto funções normais tentam criar um this novo e acabam não encontrando nada.
*/



function aluno(nome, nota){
    this.nome = nome
    this.nome = nota

    console.log(nome)
    console.log(nota)
}

aluno('Raí', 10)