/* 
1. O que são Funções Anônimas?
Sem Nome: Elas não são declaradas com um identificador (ex: function soma()). Em vez disso, são criadas omitindo o nome.
Tempo de Execução: Diferente das funções nomeadas, que ficam prontas na memória assim que o programa começa, as funções anônimas são criadas e instanciadas apenas no momento da execução.
Associação a Variáveis: Como não têm nome, você geralmente as associa a uma variável ou constante (ex: const f = function(v1, v2) { ... }) para poder chamá-las depois usando o nome da variável.

2. Características e Flexibilidade
Mesmos Recursos: Assim como as funções padrão, elas podem ser parametrizadas e ter retorno de valor.
Integração com REST: Você pode usar parâmetros REST (...valores) dentro de uma função anônima normalmente.
Uso Prático: Elas são ideais para situações onde você precisa de uma função rápida que não será reutilizada em muitos lugares diferentes do código.

3. Função Construtor (Anônima e Especial)
O professor também introduz uma forma alternativa e mais simples de criar funções anônimas usando o operador new e o construtor Function:
Sintaxe: const f = new Function("v1", "v2", "return v1 + v2").

Regras Específicas:
Usa-se a palavra Function com "F" maiúsculo.
Todos os argumentos e o corpo da função devem ser passados como strings (entre aspas).
O último parâmetro passado para o construtor é sempre considerado o corpo da função (o que ela faz), enquanto os anteriores são os argumentos.

Diferença Visual para você:
Função Tradicional: function soma(a, b) { return a + b; } (Fica na memória desde o início).
Função Anônima: const soma = function(a, b) { return a + b; } (Criada na hora que o código chega nela).

Dica extra: As funções anônimas são a base para as famosas Arrow Functions que você provavelmente verá em breve. Elas tornam o código muito mais moderno e limpo!
*/

let f = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
    return res
}

console.log(f(4,6,5))