/* 
1. O que são Parâmetros?
Até agora, as funções eram "fixas". Com parâmetros, você cria variáveis dentro dos parênteses () da função que funcionam como portas de entrada [00:17].
Analogia: Imagine um liquidificador (função). O botão de ligar é a chamada, mas as frutas que você coloca dentro são os parâmetros. O resultado final depende do que você inseriu.

2. Como funciona na prática?
Declaração: Você define um nome para o parâmetro, como function soma(n1, n2). Esses nomes só existem dentro da função [03:52].
Chamada: Ao chamar a função, você passa os valores reais (argumentos): soma(10, 5). O JavaScript automaticamente associa o 10 ao n1 e o 5 ao n2 [05:06].
Flexibilidade: Você pode passar strings, números ou qualquer outro tipo de dado, e o JavaScript tentará processar [02:20].

3. Valores Padrão (Default) [06:40]
Uma novidade importante desta aula é a definição de valores padrão.
Se você chamar uma função que espera dois números, mas passar apenas um, o JavaScript normalmente retornaria NaN (Not a Number) [06:32].
A Solução: Você pode definir um valor inicial na declaração: function soma(n1=0, n2=0). Se você esquecer de enviar um valor, o sistema usará o 0 automaticamente [06:57].

4. Parâmetros e Retorno Juntos [08:10]
O professor mostra como unir os conceitos das aulas anteriores:
A função recebe os dados via parâmetros.
Processa a lógica internamente.
Devolve o resultado final usando o return [10:22].

5. Manipulação de Variáveis Externas [14:38]
Um ponto avançado tocado no vídeo é que uma função pode alterar diretamente o valor de uma variável que está fora dela (escopo global).
Ele demonstra uma função add(v) que soma um valor diretamente a uma variável valor declarada no topo do script [12:10].
Isso mostra que funções parametrizadas podem ser usadas tanto para gerar novos valores quanto para modificar o estado atual do seu programa [15:48].


O professor mencionou que o JavaScript tem tipagem automática [02:20]. Isso significa que se você passar uma string onde a função espera um número, o JS pode tentar "concatenar" (juntar os textos) em vez de somar. Por isso, sempre tenha cuidado com o tipo de dado que você envia para os parâmetros!
*/

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(17, 8))

let valor = 0
function add(v){
    return valor + v
}

valor = add(7)
console.log(valor)
console.log(add(3))