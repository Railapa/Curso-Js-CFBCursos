/*
Pré-Incremento vs. Pós-Incremento
A principal diferença está no momento em que a operação é realizada em relação ao uso do valor:
Pós-Incremento (n++): O valor atual da variável é utilizado na expressão primeiro e, somente depois, ele é incrementado em 1 [04:21].
Exemplo: Se n = 10, ao fazer console.log(n++), ele imprime 10, mas o valor de n passa a ser 11 após a execução dessa linha [06:11].
Pré-Incremento (++n): O valor da variável é incrementado em 1 antes de ser utilizado na expressão [04:53].
Exemplo: Se n = 10, ao fazer console.log(++n), ele imprime 11 [05:03].

Operador de Inversão/Negação (-)
O sinal de menos - antes de uma variável funciona como um operador de inversão de sinal [09:02].
Se o número é positivo, ele se torna negativo.
Se o número é negativo, ele se torna positivo [09:11].
Exemplo: Se n = 10, então -n resulta em -10 [09:28].

Concatenação com o Operador +
O operador + muda de função dependendo do tipo de dado:
Soma: Se ambos os valores forem numéricos, ele realiza a soma matemática [10:54].
Concatenação: Se qualquer um dos valores envolvidos for uma string (texto), o JavaScript converte tudo para string e "junta" os valores em vez de somá-los [11:19].
Exemplo: "10" + 20 resulta na string "1020" e não no número 30 [11:27].
*/