/*
Operadores Lógicos Bitwise
Funcionam de forma semelhante aos operadores lógicos (&&, ||), mas comparam cada bit correspondente de dois números:
E (&) - AND: Retorna o bit 1 apenas se os dois bits comparados forem 1. Caso contrário, retorna 0 [04:47].
Exemplo: 10 & 11 resulta em 10.
OU (|) - OR: Retorna o bit 1 se pelo menos um dos bits comparados for 1 [08:08].
Exemplo: 10 | 11 resulta em 11.
OU Exclusivo (^) - XOR: Retorna 1 apenas se os bits forem diferentes (um é 0 e o outro é 1). Se forem iguais, retorna 0 [10:47].
Exemplo: 13 ^ 14 resulta em 3.


Operadores de Deslocamento (Shift)
Esses operadores "empurram" os bits para a esquerda ou para a direita, o que altera drasticamente o valor do número:
Deslocamento para a Esquerda (<<): Desloca os bits para a esquerda e preenche o espaço vazio à direita com zero.
Regra Prática: Deslocar 1 bit para a esquerda dobra o valor do número [15:39].
Exemplo: 10 << 1 resulta em 20; 20 << 2 resulta em 80.
Deslocamento para a Direita (>>): Desloca os bits para a direita, descartando os bits que "saem" pela ponta.
Regra Prática: Deslocar 1 bit para a direita reduz o valor do número pela metade (divisão inteira) [17:30].
Exemplo: 30 >> 1 resulta em 15; 20 >> 2 resulta em 5.
*/