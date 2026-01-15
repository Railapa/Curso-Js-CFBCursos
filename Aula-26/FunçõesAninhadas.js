/* 

Esta aula do curso do professor Bruno (CFB Cursos) aborda o conceito de funções aninhadas (uma função dentro de outra) e como elas podem trabalhar juntas para processar dados de forma organizada.

Aqui está um resumo detalhado dos pontos principais e algumas informações extras para reforçar seu aprendizado:

1. O Conceito Central: Funções Aninhadas
O professor explica que é perfeitamente válido declarar e executar uma função dentro do corpo de outra. Isso é útil para:
Encapsulamento: Você cria uma função auxiliar que só existe e faz sentido dentro de uma função maior.
Organização: Divide uma tarefa complexa em blocos menores e mais fáceis de entender.

2. Exemplo Prático da Aula (A Lógica do Somador)
No vídeo, é construída uma função principal (soma) que utiliza uma função interna (somar) para processar uma lista de valores:
Função Externa (soma): Recebe múltiplos argumentos usando o parâmetro REST (...valores).
Função Interna (somar): Esta função é declarada dentro da primeira. Ela recebe o array de valores, utiliza um loop for...of para iterar sobre eles e acumula o total em uma variável.
O Retorno: A função externa retorna o resultado que foi gerado pela função interna.

3. Integração de Conceitos Anteriores
O professor aproveita para misturar vários conceitos que você já praticou nos exercícios anteriores:
Arrow Functions: A sintaxe moderna de "setinha" (=>).
Parâmetros REST: O uso de ... para capturar uma quantidade indefinida de argumentos.
Loops for...of: A forma ideal de percorrer coleções de dados (arrays).

Informações Adicionais para Melhor entendimento:
Para ajudar você a "abrir a cabeça" como o professor sugere, considere estes dois conceitos que explicam por que as funções aninhadas são tão poderosas no JavaScript:

Escopo (Scope): A função interna tem acesso às variáveis da função externa. No exemplo da aula, se houvesse uma variável na função soma, a função somar poderia usá-la diretamente. No entanto, o contrário não é verdadeiro: o que está dentro da função interna fica "escondido" da função externa e do resto do programa.

Closures (Fechamentos): Este é um termo técnico que você ouvirá muito. Quando uma função interna "lembra" do ambiente em que foi criada, mesmo depois que a função externa terminou, chamamos isso de Closure. É a base para criar dados privados em JavaScript.
*/

const soma = (...valores) => {
    const somar = (val) =>{
        let res = 0
        for(v of val){
            res += v
        }
        return res
    }

    return somar(valores)
}

console.log(soma(10,15,5))