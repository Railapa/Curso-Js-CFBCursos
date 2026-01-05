/*
1. O Conceito do while
A palavra while significa "enquanto". Portanto, o loop executará um bloco de comandos enquanto uma condição específica for verdadeira [01:11].
Assim que a condição se torna falsa, o programa sai do loop e continua a execução normal [01:37].

2. Estrutura e Cuidados
Teste no Início: O while testa a condição antes de entrar no bloco de comandos. Se a condição já for falsa de início, ele nem chega a rodar o código interno [01:47].
Variável de Controle: É fundamental manipular a variável que faz parte da condição dentro do loop (por exemplo, incrementando-a com n++). Se você esquecer disso, criará um Loop Infinito, o que pode travar o seu programa [04:02].
Loop Infinito Proposital: Em alguns casos, como no desenvolvimento de jogos ou sistemas que precisam rodar continuamente, o loop infinito pode ser desejado (ex: while(true)) [07:45].

3. Exemplo Prático: Cálculo de Fatorial
O professor demonstra como usar o while para calcular o fatorial de um número (ex: 5! = 5 × 4 × 3 × 2 × 1 = 120) [08:21]:
Define-se uma variável n com o valor desejado (ex: 5 ou 10).
Define-se uma variável fatorial iniciando em 1.
O loop while roda enquanto n >= 1.
Dentro do loop, multiplica-se o valor de fatorial por n e depois diminui-se o n (n--) até chegar a 1 [09:09].

Resumo
O while é a ferramenta certa quando a repetição depende de uma condição lógica e não necessariamente de um número fixo de vezes [11:11].
*/

let n = 5
let fat = 1
while(n >= 1){
    fat *= n
    n--
}

console.log(fat)