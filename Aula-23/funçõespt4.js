/* 
1. O Problema: Funções com Limites
Nas aulas anteriores, se você criasse uma função soma(n1, n2), ela só servia para somar dois números. Se precisasse somar três ou dez, teria de mudar a função ou criar uma nova.

2. A Solução: Parâmetros REST (...)
Os parâmetros REST permitem que você crie uma função que aceita qualquer quantidade de valores sem precisar defini-los um a um.
Como identificar: Você usa três pontinhos (...) antes do nome do parâmetro na declaração da função, como function soma(...valores).
O que acontece por trás: O JavaScript pega todos os números que você enviar e os "espalha" dentro de um Array chamado valores.

3. Como trabalhar com esses valores?
Como o parâmetro REST transforma os dados num Array, você não pode simplesmente somá-los como fazia antes. Você precisa percorrer esse Array:
Tamanho do Array: Você pode usar valores.length para saber quantos números foram enviados.
Percorrendo com Loops: O professor mostra como usar o for tradicional ou, de forma mais elegante, o for...of para somar cada item do Array.

4. Vantagem Prática
A grande mágica é que a chamada da função torna-se dinâmica:
soma(10, 5) funciona.
soma(10, 5, 2, 8, 15) também funciona na mesma função, sem precisar de ajustes.

Dica para o seu código:
Pense no parâmetro REST como uma "sacola térmica". Não importa se você coloca 2 latas ou 12 lá dentro, a sacola (a função) continua sendo a mesma e consegue carregar tudo de uma vez.
*/

function soma(...valores){
   let tam = valores.length
   let res = 0
   for(let v of valores){
    res += v
   }

   return res
}

console.log(soma(10,2,8,5,15,7))