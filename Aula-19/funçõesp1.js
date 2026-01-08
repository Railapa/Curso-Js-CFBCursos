/* 
FUNÇÕES PT1

Esta aula do canal CFBCursos é uma introdução fundamental sobre o conceito e o funcionamento de Funções em JavaScript. O professor Bruno explica que uma função é, essencialmente, um bloco de comandos que pode ser executado em um momento oportuno.

Aqui estão os pontos principais abordados no vídeo:

1. O que é uma Função?
É um bloco de código com um nome que fica armazenado na memória [00:42].
Diferente do código normal que roda sequencialmente, a função só é executada quando você a "chama" [01:22].
A principal vantagem é a reutilização de código, permitindo executar o mesmo bloco várias vezes sem precisar reescrevê-lo [01:46].

2. Declaração vs. Chamada [02:02]
Declaração: É quando você cria a função usando a palavra-chave function, define o nome e o que ela faz entre chaves {}.
Chamada (Execução): É o momento em que você usa o nome da função seguido de parênteses () no seu código para que ela realmente realize as tarefas [03:39].

3. Parâmetros [02:13]
Os parênteses após o nome da função servem para receber parâmetros (dados de entrada).
Mesmo que a função não utilize parâmetros, os parênteses vazios são obrigatórios na declaração e na chamada [02:38].

4. Exemplos Práticos
Loop For: O professor demonstra como chamar uma função repetidamente dentro de um loop for [05:07].
Operações Lógicas: Criação de uma função de soma simples para ilustrar como organizar cálculos dentro de blocos funcionais [05:44].
Manipulação do DOM: Ele mostra como uma função pode ser usada para alterar textos de elementos HTML (divs) na página [07:31].
Eventos: Demonstra o uso prático de uma função sendo disparada apenas quando um usuário clica em um botão (onclick), reforçando que a função aguarda um estímulo para agir [11:03].
*/

function nome(){
    console.log(`CFB Cursos`)
}

nome()