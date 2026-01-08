/* 
1. O Conceito de Retorno (return)
Na aula anterior, a função apenas executava uma ação (como imprimir algo na tela). Agora, aprendemos que uma função pode "trabalhar" e devolver uma resposta para quem a chamou [01:32].
Pense assim: Imagine que você pede a um amigo (a função) para somar dois números. Se ele apenas somar e guardar o resultado para ele, você não sabe quanto deu. O return é o ato do seu amigo te dizer: "O resultado é 20".

2. Onde o Retorno vai Parar?
Quando uma função retorna algo, esse valor "substitui" a chamada da função no código. Você pode:
Imprimir direto: Usar console.log(minhaFuncao()) [02:32].
Armazenar em uma variável: Como let resultado = minhaFuncao(). Isso é útil porque agora você tem o dado salvo para usar depois [04:14].

3. A Regra de Ouro do return [07:55]
Este é um dos pontos mais importantes: O return finaliza a execução da função imediatamente.
Qualquer código que estiver escrito abaixo de um return dentro do mesmo bloco não será executado.
O professor mostra que, se você colocar dois returns seguidos, o segundo será ignorado (o editor de código costuma até deixá-lo "apagadinho") [07:35].

4. Retornos Condicionais (Lógica Inteligente)
Você pode ter mais de um return em uma função, desde que eles estejam dentro de estruturas de decisão (como o if).
Exemplo da aula: Uma função que calcula se um número é "Par" ou "Ímpar". Ela tem um if para retornar "par" e um else para retornar "ímpar" [05:40].
Dica Extra: Isso é ótimo para validações. Ex: Uma função que verifica se um usuário é maior de idade. Se for, return true; se não, return false.

5. Resumo Visual (Como funciona)
Chamada: O programa pede para a função executar.
Processamento: A função faz cálculos ou lógica interna.
Entrega: O comando return envia o dado de volta e "sai" da função.
Por que isso é melhor que apenas dar um console.log dentro da função? Porque uma função que retorna um valor é muito mais flexível. Se ela apenas imprime na tela, você só pode ver o resultado. Se ela retorna o valor, você pode usá-lo para fazer outro cálculo, salvar em um banco de dados ou mostrá-lo em diferentes partes do seu site.
*/

function canal(){
    let n1 = 17
    let n2 = 2
    let res = n1 * n2
    if (res%2==0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

let num = canal()
console.log(num)