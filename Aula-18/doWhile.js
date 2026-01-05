/*
1. Loop while
Teste no início: A expressão lógica é avaliada antes de qualquer comando ser executado [01:40].
Garantia de execução: No while, não há garantia de que o código será executado. Se a condição inicial for falsa, o programa pula o bloco e segue adiante [02:14].
Exemplo: Se você tiver uma variável n = 10 e a condição for while (n < 10), o loop nunca será executado [04:44].

2. Loop do while
Teste no final: O bloco de comandos é executado primeiro e a condição lógica é testada apenas ao final da iteração [01:22].
Garantia de execução: No do while, o bloco de comandos será executado pelo menos uma vez, independentemente de a condição ser verdadeira ou falsa [03:30].
Exemplo: Com a mesma variável n = 10 e a condição while (n < 10), o programa executará o comando dentro do do uma vez, testará a condição no final, verá que é falsa e então sairá do loop [05:18].

3. Regras Comuns
Ambos continuam iterando enquanto a expressão retornar verdadeiro [00:18].
Em ambos os casos, é crucial ter uma variável de controle que seja alterada dentro do loop para evitar um Loop Infinito [05:57].

Resumo da Diferença:
while: Testa primeiro, executa depois (pode rodar 0 ou mais vezes).
do while: Executa primeiro, testa depois (roda obrigatoriamente 1 ou mais vezes) [03:30].

*/
let n = 10
while (n > 10){
    console.log(n)
    n++
}

let c = 10
do {
    console.log(c)
    c++
} while(n > 10)