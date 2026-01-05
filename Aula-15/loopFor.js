/*
1. O que são Loops?
Loops são estruturas que permitem repetir um comando ou um bloco de comandos várias vezes [00:31].
Cada repetição do loop é tecnicamente chamada de iteração [01:02].

2. Tipos de Loops
O professor divide os loops em duas categorias principais [01:36]:
Definidos: Quando você sabe (ou tem uma noção de) quantas vezes o bloco deve ser repetido. O exemplo principal é o for.
Indefinidos: Quando não se sabe exatamente quantas iterações serão necessárias. Os exemplos são o while e o do while.

3. Sintaxe do Loop for
A estrutura básica do for exige três configurações dentro dos parênteses [04:05]:
Inicialização: Onde se cria a variável de controle (ex: let i = 0).
Condição de execução: Enquanto esta condição for verdadeira, o loop continua (ex: i < 10).
Controle (Incremento/Decremento): Como a variável de controle será alterada ao final de cada iteração (ex: i++).

4. Exemplos Práticos
Execução Básica: O professor demonstra um loop que imprime "CFB Cursos" 10 vezes, mostrando como a variável i muda de 0 a 9 e faz o loop parar quando chega a 10 [09:42].
Cuidado com o Loop Infinito: É alertado sobre o perigo de criar condições que nunca se tornam falsas, o que trava o programa e consome recursos infinitamente [10:47].
Misturando Estruturas: No final, é mostrado um exemplo prático que percorre de 0 a 99 e usa um if com o operador de módulo (%) para identificar e imprimir se cada número é par ou ímpar [12:46]. 
*/

for(let i = 0; i <= 3; i++){
    console.log(`Passo ${i}`)
}

for(let c = 0; c <= 20; c++){
    if(c%2==0){
        console.log(`${c} é Par`)
    } else {
        console.log(`${c} é Impar`)
    }
}